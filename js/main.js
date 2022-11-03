const navbarResponsive = document.querySelector('.navbar__responsive');
let navbarResponsiveOpen = false
navbarResponsive.addEventListener('click', () => {
    if(!navbarResponsiveOpen) {
        navbarResponsive.classList.add('open');
        navbarResponsiveOpen = true;
    } else {
        navbarResponsive.classList.remove('open');
        navbarResponsiveOpen = false
    }
})