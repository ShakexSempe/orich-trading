const title = document.getElementById("title");
const hero = document.getElementById("hero");
const toggle = document.querySelector(".toggle");
const header = document.getElementById("header");
const main = document.querySelector(".main");
const topBtn = document.getElementById("top-btn");
const aside = document.querySelector("aside");
const links = document.querySelectorAll('#aside ul li a');
console.log(header);

document.addEventListener("scroll", () => {
    const scroll_position = window.scrollY;
    const scroll_height = window.pageYOffset;

    if(scroll_position < 100) {
        header.classList.remove("scroll");
    } 
    else {
        header.classList.add("scroll");
        topBtn.classList.remove("active");
    }

    if(scroll_position > 150) {
        topBtn.classList.add("active");
    }
    else {
        topBtn.classList.remove("active");
    }
});

toggle.addEventListener("click",  () => {
    aside.classList.toggle("active");
    toggle.classList.toggle("active");
    main.classList.toggle("active");
    header.classList.remove("scroll");
    console.log("open")
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

title.addEventListener('click', () => {
    hero.classList.toggle("active");
})