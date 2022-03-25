$("#hide").hide();

$("#show,#hide").on("click", function () {
  $("#show,#hide").toggle();
});
$("#hide1").hide();

$("#show1,#hide1").on("click", function () {
  $("#show1,#hide1").toggle();
});
$("#hide2").hide();

$("#show2,#hide2").on("click", function () {
  $("#show2,#hide2").toggle();
});

$(".overlay").hover(
  function () {
    $(".overlay-text").show();
  },
  function () {
    $(".overlay-text").hide();
  }
);