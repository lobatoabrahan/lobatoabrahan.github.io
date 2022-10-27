(function ($) {
  'use strict';

  // Sticky Menu
  $(window).scroll(function () {
    if ($('.navigation').offset().top > 100) {
      $('.navigation').addClass('nav-bg');
      $('#navbar').addClass('navbar-oculto');
    } else {
      $('.navigation').removeClass('nav-bg');
      $('#navbar').removeClass('navbar-oculto');
    }
  });

  //service

  // team slider
  $('.team-slider').slick({
    dots: false,
    infinite: false,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<button type=\'button\' class=\'prevArrow\'><i class=\'ti-arrow-left\'></i></button>',
    nextArrow: '<button type=\'button\' class=\'nextArrow\'><i class=\'ti-arrow-right\'></i></button>',
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    ]
  });

  // clients logo slider
  $('.client-logo-slider').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    dots: false,
    arrows: false,
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 400,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    ]
  });

  // about video popup
  $(document).ready(function () {
    $('.venobox').venobox();
  });

  // animation scroll js
  var html_body = $('html, body');
  $('.page-scroll').on('click', function () { //use page-scroll class in any HTML tag for scrolling
    if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        html_body.animate({
          scrollTop: target.offset().top - 50
        }, 1500, 'easeInOutExpo');
        return false;
      }
    }
  });

  // easeInOutExpo Declaration
  jQuery.extend(jQuery.easing, {
    easeInOutExpo: function (x, t, b, c, d) {
      if (t === 0) {
        return b;
      }
      if (t === d) {
        return b + c;
      }
      if ((t /= d / 2) < 1) {
        return c / 2 * Math.pow(2, 10 * (t - 1));
      } + b;
      return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
    }
  });

  /* Form Validation */
  /* Name Validation */

  /* Name Validation */
  const nameValue = document.getElementById('name');
  const nameText = document.getElementById('valid-name-text');

  // Listen to any change to the input we selected above
  // Why: to validate the string as we type (on each keystroke)
  nameValue.addEventListener('input', inputName);

  function inputName(e) {
    const input = e.target.value;
    console.log(input)
    // Check if the input is NOT blank first, and if it's not, make sure it matches our regex test
    // Why: because we don't want to start validating before the user has started typing; after that it's fair game
    if (input && /^(?!\s*$).+/.test(input)) {
      nameText.innerHTML = '';
      nameText.style.color = "#00ff00"
    } else {
      nameText.innerHTML = 'Your Name is Required';
      nameText.style.color = "#ff0000"
    }
  };
  
  // Grab the email input field and also the update div below it
  // Why: to listen for changes in the input field, and show live updates in the update div!
  const emailValue = document.getElementById('mail');
  const emailText = document.getElementById('valid-email-text');

  // Listen to any change to the input we selected above
  // Why: to validate the string as we type (on each keystroke)
  emailValue.addEventListener('input', inputEmail);

  function inputEmail(e) {
    const input = e.target.value;
    console.log(input)
    // Check if the input is NOT blank first, and if it's not, make sure it matches our regex test
    // Why: because we don't want to start validating before the user has started typing; after that it's fair game
    if (input && /(^\w.*@\w+\.\w)/.test(input)) {
      emailText.innerHTML = 'Your Email Address is Valid';
      emailText.style.color = "#00ff00"
    } else {
      emailText.innerHTML = 'Your Email Address is Invalid';
      emailText.style.color = "#ff0000"
    }
  };

  /* Service Validation */
  const serviceValue = document.getElementById('service-form');
  const serviceText = document.getElementById('valid-service-text');

  // Listen to any change to the input we selected above
  // Why: to validate the string as we type (on each keystroke)
  serviceValue.addEventListener('input', inputService);

  function inputService(e) {
    const input = e.target.value;
    console.log(input)
    // Check if the input is NOT blank first, and if it's not, make sure it matches our regex test
    // Why: because we don't want to start validating before the user has started typing; after that it's fair game
    if (input && /^(?!\s*$).+/.test(input)) {
      serviceText.innerHTML = '';
      serviceText.style.color = "#00ff00"
    } else {
      serviceText.innerHTML = 'Service is Required';
      serviceText.style.color = "#ff0000"
    }
  };

})(jQuery);
