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
    $(".proceed1").click(function(event){
        event.preventDefault();
        var cakeNamep = $("#1").text();
        var index = cakeNamep.indexOf("Ksh");
        var cakePrice = cakeNamep.slice(index + 4);
        var cakeName = cakeNamep.slice(0,index);
        alert("You ordered " + cakeName + " cake at Ksh " + cakePrice) ;
    });
    $(".proceed2").click(function(event){
        event.preventDefault();
        var cakeNamep = $("#2").text();
        var index = cakeNamep.indexOf("Ksh");
        var cakePrice = cakeNamep.slice(index + 4);
        var cakeName = cakeNamep.slice(0,index);
        alert("You ordered " + cakeName + "cake at Ksh " + cakePrice) ;
    });
    $(".proceed3").click(function(event){
        event.preventDefault();
        var cakeNamep = $("#3").text();
        var index = cakeNamep.indexOf("Ksh");
        var cakePrice = cakeNamep.slice(index + 4);
        var cakeName = cakeNamep.slice(0,index);
        alert("You ordered " + cakeName + " cake at Ksh " + cakePrice) ;
    });
    $(".proceed4").click(function(event){
        event.preventDefault();
        var cakeNamep = $("#4").text();
        var index = cakeNamep.indexOf("Ksh");
        var cakePrice = cakeNamep.slice(index + 4);
        var cakeName = cakeNamep.slice(0,index);
        alert("You ordered " + cakeName + " cake at Ksh " + cakePrice) ;
    });
})







