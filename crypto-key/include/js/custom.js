var $ = jQuery.noConflict();

jQuery(document).ready(function ($) {

  /*==========================*/
  /* sliders */
  /*==========================*/



  /*==========================*/
  /* Theme Switcher */
  /*==========================*/
  $('#flexSwitchCheckDefault').change(function () {
    if ($(this).is(':checked')) {
      $("body").addClass("dark-theme");
    } else {
      $("body").removeClass("dark-theme");
    }
  });



  /*==========================*/
  /* Scroll on animate */
  /*==========================*/
  function onScrollInit(items, trigger) {
    items.each(function () {
      var osElement = $(this),
        osAnimationClass = osElement.attr('data-os-animation'),
        osAnimationDelay = osElement.attr('data-os-animation-delay');
      osElement.css({
        '-webkit-animation-delay': osAnimationDelay,
        '-moz-animation-delay': osAnimationDelay,
        'animation-delay': osAnimationDelay
      });
      var osTrigger = (trigger) ? trigger : osElement;
      osTrigger.waypoint(function () {
        osElement.addClass('animated').addClass(osAnimationClass);
      }, {
        triggerOnce: true,
        offset: '95%',
      });
      // osElement.removeClass('fadeInUp');
    });
  }
  onScrollInit($('.os-animation'));
  onScrollInit($('.staggered-animation'), $('.staggered-animation-container'));


  /*==========================*/
  /* Header fix */
  /*==========================*/
  var scroll = $(window).scrollTop();
  if (scroll >= 10) {
    $("body").addClass("fixed");
  } else {
    $("body").removeClass("fixed");
  }

});


$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll >= 10) {
    $("body").addClass("fixed");
  } else {
    $("body").removeClass("fixed");
  }
});