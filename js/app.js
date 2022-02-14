const title = document.getElementById("title");
const bgChanger = document.querySelectorAll('.bg-change');
const hero = document.getElementById("hero");
const toggle = document.querySelector(".toggle");
const header = document.getElementById("header");
const main = document.querySelector(".main");
const topBtn = document.getElementById("top-btn");
const aside = document.querySelector("aside");
const dropdownBtn = document.querySelectorAll(".aside-dropdown")
const links = document.querySelectorAll('#aside ul li a');
console.log(dropdownBtn);

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
        header.classList.add("scroll");
    });
});

main.addEventListener("click", () => {
    aside.classList.remove("active");
    toggle.classList.remove("active");
    main.classList.remove("active");
});


bgChanger.forEach(changer => {
    changer.addEventListener("click", () => {
        hero.classList.toggle("active");
    })
})