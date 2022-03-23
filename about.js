$("#hide").hide();

$("#show,#hide").on("click", function () {
  $("#show,#hide").toggle();
});
$("#hide1").hide();
        $(".overlay").hover(
                function () {
                  $(".overlay-text").show();
                },
                function () {
                  $(".overlay-text").hide();
                }
              );
   