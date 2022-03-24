//business logic
function Cake(type,name,price,number){
    this.cakeType = type;
    this.cakeName = name;
    this.cakePrice = price;
    this.cakeNumber = number;
}
$(".detaills").hide();

//user interface logic
$(document).ready(function(){
    $("or").click(function(event){
        event.preventDefault();
    });



})