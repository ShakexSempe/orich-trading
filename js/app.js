// GLOBAL VARIABLES
const title = document.getElementById("title");
const hero = document.getElementById("hero");
const toggle = document.querySelector(".toggle");
const header = document.getElementById("header");
const main = document.querySelector(".main");
const logo = document.querySelector(".logo");
const topBtn = document.getElementById("top-btn");
const aside = document.querySelector("aside");
const dropdownBtn = document.querySelectorAll(".aside-dropdown")
const links = document.querySelectorAll('#aside ul li a');

// HAMBURGER TOGGLE
toggle.addEventListener("click",  () => {
    // ADD ACTIVE CLASS TO : 
    // MAIN = OVERLAY , NAV = DISPLAY, HEADER = BLACK BG, REMOVE HERO HEADER  
    aside.classList.toggle("active");
    toggle.classList.toggle("active");
    main.classList.toggle("active");
    header.classList.remove("scroll");
    header.classList.remove("hero-header");
    header.classList.toggle("toggle-header");
    console.log("open");
    // logo.classList.remove("active-logo");
});
// REMOVE ACTIVE CLASSES WHEN NAV LINKS CLICKED
links.forEach(link => {
    link.addEventListener("click", () => {
        aside.classList.remove("active");
        toggle.classList.remove("active");
        main.classList.remove("active");
        header.classList.remove("active");
        header.classList.add("scroll");
        header.classList.remove("toggle-header");
    });
});
// REMOVE ACTIVE CLASSES WHEN AREA OUTSIDE MENU IS CLICKED
main.addEventListener("click", () => {
    aside.classList.remove("active");
    toggle.classList.remove("active");
    main.classList.remove("active");
    header.classList.remove("active");
});

// HERO INTERSECTION OBSERVER
const indexHeader = document.querySelector(".index-header");
const heroOptions = {
    rootMargin: "-100% 0px 0px 0px"
};

const heroObserver = new IntersectionObserver(
    function(
        entries, heroObserver
    ) {
        entries.forEach(entry => {
            if(!entry.isIntersecting) {
                console.log("hero NOT intersecting");
                indexHeader.classList.remove("hero-header");
                topBtn.classList.add("active");
                logo.classList.remove("active-logo");
            } else {
                console.log("hero intersecting");
                indexHeader.classList.add("hero-header");
                topBtn.classList.remove("active");
                logo.classList.add("active-logo");
            }
        });
    }, heroOptions
);
heroObserver.observe(hero);
