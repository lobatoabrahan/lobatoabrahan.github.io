document.querySelector('.navbar-toggler').removeAttribute('aria-expanded')

/* document.querySelector('.navbar-toggler').addEventListener('click', ()=>{
    document.querySelector('.navbar-toggler').setAttribute('aria-expandedd', 'true')
}) */

document.querySelector('.navbar-toggler').addEventListener('click', ()=>{
    if (document.querySelector('.navbar-toggler').getAttribute('aria-expandedd') === 'false') {
        document.querySelector('.navbar-toggler').setAttribute('aria-expandedd', 'true');
    } else {
        document.querySelector('.navbar-toggler').setAttribute('aria-expandedd', 'false')
    }
 });

 document.querySelector('.navbar-collapse').addEventListener('click', ()=>{
    document.querySelector('.navbar-collapse').classList.remove('show');
    document.querySelector('.navbar-toggler').setAttribute('aria-expandedd', 'false')
    document.querySelector('.navbar-toggler').setAttribute('aria-expanded', 'false')
 })

