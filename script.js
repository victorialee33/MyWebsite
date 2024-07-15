document.addEventListener("DOMContentLoaded", function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                console.log("element in view", entry.target)
                entry.target.classList.add('show');
                
            }
        });
    });

    let elements_to_watch = document.querySelectorAll('.card, .proj1 *');
    console.log("elements to watch", elements_to_watch)
    elements_to_watch.forEach((el) => observer.observe(el));
});
 