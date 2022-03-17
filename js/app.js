const title = document.getElementById("title");
const bgChanger = document.querySelectorAll('.bg-change');
const hero = document.getElementById("hero");
const toggle = document.querySelector(".toggle");
const header = document.getElementById("header");
const main = document.querySelector(".main");
const logo = document.querySelector(".logo");
const topBtn = document.getElementById("top-btn");
const aside = document.querySelector("aside");
const dropdownBtn = document.querySelectorAll(".aside-dropdown")
const links = document.querySelectorAll('#aside ul li a');
console.log(logo);


toggle.addEventListener("click",  () => {
    aside.classList.toggle("active");
    toggle.classList.toggle("active");
    main.classList.toggle("active");
    header.classList.remove("scroll");
    header.classList.toggle("active");
    console.log("open");
    
});

// dropdownBtn.forEach(btn => {
//     btn.addEventListener("click", () => {
//         if(!btn.classList.contains("active")) {
//             btn.classList.add("active");
//         } else {
//             btn.classList.remove("active");
//         }
//         // btn.addEventListener("click", () => {

//         // })
//     })
// })

links.forEach(link => {
    link.addEventListener("click", () => {
        aside.classList.remove("active");
        toggle.classList.remove("active");
        main.classList.remove("active");
        header.classList.remove("active");
        header.classList.add("scroll");
    });
});

main.addEventListener("click", () => {
    aside.classList.remove("active");
    toggle.classList.remove("active");
    main.classList.remove("active");
    header.classList.remove("active");
});


// bgChanger.forEach(changer => {
//     changer.addEventListener("click", () => {
//         hero.classList.toggle("active");
//     })
// })

// INTERSECTION OBSERVER
const heroOptions = {
    rootMargin: "-90% 0px 0px 0px"
};

const heroObserver = new IntersectionObserver(
    function(
        entries, heroObserver
    ) {
        entries.forEach(entry => {
            if(!entry.isIntersecting) {
                console.log("hero NOT intersecting");
                header.classList.add("observe");
                topBtn.classList.add("active");
            } else {
                console.log("hero intersecting");
                header.classList.remove("observe");
                topBtn.classList.remove("active");

            }
        });
    }, heroOptions
);

heroObserver.observe(hero);