$(document).ready(function() {
  $(".main-header").sticky();
  $('.main-header').on('sticky-start', function() {

    $(".main-header h2").hide();
    $(".main-header h1").css("margin-top", "0px");
    $(".main-header nav ul").css("margin-top", "13px");
  });
  $('.main-header').on('sticky-end', function() {

    $(".main-header h2").show();
    $(".main-header h1").css("margin-top", "0px");
    $(".main-header nav ul").css("margin-top", "50px");


  });

});
