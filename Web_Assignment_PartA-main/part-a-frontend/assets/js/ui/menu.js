//Περιμένουμε το HTML πριν τρέξει ο κώδικας
document.addEventListener("DOMContentLoaded", () => {

    //κουμπί menu
    const toggle = document.getElementById("menu-toggle");

    //sidebar menu
    const nav = document.getElementById("main-nav");

    // Αν δεν υπάρχουν τα στοιχεία στο DOM σταματάμε για αποφυγή λαθών
    if (!toggle || !nav) return;

    // χρήστης κάνει κλικ στο  menu
    toggle.addEventListener("click", () => {

        //προσθέτουμε / αφαιρούμε κλάση "open"
        //CSS χρησιμοποιεί αυτή κλάση για εμφανίσει/κρύψει το sidebar
        nav.classList.toggle("open");
    });
});
