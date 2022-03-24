$("#hide").hide();

$("#show,#hide").on("click", function () {
  $("#show,#hide").toggle();
});
// ("#hide1").hide();
// $("#show1,#hide1").on("click", fu$nction () {
//   $("#show1,#hide1").toggle();
// });
        $(".overlay").hover(
                function () {
                  $(".overlay-text").show();
                },
                function () {
                  $(".overlay-text").hide();
                }
              );
console.log("Helloooe");