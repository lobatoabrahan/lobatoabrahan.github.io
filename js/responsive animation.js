var navTrigger = document.getElementsByClassName("nav-trigger")[0];
var body = document.getElementsByTagName("body")[0];

//when a user clicks, run my function
navTrigger.addEventListener("click", toggleNavigation);

function toggleNavigation(event) {
    event.preventDefault();
    //add nav-open class to body
    //classList returns a list of the classes applied to the body
    //check the classes listed on the body and if the body has the class remove it. otherwise, add it.
    body.classList.toggle("nav-open");
}