document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const courseId = parseInt(params.get("id"));

    const course = courses.find(c => c.id === courseId);

    const box = document.getElementById("course-details");

    if (!course) {
        box.innerHTML = "<p>Course not found.</p>";
        return;
    }

    box.innerHTML = `
        <h2>${course.title}</h2>

        <span class="category-tag">${course.category}</span>

        <p>${course.description}</p>

        

        <br><br>

        <a class="btn-secondary" href="courses.html">Back to Courses</a>
    `;
});
