// JavaScript for Navbar toggle
document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById("toggleNav");
    const navMenu = document.getElementById("navMenu");

    toggleButton.addEventListener("click", function() {
        navMenu.classList.toggle("hidden");
    });

    // Smooth scrolling for internal links
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();

            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const offsetTop = targetElement.offsetTop;
                window.scrollTo({
                    top: offsetTop,
                    behavior: "smooth"
                });
            }
        });
    });
});
