document.addEventListener("DOMContentLoaded", () => {

    //Παίρνουμε  παραμέτρους από  URL
    const params = new URLSearchParams(window.location.search);

    // id -> ακέραιο
    const courseId = parseInt(params.get("id"));

    // Βρίσκουμε αντικείμενο μαθήματος που έχει το id
    //μεταβλητή 'courses' έρχεται courses.js
    const course = courses.find(c => c.id === courseId);

    //λεπτομέρειες
    const box = document.getElementById("course-details");

    // Αν δεν βρεθεί μάθημα -> δείχνουμε μήνυμα λάθους στον χρήστη
    if (!course) {
        box.innerHTML = "<p>Course not found.</p>";
        return;
    }

    // Αν υπάρχει το μάθημα, γεμίζουμε το div με στοιχεία του

    box.innerHTML = `
        <h2>${course.title}</h2>

        <!-- Κατηγορία  -->
        <span class="category-tag">${course.category}</span>

        <!-- Περιγραφή  -->
        <p>${course.description}</p>

        <br><br>

        <!--  επιστροφή στη σελίδα Courses -->
        <a class="btn-secondary" href="courses.html">Back to Courses</a>
    `;
});
