$(document).ready(function() {
  $(".main-header").sticky({zIndex:22});
  $('.main-header').on('sticky-start', function() {


    $(".main-header").animate({height: "49px"}, 200);
    $(".main-header h2").hide(200);
    $(".main-header h1").animate({marginTop: "0px"},200);
    $(".main-header nav ul").animate({marginTop: "13px"},200);

  });
  $('.main-header').on('sticky-end', function() {
    $(".main-header").animate({height: "79px"}, 200);
    $(".main-header").animate({height: "79px"}, 200);
    $(".main-header h2").show(200);
    $(".main-header h1").animate({marginTop: "0px"},200);
    $(".main-header nav ul").animate({marginTop: "50px"},200);
  });




  });

  //General Settings
  window.sr = ScrollReveal({ reset: true });
  // Custom Settings
sr.reveal('.foo', {
  duration: 2800
});
