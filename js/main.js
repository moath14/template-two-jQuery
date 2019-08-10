$(document).ready(function() {
  //Trigger Nice Scroll
  $("html").niceScroll({
      cursorcolor: '#f7600e',
      cursorwidth: '10px',
      cursorborderradius: 'none'
  });

  $(".header").height($(window).height());

  $(".header .arrow i").on("click", function() {
    $("html,body").animate(
      {
        scrollTop: $(".features").offset().top
      },
      1000
    );
  });

  $(".hire").on("click",function(){

    $("html,body").animate({
        scrollTop: $(".our-team").offset().top
    },1000)

  });

  //Show More Button
  $(".show-more").on("click", function() {
    $(".our-work .hidden").fadeIn(1000);
  });

  //Check Testimonials

  var leftArrow = $(".testim .fa-chevron-left"),
    rightArrow = $(".testim .fa-chevron-right");

  function checkClients() {
    if ($(".client:first").hasClass("active")) {
      leftArrow.fadeOut();
    } else {
      leftArrow.fadeIn();
    }

    if ($(".client:last").hasClass("active")) {
      rightArrow.fadeOut();
    } else {
      rightArrow.fadeIn();
    }
  }

  checkClients();

  $(".testim i").on("click", function() {
    if ($(this).hasClass("fa-chevron-right")) {
      $(".testim .active").fadeOut(100, function() {
        $(this)
          .removeClass("active")
          .next(".client")
          .addClass("active")
          .fadeIn();
        checkClients();
      });
    } else {
      $(".testim .active").fadeOut(100, function() {
        $(this)
          .removeClass("active")
          .prev(".client")
          .addClass("active")
          .fadeIn();
        checkClients();
      });
    }
  });

  //End
});
