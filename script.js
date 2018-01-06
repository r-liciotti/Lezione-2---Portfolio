$(document).ready(function() {
  $("#home .main-header").sticky({
    zIndex: 22
  });
  $('#home .main-header').on('sticky-start', function() {

    $("#home .main-header").css("height", "60px");
    $("#home .main-header h2").hide(300);
    $("#home .main-header h1").animate({
      marginTop: "0px"
    }, 200);
    // $(".main-header nav ul").animate({
    //   marginTop: "13px"
    // }, 200);

  });
  $('#home .main-header').on('sticky-end', function() {
    $("#home .main-header").css("height", "79px");
    $("#home .main-header").animate({
      height: "79px"
    }, 200);
    $("#home .main-header h2").show(300);
    $("#home .main-header h1").animate({
      marginTop: "0px"
    }, 200);
    // $("#home .main-header nav ul").animate({
    //   marginTop: "50px"
    // }, 200);
  });



  //General Settings
  window.sr = ScrollReveal({
    reset: true,
    mobile: false
  });
  // Custom Settings
  sr.reveal('.foo', {
    origin: 'bottom',
    duration: 1500,
    viewFactor: 0.3,
    distance: '200px'

  });

  sr.reveal('.foo_about', {
    origin: 'right',
    distance: '1000px',
    duration: 2000,
    opacity: 1
  });

  sr.reveal('.foo_contatti', {
    origin: 'left',
    distance: '1000px',
    duration: 2000,
    delay: 200,
    opacity: 0
  });

});
