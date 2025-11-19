document.addEventListener("DOMContentLoaded", () => {
    
    const select = document.getElementById("interestSelect");
    const selected = select.querySelector(".selected");
    const options = select.querySelector(".options");
    const items = select.querySelectorAll(".option");

    selected.addEventListener("click", () => {
        select.classList.toggle("open");
    });

    items.forEach(opt => {
        opt.addEventListener("click", () => {
            selected.textContent = opt.textContent;
            select.classList.remove("open");
        });
    });

    // Click outside → close dropdown
    document.addEventListener("click", (e) => {
        if (!select.contains(e.target)) {
            select.classList.remove("open");
        }
    });

});
