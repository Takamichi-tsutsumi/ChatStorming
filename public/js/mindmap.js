$(function () {
  hsize = $(window).height();
  $(".sub2").css("height", hsize - 40 + "px");
  $(".main").css("height", hsize - 120 + "px");
  $("a li").mouseover(function(){
      $(this).addClass("selected");
  }).mouseout(function(){
      $(this).removeClass("selected");
  });
});
