document.addEventListener("DOMContentLoaded", () => {

    // initialize dropdown
    setupCategoriesDropdown();

    // κρύβουμε το recommended section στην αρχή
    const recommendedSection = document.getElementById("recommended-courses");
    if (recommendedSection) {
        recommendedSection.style.display = "none";
    }
});


// -------------------------------------------------
// 🔥 ΟΤΑΝ ΠΑΤΑΩ ΚΑΤΗΓΟΡΙΑ → ΕΜΦΑΝΙΖΟΥΝ ΜΑΘΗΜΑΤΑ + RECOMMENDED
// -------------------------------------------------
function showCourses(category) {
    // 1. Κλείνουμε όλους τους άλλους κύκλους
    document.querySelectorAll(".course-list").forEach(div => {
        if (div.id !== `courses-${category}`) {
            div.innerHTML = "";
        }
    });

    const target = document.getElementById(`courses-${category}`);
    const filtered = courses.filter(c => c.category === category);

    // 2. Αν είναι ήδη ανοιχτός → κλείστο
    if (target.innerHTML.trim() !== "") {
        target.innerHTML = "";
        return;
    }

    // 3. Διαφορετικά → άνοιξε και δείξε μαθήματα
    target.innerHTML = filtered
        target.innerHTML = filtered
    .map(c => `<div class="course-item">• ${c.title}</div>`)
    .join("");

    // 4. Γέμισε τα προτεινόμενα ΜΟΝΟ για τον επιλεγμένο κύκλο
    const recommendedBox = document.getElementById("course-list");
recommendedBox.innerHTML = filtered
    .map(c => `
        <article class="card">
            <h3>${c.title}</h3>
            <p>${c.description}</p>
        </article>
    `)
    .join("");


    // 5. Εμφάνιση του section
    const recommendedSection = document.getElementById("recommended-courses");
    recommendedSection.style.display = "block";
}




// -------------------------------------------------
// 🔽 DROPDOWN MENU ΜΕ ΚΑΤΗΓΟΡΙΕΣ
// -------------------------------------------------
function setupCategoriesDropdown() {
    const btn = document.getElementById("categoryDropdownBtn");
    const box = document.getElementById("categoryDropdown");

    if (!btn || !box) return;

    btn.addEventListener("click", () => {
        box.style.display = box.style.display === "block" ? "none" : "block";
    });

    // δημιουργία λίστας κατηγοριών
    box.innerHTML = categories
        .map(cat => `
            <div class="category-item" onclick="showCourses('${cat}')">
                ${cat}
            </div>
            <div id="courses-${cat}" class="course-list"></div>
        `)
        .join("");
}
