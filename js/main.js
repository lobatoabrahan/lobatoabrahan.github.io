document.querySelector('.navbar-toggler').removeAttribute('aria-expanded')

/* document.querySelector('.navbar-toggler').addEventListener('click', ()=>{
    document.querySelector('.navbar-toggler').setAttribute('aria-expandedd', 'true')
}) */

document.querySelector('.navbar-toggler').addEventListener('click', ()=>{
    //Animate Links
    console.log(document.querySelector('.navbar-toggler').getAttribute('aria-expandedd'));
    console.log(document.querySelector('.navbar-collapse').className)

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

