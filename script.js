document.addEventListener("DOMContentLoaded", function () {

    // Typing Animation
    const typing = document.getElementById("typing");
    const text = "Akinola Akinkunmi Isaac";

    if (typing) {
        let i = 0;

        function typeWriter() {
            if (i < text.length) {
                typing.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        }

        typeWriter();
    }

    // Mobile Menu
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", function () {
            navLinks.classList.toggle("active");
        });
    }

    // Back to Top Button
    const topBtn = document.getElementById("topBtn");

    if (topBtn) {

        window.addEventListener("scroll", function () {
            if (window.scrollY > 300) {
                topBtn.style.display = "block";
            } else {
                topBtn.style.display = "none";
            }
        });

        topBtn.addEventListener("click", function () {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });

    }

});