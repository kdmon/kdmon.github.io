$(function () {

  // Portfolio 
  $('#portfolio-list').mixItUp({
    load:{
      sort: 'year:desc'
    }
  });
  
  // Toggle view-all button
  $('#portfolio-list').on('mixEnd', function(e, state){
    if (state.activeFilter == ".mix") $("#view-all").hide("fast");
    else $("#view-all").show("fast");
  });
  
  $(".portfolio-item").on("mouseover", function () {
    var col = "#040";
    var r = Math.random();
    if (r > 0.7) col = "#004";
    if (r < 0.3) col = "#400";
    col = "#333";
    $(this).find("div").stop().fadeIn("fast");
  });
  
  $(".portfolio-item").on("mouseout", function () {
    $(this).find("div").stop().fadeOut("fast");
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