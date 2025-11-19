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



function showCourses(category) {

    const target = document.getElementById(`courses-${category}`);
    const filtered = courses.filter(c => c.category === category);

    document.querySelectorAll(".course-list").forEach(div => {
        if (div !== target) {
            div.classList.remove("open");
            div.style.maxHeight = 0;
            div.innerHTML = "";
        }
    });

    if (target.classList.contains("open")) {
        target.classList.remove("open");
        target.style.maxHeight = 0;
        target.innerHTML = "";
        return;
    }

    target.innerHTML = filtered
        .map(c => `<div class="course-item">${c.title}</div>`)
        .join("");

    target.classList.add("open");
    target.style.maxHeight = target.scrollHeight + "px";
}




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

    selected.addEventListener("click", () => {
        optionsBox.style.display =
            optionsBox.style.display === "block" ? "none" : "block";
    });

    options.forEach(option => {
        option.addEventListener("click", () => {
            selected.textContent = option.textContent;
            optionsBox.style.display = "none";

            filterCourses(option.textContent);
        });
    });

    document.addEventListener("click", (e) => {
        if (!select.contains(e.target)) {
            optionsBox.style.display = "none";
        }
    });
});
