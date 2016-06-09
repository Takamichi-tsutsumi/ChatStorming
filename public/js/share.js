$(function () {
  var hsize = $(window).height();
  $(".home_container").css("height", hsize + "px");
  $(".history").css("height", hsize - 320 + "px");
  $(".sub2").css("height", hsize - 40 + "px");
  $(".main").css("height", hsize - 120 + "px");
  $("a li").mouseover(function(){
      $(this).addClass("selected");
  }).mouseout(function(){
      $(this).removeClass("selected");
  });
});
