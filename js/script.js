const navLink = document.querySelectorAll(".nav-link");
const scrollTop = document.querySelector(".scroll-top");

function navOver(v) {
    v.addEventListener("mouseover", () => {
        v.classList.add("active");
    });
}
function navLeave(v) {
    v.addEventListener("mouseleave", () => {
        v.classList.remove("active");
    });
}

navLink.forEach( _ => {
    navOver(_);
    navLeave(_);
});

scrollTop.addEventListener("click", () => {
    window.scroll({
        top: 0,
        behavior: 'smooth'
    });
});