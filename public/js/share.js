Array.prototype.clean = function(deleteValue) {
  for (var i = 0; i < this.length; i++) {
    if (this[i] == deleteValue) {
      this.splice(i, 1);
      i--;
    }
  }
  return this;
};


$(function () {
  var hsize = $('body').height();
  console.log(hsize);
  $(".home_container").css("height", hsize + "px");
  $(".history").css("height", hsize - 320 + "px");
  $(".sub2").css("height", hsize - 40 + "px");
  $(".main").css("height", hsize - 180 + "px");
})
