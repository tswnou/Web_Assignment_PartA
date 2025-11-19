document.addEventListener("DOMContentLoaded", () => {

    
    setupCategoriesDropdown();

    
    const recommendedSection = document.getElementById("recommended-courses");
    if (recommendedSection) {
        recommendedSection.style.display = "none";
    }

    
    const btn = document.getElementById("categoryDropdownBtn");
    const box = document.getElementById("categoryDropdown");

    if (btn && box) {
        btn.addEventListener("click", () => {
            btn.classList.toggle("open"); 
            box.style.display = box.style.display === "block" ? "none" : "block";
        });
    }

});



//Άνοιγμα / Κλείσιμο μαθημάτων 
function showCourses(category) {

    const target = document.getElementById(`courses-${category}`);
    const filtered = courses.filter(c => c.category === category);

    // Κλείνει ΟΛΑ τα άλλα accordions
    document.querySelectorAll(".course-list").forEach(div => {
        if (div !== target) {
            div.classList.remove("open");
            div.style.maxHeight = 0;
            div.innerHTML = "";
        }
    });

    // Αν είναι ήδη ανοιχτό → κλείστο
    if (target.classList.contains("open")) {
        target.classList.remove("open");
        target.style.maxHeight = 0;
        target.innerHTML = "";
        return;
    }

    // Γεμίζει μαθήματα
    target.innerHTML = filtered
        .map(c => `<div class="course-item">${c.title}</div>`)
        .join("");

    // Smooth άνοιγμα
    target.classList.add("open");
    target.style.maxHeight = target.scrollHeight + "px";
}



//Δημιουργία dropdown με κατηγορίες

function setupCategoriesDropdown() {

    const box = document.getElementById("categoryDropdown");

    if (!box) return;

    box.innerHTML = categories
        .map(cat => `
            <div class="category-item" onclick="showCourses('${cat}')">
                ${cat}
            </div>
            <div id="courses-${cat}" class="course-list"></div>
        `)
        .join("");
}


document.addEventListener("DOMContentLoaded", () => {
    const select = document.getElementById("trackSelect");
    const selected = select.querySelector(".selected");
    const optionsBox = select.querySelector(".options");
    const options = select.querySelectorAll(".option");

    // Open dropdown
    selected.addEventListener("click", () => {
        optionsBox.style.display =
            optionsBox.style.display === "block" ? "none" : "block";
    });

    // Select option
    options.forEach(option => {
        option.addEventListener("click", () => {
            selected.textContent = option.textContent;
            optionsBox.style.display = "none";

            // Call your filter function
            filterCourses(option.textContent);
        });
    });

    // Close when clicking outside
    document.addEventListener("click", (e) => {
        if (!select.contains(e.target)) {
            optionsBox.style.display = "none";
        }
    });
});
