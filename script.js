document.addEventListener("DOMContentLoaded", function () {
    // Start the Journey Button
    const exploreBtn = document.getElementById("exploreBtn");
    if (exploreBtn) {
        exploreBtn.addEventListener("click", function () {
            const storyDiv = document.getElementById("story");
            storyDiv.classList.remove("hidden");
            storyDiv.innerHTML = `
                <h2>Alexander the Great</h2>
                <h3>Alexander the Great, born in 356 BCE in Pella, Macedonia, is one of history's most celebrated figures. His short but transformative reign as king of Macedon and his military genius allowed him to conquer vast territories stretching from Greece to Egypt and into India, creating one of the largest empires the world has ever seen.</h3>
                <h3>He was tutored by the philosopher Aristotle, which deeply influenced his views on philosophy, science, and culture. Alexander's relentless ambition and tactical brilliance on the battlefield allowed him to topple the mighty Persian Empire and pave the way for the Hellenistic era, a time of cultural and intellectual exchange across the known world.</h3>
                <h3>Despite his young age, Alexander became a symbol of military strategy and leadership, admired for his ability to inspire his troops, his bravery in battle, and his ability to adapt to various terrains and combat situations. His story continues to captivate historians, scholars, and military strategists to this day.</h3>          
            `;
            exploreBtn.style.display = "none"; // Hide button after click
        });
    }

    // Button Click Effect
    const buttons = document.querySelectorAll("button");
    buttons.forEach(button => {
        button.addEventListener("click", function () {
            button.classList.add("clicked");
            setTimeout(() => {
                button.classList.remove("clicked");
            }, 300);
        });
    });

    // Text and section animations when entering viewport
    const faders = document.querySelectorAll('.fade-in');
    const sliders = document.querySelectorAll('.slide-in');
    const appearOptions = { threshold: 0.5, rootMargin: "0px" };

    const appearOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, appearOptions);

    faders.forEach(fader => appearOnScroll.observe(fader));
    sliders.forEach(slider => appearOnScroll.observe(slider));
});

document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling effect for internal links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(event) {
            event.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });

    // Highlight active section in navigation
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-links a");

    window.addEventListener("scroll", function() {
        let current = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            if (scrollY >= sectionTop) {
                current = section.getAttribute("id");
            }
        });
        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href").substring(1) === current) {
                link.classList.add("active");
            }
        });
    });

    // Text and section animations when entering viewport
    const faders = document.querySelectorAll('.fade-in');
    const sliders = document.querySelectorAll('.slide-in');

    const appearOptions = { threshold: 0.5, rootMargin: "0px" };
    const appearOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, appearOptions);

    faders.forEach(fader => appearOnScroll.observe(fader));
    sliders.forEach(slider => appearOnScroll.observe(slider));
});

document.addEventListener("DOMContentLoaded", function () {
    // Get the button
    const scrollUpBtn = document.getElementById("scrollUpBtn");

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function () {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollUpBtn.style.display = "block";
        } else {
            scrollUpBtn.style.display = "none";
        }
    };

    // When the user clicks on the button, scroll to the top of the document
    scrollUpBtn.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

