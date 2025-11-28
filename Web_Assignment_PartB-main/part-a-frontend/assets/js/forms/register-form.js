document.addEventListener("DOMContentLoaded", () => {
    
    //custom dropdown container
    const select = document.getElementById("interestSelect");

    //εμφανίζει την επιλεγμένη τιμή
    const selected = select.querySelector(".selected");

    //εμφανίζει όλες τις επιλογές
    const options = select.querySelector(".options");

    //Όλες οι επιλογές
    const items = select.querySelectorAll(".option");

    //Όταν ο χρήστης πατάει στο κουτί select-> ανοίγουμε/κλείνουμε dropdown.
    selected.addEventListener("click", () => {
        select.classList.toggle("open");
    });

    //Όταν ο χρήστης επιλέγει μία επιλογή -> Αλλάζουμε το κείμενο στην κορυφή + Κλείνουμε το dropdown
    items.forEach(opt => {
        opt.addEventListener("click", () => {
            selected.textContent = opt.textContent;   // εμφάνιση τιμής
            select.classList.remove("open");          // κλείσιμο dropdown
        });
    });

    //  Αν ο χρήστης κάνει κλικ αλλού στη σελίδα, dropdown →  κλείνει

    document.addEventListener("click", (e) => {
        if (!select.contains(e.target)) {  // αν το click ΔΕΝ είναι στο dropdown
            select.classList.remove("open");
        }
    });

});
