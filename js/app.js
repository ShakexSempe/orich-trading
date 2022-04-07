// GLOBAL VARIABLES
const title = document.getElementById("title");
const hero = document.getElementById("hero");
const toggle = document.querySelector(".toggle");
const header = document.getElementById("header");
const main = document.querySelector(".main");
const logo = document.querySelector(".logo");
const topBtn = document.querySelector(".index-top-btn");
const aside = document.querySelector("aside");
const dropdownBtn = document.querySelectorAll(".aside-dropdown")
const links = document.querySelectorAll('#aside ul li a');


toggle.addEventListener("click",  () => {
    // TOGGLE VARIABLES

    aside.classList.toggle("active");
    toggle.classList.toggle("active");
    main.classList.toggle("active");
    header.classList.remove("scroll");
    header.classList.toggle("active");
    console.log("open");
    logo.classList.remove("active-logo");
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



// PAGE HEADERS INTERSECTION OBSERVER
// const pageMain = document.querySelectorAll('.page-main')
// const pageMainOptions = {
//     rootMargin: "-50% 0px 0px 0px"
// };

// const pageMainObserver = new IntersectionObserver(
//     function(
//         entries, pageMainObserver
//     ) {
//         entries.forEach(entry => {
//             if(!entry.isIntersecting) {
//                 console.log("page Main NOT intersecting");
//                 indexHeader.classList.add("observe");
//                 topBtn.classList.add("active");
//             } else {
//                 console.log("page Main intersecting");
//                 indexHeader.classList.remove("observe");
//                 topBtn.classList.remove("active");

//             }
//         });
//     }, pageMainOptions
// );

// pageMainObserver.observe(pageMain);

