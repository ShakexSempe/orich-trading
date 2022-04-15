// HERO INTERSECTION OBSERVER
const indexHeader = document.querySelector(".index-header");

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
                indexHeader.classList.add("observe");
                topBtn.classList.add("active");
                logo.classList.remove("active-logo");
            } else {
                console.log("hero intersecting");
                indexHeader.classList.remove("observe");
                topBtn.classList.remove("active");
                logo.classList.add("active-logo");


            }
        });
    }, heroOptions
);

heroObserver.observe(hero);