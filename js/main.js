window.addEventListener("scroll", () => {
    let header = document.querySelector("header");
    let fixed = header.offsetTop;
    let scroll = document.querySelector(".to-top-btn");
    scroll.classList.toggle("show", window.scrollY > 500)

    header.classList.toggle("fixed", window.pageYOffset > fixed)
})

