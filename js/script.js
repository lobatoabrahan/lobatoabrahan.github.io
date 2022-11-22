$(document).ready(function () { "use strict"; $(".video-button").on("click", function () { var e = '<iframe allowfullscreen src="' + $(this).attr("data-video") + '"></iframe>'; $(this).replaceWith(e) }), AOS.init(), $(window).on("scroll", function () { 100 <= $(window).scrollTop() ? $("#navigationBar").addClass("sticky-nav") : $("#navigationBar").removeClass("sticky-nav") }), TweenMax.fromTo(".switch", 2, { opacity: 1 }, { opacity: .3, repeat: -1, yoyo: !0, ease: Power2.easeInOut }), TweenMax.fromTo(".switch-two", 2, { y: 0 }, { y: 10, repeat: -1, yoyo: !0, ease: Power2.easeInOut }), TweenMax.fromTo(".switch-three", 2, { x: 0 }, { x: 10, repeat: -1, yoyo: !0, ease: Power2.easeInOut }); $(".feedback-slider").on("init", function (e) { const o = this; setTimeout(function () { var e = $(".slick-dots > li > button", o); $.each(e, function (e, o) { var t = $(this).attr("aria-controls"), t = $("#" + t).data("dot-img"); $(this).html('<img src="' + t + '" alt="" />') }) }, 100) }).slick({ slidesToShow: 1, slidesToScroll: 1, dots: !0, arrows: !1, adaptiveHeight: !0, autoplay: !0, autoplay: !0, fade: !0, centerMode: !0, centerPadding: "0px", focusOnSelect: !0, responsive: [{ breakpoint: 992, settings: { slidesToShow: 1, slidesToScroll: 1, dots: !1, centerMode: !1, autoplay: !0, infinite: !1 } }, { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1, dots: !1, autoplay: !0, infinite: !1 } }] }); $(function () { $("body").on("click touchstart", ".next-more", function (e) { e.preventDefault(), $(".lode-next:hidden").slice(0, 4).slideDown(), 0 == $(".lode-next:hidden").length && $(".next-more").css("display", "none") }) }), $(function () { $("body").on("click touchstart", ".load-more", function (e) { e.preventDefault(), $(".next-blog:hidden").slice(0, 3).slideDown(), 0 == $(".next-blog:hidden").length && $(".load-more").css("display", "none") }) }), $(".counter").counterUp({}) });


const scriptURL = 'https://script.google.com/macros/s/AKfycbxOw389XRybzdFJxpT4-Gxh4DvVBAeWaZFrqPS2x1b7FXksyeC2gk7RSzAMy0b4IDmf/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => swal("Bienvenido!", "Gracias por querer formar parte de esto", "success"))
        .then(response => form.reset())
        .catch(error => swal('Lo siento', "Hemos tenido un error, vuelve a intentarlo", "error"));
})

const scriptURLContactForm = 'https://script.google.com/macros/s/AKfycbwneu6wgspuDHRhHA1BVcBVKVfiSXERIIPAhznrjxhEq6_arCPJUa97FqzXsdCbPoBN/exec'
const contactForm = document.forms['contact-form']

contactForm.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURLContactForm, { method: 'POST', body: new FormData(contactForm) })
        .then(response => swal("Bienvenido!", "Gracias por querer formar parte de esto", "success"))
        .then(response => form.reset())
        .catch(error => swal('Lo siento', "Hemos tenido un error, vuelve a intentarlo", "error"));
})