$(function () {
  // Portfolio 
  $('#portfolio-list').mixItUp();
  $(".portfolio-item").on("mouseover", function () {
    var col = "#040";
    var r = Math.random();
    if (r > 0.7) col = "#004";
    if (r < 0.3) col = "#400";
    col = "#333";
    $(this).find("div").stop().fadeIn("slow");
  });
  $(".portfolio-item").on("mouseout", function () {
    $(this).find("div").stop().fadeOut();
  });
  
  // Enable touch swiping in carousels
  $(".carousel").swipe({
    swipe: function(event, direction, distance, duration, fingerCount, fingerData) {
      if (direction == 'left') $(this).carousel('next');
      if (direction == 'right') $(this).carousel('prev');
    },
    allowPageScroll:"vertical"
  });
  
});