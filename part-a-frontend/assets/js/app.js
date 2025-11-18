document.addEventListener("DOMContentLoaded", () => {

    
    setupCategoriesDropdown();

    
    const recommendedSection = document.getElementById("recommended-courses");
    if (recommendedSection) {
        recommendedSection.style.display = "none";
    }
});


function showCourses(category) {
    
    document.querySelectorAll(".course-list").forEach(div => {
        if (div.id !== `courses-${category}`) {
            div.innerHTML = "";
        }
    });

    const target = document.getElementById(`courses-${category}`);
    const filtered = courses.filter(c => c.category === category);

    
    if (target.innerHTML.trim() !== "") {
        target.innerHTML = "";
        return;
    }

    
    target.innerHTML = filtered
        target.innerHTML = filtered
    .map(c => `<div class="course-item">• ${c.title}</div>`)
    .join("");

    
    const recommendedBox = document.getElementById("course-list");
recommendedBox.innerHTML = filtered
    .map(c => `
        <article class="card">
            <h3>${c.title}</h3>
            <p>${c.description}</p>
        </article>
    `)
    .join("");



    const recommendedSection = document.getElementById("recommended-courses");
    recommendedSection.style.display = "block";
}





function setupCategoriesDropdown() {
    const btn = document.getElementById("categoryDropdownBtn");
    const box = document.getElementById("categoryDropdown");

    if (!btn || !box) return;

    btn.addEventListener("click", () => {
        box.style.display = box.style.display === "block" ? "none" : "block";
    });

    
    box.innerHTML = categories
        .map(cat => `
            <div class="category-item" onclick="showCourses('${cat}')">
                ${cat}
            </div>
            <div id="courses-${cat}" class="course-list"></div>
        `)
        .join("");
}
