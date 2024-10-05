document.addEventListener("DOMContentLoaded", function() {

    function initializeMenu() {
        let menuBtn = document.getElementById("menu-btn");
        let mobileMenu = document.getElementById("mobile-menu");

        let main = document.querySelector("main");
        let img = menuBtn.firstChild;

        menuBtn.onclick = function(ev) {
            if (mobileMenu.style.display == "block") {
                mobileMenu.style.display = "none";
                main.style.opacity = 1;
                img.src = "/images/menu.svg";
            } else {
                mobileMenu.style.display = "block";
                main.style.opacity = 0.2;
                img.src = "/images/menu-closer.svg";
            }
        };

        let pathname = window.location.pathname;

        // set active class for mobile menu
        mobileMenu.querySelectorAll("a").forEach(function(link) {
            if (link.getAttribute("hx-get") == pathname) {
                link.classList.add("active");
            } else {
                link.classList.remove("active");
            }
        });

        // set active class for desktop menu
        document.querySelectorAll(".hand-drawn-link").forEach(function(link) {
            
            if (link.getAttribute("hx-get") == pathname) {
                console.log(link.getAttribute("hx-get"));
                link.classList.add("active-link");
            } else {
                link.classList.remove("active-link");
            }
        })
    }

    // Initialize the menu on page load
    initializeMenu();

    // Reinitialize the menu after HTMX swaps content
    document.body.addEventListener("htmx:afterSwap", function(event) {
        initializeMenu();
    });

    // email to
    document.getElementById('email-button').addEventListener('click', function() {
        document.getElementById("email-button")
    
        const email = 'saidaitdrissofficial@gmail.com';
        const subject = 'Hello there';
        const body = 'I would like to hire you ...';
        const mailtoLink = `mailto:${email}?
    
        subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailtoLink;
    })

    // ask for resume
        document.getElementById('resume-button').addEventListener('click', function() {
            document.getElementById("resume-button")
        
            const email = 'saidaitdrissofficial@gmail.com';
            const subject = 'Hello there';
            const body = 'I would like see your resume ...';
            const mailtoLink = `mailto:${email}?
        
            subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            window.location.href = mailtoLink;
        })
});

