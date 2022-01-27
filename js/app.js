const toggle = document.getElementById("toggle");
const header = document.getElementById("header");
const main = document.getElementById("main");
const aside = document.getElementById("aside");
const links = document.querySelectorAll('#aside ul li a');
console.log(header);

document.addEventListener("scroll", () => {
    const scroll_position = window.scrollY;
    const scroll_height = window.pageYOffset;

    if(scroll_position < 150) {
        header.classList.remove("scroll");
    } else {
        header.classList.add("scroll");
    }
});

toggle.addEventListener("click",  () => {
    aside.classList.toggle("active");
    toggle.classList.toggle("active");
    main.classList.toggle("active");
    header.classList.add("scroll");
});

links.forEach(link => {
    link.addEventListener("click", () => {
        aside.classList.remove("active");
        toggle.classList.remove("active");
        main.classList.remove("active");
        header.classList.add("scroll");
    });
});

main.addEventListener("click", () => {
    aside.classList.remove("active");
    toggle.classList.remove("active");
    main.classList.remove("active");
});