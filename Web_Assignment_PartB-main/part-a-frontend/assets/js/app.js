// πρεπει να φορτώσει το HTML πριν τρέξει ο κώδικας
/* document.addEventListener("DOMContentLoaded", () => {

    // λίστα με  κατηγορίες μαθημάτων
    setupCategoriesDropdown();

    // Κρύβουμε  section "Recommended Courses" 
    const recommendedSection = document.getElementById("recommended-courses");
    if (recommendedSection) {
        recommendedSection.style.display = "none";
    }

    // Κουμπί -> ανοίγει/κλείνει  κατηγορίες
    const btn = document.getElementById("categoryDropdownBtn");
    const box = document.getElementById("categoryDropdown");

    // Αν υπάρχουν, προσθέτουμε event listener στο button
    if (btn && box) {
        btn.addEventListener("click", () => {

            // Προσθέτει/αφαιρεί  κλάση "open" για το animation στο βελάκι
            btn.classList.toggle("open");

            // Ανοίγει ή κλείνει το dropdown box
            box.style.display = box.style.display === "block" ? "none" : "block";
        });
    }

}); */



   // Όταν επιλέγεται  κατηγορία → εμφανίζονται  μαθήματα
function showCourses(category) {

    // Βρίσκουμε το αντίστοιχο με βάση κατηγορία
    const target = document.getElementById(`courses-${category}`);

    // Φιλτράρουμε  μαθήματα που ανήκουν στην κατηγορία 
    const filtered = courses.filter(c => c.category === category);

    // Κλείνουμε όλα τα  ανοιχτά accordions 
    document.querySelectorAll(".course-list").forEach(div => {
        if (div !== target) {
            div.classList.remove("open");
            div.style.maxHeight = 0;     
            div.innerHTML = "";          
        }
    });

    // Αν  συγκεκριμένο accordion είναι  ανοιχτό → κλείστο
    if (target.classList.contains("open")) {
        target.classList.remove("open");
        target.style.maxHeight = 0;
        target.innerHTML = "";
        return; 
    }

    //Γεμίζουμε  accordion με μαθήματα της κατηγορίας
    target.innerHTML = filtered
        .map(c => `<div class="course-item">${c.title}</div>`)
        .join("");

    //ανοίγουμε  accordion
    target.classList.add("open");
    target.style.maxHeight = target.scrollHeight + "px";
}



//Δημιουργεί dropdown με κατηγορίες μαθημάτων
function setupCategoriesDropdown() {

    const box = document.getElementById("categoryDropdown");

    // Αν δεν υπάρχει-> μην κάνεις τίποτα
    if (!box) return;

    // Δημιουργούμε HTML για κάθε κατηγορία + empty container για μαθήματα
    box.innerHTML = categories
        .map(cat => `
            <div class="category-item" onclick="showCourses('${cat}')">
                ${cat}
            </div>
            <div id="courses-${cat}" class="course-list"></div>
        `)
        .join("");
}



  // Custom dropdown για  φίλτρο στα Courses 
document.addEventListener("DOMContentLoaded", () => {

    const select = document.getElementById("trackSelect");
    const selected = select.querySelector(".selected");   //δείχνει την επιλογή
    const optionsBox = select.querySelector(".options");  //μενού με  επιλογές
    const options = select.querySelectorAll(".option");   //επιλογές στο μενού

    // Όταν πατάμε πάνω στο selected-> ανοίγει/κλείνει το dropdown
    selected.addEventListener("click", () => {
        optionsBox.style.display =
            optionsBox.style.display === "block" ? "none" : "block";
    });

    // Όταν πατάμε πάνω σε  επιλογή
    options.forEach(option => {
        option.addEventListener("click", () => {

            // Αλλάζουμε κείμενο στο κουτί
            selected.textContent = option.textContent;

            //κλείνουμε  dropdown
            optionsBox.style.display = "none";

            //Καλούμε function που φιλτράρει τα μαθήματα
            filterCourses(option.textContent);
        });
    });

    // Κλείνει το dropdown 
    document.addEventListener("click", (e) => {
        if (!select.contains(e.target)) {
            optionsBox.style.display = "none";
        }
    });
});
