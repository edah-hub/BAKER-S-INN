$("#hide").hide();

$("#show,#hide").on("click", function () {
  $("#show,#hide").toggle();
});
$(".overlay").hover(
    function () {
      $(".overlay-text").show();
    },
    function () {
      $(".overlay-text").hide();
    }
  );