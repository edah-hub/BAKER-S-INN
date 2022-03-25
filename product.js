//business logic
function Cake(type,name,price,number){
    this.cakeType = type;
    this.cakeName = name;
    this.cakePrice = price;
    this.cakeNumber = number;
}
$(".detaills").hide();
<<<<<<< HEAD
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







=======
var grandTotal = 0;

//user interface logic
$(document).ready(function(){
    $(".order1").click(function(event){
        event.preventDefault();
        var cakeNamep = $("#1").text();
        var index = cakeNamep.indexOf("Ksh");
        var cakeNumber = parseInt($("#n1").val());
        var cakePrice = parseInt(cakeNamep.slice(index + 4)) * cakeNumber;
        var cakeName = cakeNamep.slice(0,index);
        $("#cart").append("<div  id = 'item1'><li> " + cakeNumber + " " + cakeName + " cakes at Ksh " + cakePrice + "</li></div>");
        grandTotal+=cakePrice
        $('#grandtotal').text(grandTotal);
        $(".order1").hide();
        $(".remove1").show();
    });

    $(".order2").click(function(event){
        event.preventDefault();
        var cakeNamep = $("#2").text();
        var index = cakeNamep.indexOf("Ksh");
        var cakeNumber = parseInt($("#n2").val());
        var cakePrice = parseInt(cakeNamep.slice(index + 4)) * cakeNumber;
        var cakeName = cakeNamep.slice(0,index);
        $("#cart").append("<div  id = 'item2'><li> " + cakeNumber + " " + cakeName + " cakes at Ksh " + cakePrice + "</li></div>");
        grandTotal+=cakePrice
        $('#grandtotal').text(grandTotal);
        $(".order2").hide();
        $(".remove2").show();
    });

    $(".order3").click(function(event){
        event.preventDefault();
        var cakeNamep = $("#3").text();
        var index = cakeNamep.indexOf("Ksh");
        var cakeNumber = parseInt($("#n3").val());
        var cakePrice = parseInt(cakeNamep.slice(index + 4)) * cakeNumber;
        var cakeName = cakeNamep.slice(0,index);
        $("#cart").append("<div  id = 'item3'><li> " + cakeNumber + " " + cakeName + " cakes at Ksh " + cakePrice + "</li></div>");
        grandTotal+=cakePrice
        $('#grandtotal').text(grandTotal);
        $(".order3").hide();
        $(".remove3").show();
    });

    $(".order4").click(function(event){
        event.preventDefault();
        var cakeNamep = $("#4").text();
        var index = cakeNamep.indexOf("Ksh");
        var cakeNumber = parseInt($("#n4").val());
        var cakePrice = parseInt(cakeNamep.slice(index + 4)) * cakeNumber;
        var cakeName = cakeNamep.slice(0,index);
        $("#cart").append("<div  id = 'item1'><li> " + cakeNumber + " " + cakeName + " cakes at Ksh " + cakePrice + "</li></div>");
        grandTotal+=cakePrice
        $('#grandtotal').text(grandTotal);
        $(".order4").hide();
        $(".remove4").show();
    });

    $(".order5").click(function(event){
        event.preventDefault();
        var cakeNamep = $("#5").text();
        var index = cakeNamep.indexOf("Ksh");
        var cakeNumber = parseInt($("#n5").val());
        var cakePrice = parseInt(cakeNamep.slice(index + 4)) * cakeNumber;
        var cakeName = cakeNamep.slice(0,index);
        $("#cart").append("<div  id = 'item5'><li> " + cakeNumber + " " + cakeName + " cakes at Ksh " + cakePrice + "</li></div>");
        grandTotal+=cakePrice
        $('#grandtotal').text(grandTotal);
        $(".order5").hide();
        $(".remove5").show();
    });
    $(".order6").click(function(event){
        event.preventDefault();
        var cakeNamep = $("#6").text();
        var index = cakeNamep.indexOf("Ksh");
        var cakeNumber = parseInt($("#n6").val());
        var cakePrice = parseInt(cakeNamep.slice(index + 4)) * cakeNumber;
        var cakeName = cakeNamep.slice(0,index);
        $("#cart").append("<div  id = 'item6'><li> " + cakeNumber + " " + cakeName + " cakes at Ksh " + cakePrice + "</li></div>");
        grandTotal+=cakePrice
        $('#grandtotal').text(grandTotal);
        $(".order6").hide();
        $(".remove6").show();
    });
    $(".order7").click(function(event){
        event.preventDefault();
        var cakeNamep = $("#7").text();
        var index = cakeNamep.indexOf("Ksh");
        var cakeNumber = parseInt($("#n7").val());
        var cakePrice = parseInt(cakeNamep.slice(index + 4)) * cakeNumber;
        var cakeName = cakeNamep.slice(0,index);
        $("#cart").append("<div  id = 'item7'><li> " + cakeNumber + " " + cakeName + " cakes at Ksh " + cakePrice + "</li></div>");
        grandTotal+=cakePrice
        $('#grandtotal').text(grandTotal);
        $(".order7").hide();
        $(".remove7").show();
    });
    $(".order8").click(function(event){
        event.preventDefault();
        var cakeNamep = $("#8").text();
        var index = cakeNamep.indexOf("Ksh");
        var cakeNumber = parseInt($("#n8").val());
        var cakePrice = parseInt(cakeNamep.slice(index + 4)) * cakeNumber;
        var cakeName = cakeNamep.slice(0,index);
        $("#cart").append("<div  id = 'item8'><li> " + cakeNumber + " " + cakeName + " cakes at Ksh " + cakePrice + "</li></div>");
        grandTotal+=cakePrice
        $('#grandtotal').text(grandTotal);
        $(".order8").hide();
        $(".remove8").show();
    });
    $(".order9").click(function(event){
        event.preventDefault();
        var cakeNamep = $("#9").text();
        var index = cakeNamep.indexOf("Ksh");
        var cakeNumber = parseInt($("#n9").val());
        var cakePrice = parseInt(cakeNamep.slice(index + 4)) * cakeNumber;
        var cakeName = cakeNamep.slice(0,index);
        $("#cart").append("<div  id = 'item9'><li> " + cakeNumber + " " + cakeName + " cakes at Ksh " + cakePrice + "</li></div>");
        grandTotal+=cakePrice
        $('#grandtotal').text(grandTotal);
        $(".order9").hide();
        $(".remove9").show();
    });
    $(".order10").click(function(event){
        event.preventDefault();
        var cakeNamep = $("#10").text();
        var index = cakeNamep.indexOf("Ksh");
        var cakeNumber = parseInt($("#n10").val());
        var cakePrice = parseInt(cakeNamep.slice(index + 4)) * cakeNumber;
        var cakeName = cakeNamep.slice(0,index);
        $("#cart").append("<div  id = 'item10'><li> " + cakeNumber + " " + cakeName + " cakes at Ksh " + cakePrice + "</li></div>");
        grandTotal+=cakePrice
        $('#grandtotal').text(grandTotal);
        $(".order10").hide();
        $(".remove10").show();
    });
    $(".order11").click(function(event){
        event.preventDefault();
        var cakeNamep = $("#11").text();
        var index = cakeNamep.indexOf("Ksh");
        var cakeNumber = parseInt($("#n11").val());
        var cakePrice = parseInt(cakeNamep.slice(index + 4)) * cakeNumber;
        var cakeName = cakeNamep.slice(0,index);
        $("#cart").append("<div  id = 'item11'><li> " + cakeNumber + " " + cakeName + " cakes at Ksh " + cakePrice + "</li></div>");
        grandTotal+=cakePrice
        $('#grandtotal').text(grandTotal);
        $(".order11").hide();
        $(".remove11").show();
    });
    $(".order12").click(function(event){
        event.preventDefault();
        var cakeNamep = $("#12").text();
        var index = cakeNamep.indexOf("Ksh");
        var cakeNumber = parseInt($("#n12").val());
        var cakePrice = parseInt(cakeNamep.slice(index + 4)) * cakeNumber;
        var cakeName = cakeNamep.slice(0,index);
        $("#cart").append("<div  id = 'item12'><li> " + cakeNumber + " " + cakeName + " cakes at Ksh " + cakePrice + "</li></div>");
        grandTotal+=cakePrice
        $('#grandtotal').text(grandTotal);
        $(".order12").hide();
        $(".remove12").show();
    });
    $(".order13").click(function(event){
        event.preventDefault();
        var cakeNamep = $("#13").text();
        var index = cakeNamep.indexOf("Ksh");
        var cakeNumber = parseInt($("#n13").val());
        var cakePrice = parseInt(cakeNamep.slice(index + 4)) * cakeNumber;
        var cakeName = cakeNamep.slice(0,index);
        $("#cart").append("<div  id = 'item13'><li> " + cakeNumber + " " + cakeName + " cakes at Ksh " + cakePrice + "</li></div>");
        grandTotal+=cakePrice
        $('#grandtotal').text(grandTotal);
        $(".order13").hide();
        $(".remove13").show();
    });
    $(".order14").click(function(event){
        event.preventDefault();
        var cakeNamep = $("#14").text();
        var index = cakeNamep.indexOf("Ksh");
        var cakeNumber = parseInt($("#n14").val());
        var cakePrice = parseInt(cakeNamep.slice(index + 4)) * cakeNumber;
        var cakeName = cakeNamep.slice(0,index);
        $("#cart").append("<div  id = 'item14'><li> " + cakeNumber + " " + cakeName + " cakes at Ksh " + cakePrice + "</li></div>");
        grandTotal+=cakePrice
        $('#grandtotal').text(grandTotal);
        $(".order14").hide();
        $(".remove14").show();
    });
    $(".order15").click(function(event){
        event.preventDefault();
        var cakeNamep = $("#15").text();
        var index = cakeNamep.indexOf("Ksh");
        var cakeNumber = parseInt($("#n15").val());
        var cakePrice = parseInt(cakeNamep.slice(index + 4)) * cakeNumber;
        var cakeName = cakeNamep.slice(0,index);
        $("#cart").append("<div  id = 'item15'><li> " + cakeNumber + " " + cakeName + " cakes at Ksh " + cakePrice + "</li></div>");
        grandTotal+=cakePrice
        $('#grandtotal').text(grandTotal);
        $(".order15").hide();
        $(".remove15").show();
    });
    $(".order16").click(function(event){
        event.preventDefault();
        var cakeNamep = $("#16").text();
        var index = cakeNamep.indexOf("Ksh");
        var cakeNumber = parseInt($("#n16").val());
        var cakePrice = parseInt(cakeNamep.slice(index + 4)) * cakeNumber;
        var cakeName = cakeNamep.slice(0,index);
        $("#cart").append("<div  id = 'item16'><li> " + cakeNumber + " " + cakeName + " cakes at Ksh " + cakePrice + "</li></div>");
        grandTotal+=cakePrice
        $('#grandtotal').text(grandTotal);
        $(".order16").hide();
        $(".remove16").show();
    });
    $(".order17").click(function(event){
        event.preventDefault();
        var cakeNamep = $("#17").text();
        var index = cakeNamep.indexOf("Ksh");
        var cakeNumber = parseInt($("#n17").val());
        var cakePrice = parseInt(cakeNamep.slice(index + 4)) * cakeNumber;
        var cakeName = cakeNamep.slice(0,index);
        $("#cart").append("<div  id = 'item17'><li> " + cakeNumber + " " + cakeName + " cakes at Ksh " + cakePrice + "</li></div>");
        grandTotal+=cakePrice
        $('#grandtotal').text(grandTotal);
        $(".order17").hide();
        $(".remove17").show();
    });
    $(".order18").click(function(event){
        event.preventDefault();
        var cakeNamep = $("#18").text();
        var index = cakeNamep.indexOf("Ksh");
        var cakeNumber = parseInt($("#n18").val());
        var cakePrice = parseInt(cakeNamep.slice(index + 4)) * cakeNumber;
        var cakeName = cakeNamep.slice(0,index);
        $("#cart").append("<div  id = 'item18'><li> " + cakeNumber + " " + cakeName + " cakes at Ksh " + cakePrice + "</li></div>");
        grandTotal+=cakePrice
        $('#grandtotal').text(grandTotal);
        $(".order18").hide();
        $(".remove18").show();
    });
    $(".order19").click(function(event){
        event.preventDefault();
        var cakeNamep = $("#19").text();
        var index = cakeNamep.indexOf("Ksh");
        var cakeNumber = parseInt($("#n19").val());
        var cakePrice = parseInt(cakeNamep.slice(index + 4)) * cakeNumber;
        var cakeName = cakeNamep.slice(0,index);
        $("#cart").append("<div  id = 'item19'><li> " + cakeNumber + " " + cakeName + " cakes at Ksh " + cakePrice + "</li></div>");
        grandTotal+=cakePrice
        $('#grandtotal').text(grandTotal);
        $(".order19").hide();
        $(".remove19").show();
    });
    $(".order20").click(function(event){
        event.preventDefault();
        var cakeNamep = $("#20").text();
        var index = cakeNamep.indexOf("Ksh");
        var cakeNumber = parseInt($("#n20").val());
        var cakePrice = parseInt(cakeNamep.slice(index + 4)) * cakeNumber;
        var cakeName = cakeNamep.slice(0,index);
        $("#cart").append("<div  id = 'item20'><li> " + cakeNumber + " " + cakeName + " cakes at Ksh " + cakePrice + "</li></div>");
        grandTotal+=cakePrice
        $('#grandtotal').text(grandTotal);
        $(".order20").hide();
        $(".remove20").show();
    });
    $(".order21").click(function(event){
        event.preventDefault();
        var cakeNamep = $("#21").text();
        var index = cakeNamep.indexOf("Ksh");
        var cakeNumber = parseInt($("#n21").val());
        var cakePrice = parseInt(cakeNamep.slice(index + 4)) * cakeNumber;
        var cakeName = cakeNamep.slice(0,index);
        $("#cart").append("<div  id = 'item21'><li> " + cakeNumber + " " + cakeName + " cakes at Ksh " + cakePrice + "</li></div>");
        grandTotal+=cakePrice
        $('#grandtotal').text(grandTotal);
        $(".order21").hide();
        $(".remove21").show();
    });
    $(".order22").click(function(event){
        event.preventDefault();
        var cakeNamep = $("#22").text();
        var index = cakeNamep.indexOf("Ksh");
        var cakeNumber = parseInt($("#n22").val());
        var cakePrice = parseInt(cakeNamep.slice(index + 4)) * cakeNumber;
        var cakeName = cakeNamep.slice(0,index);
        $("#cart").append("<div  id = 'item22'><li> " + cakeNumber + " " + cakeName + " cakes at Ksh " + cakePrice + "</li></div>");
        grandTotal+=cakePrice
        $('#grandtotal').text(grandTotal);
        $(".order22").hide();
        $(".remove22").show();
    });
    $(".order23").click(function(event){
        event.preventDefault();
        var cakeNamep = $("#23").text();
        var index = cakeNamep.indexOf("Ksh");
        var cakeNumber = parseInt($("#n23").val());
        var cakePrice = parseInt(cakeNamep.slice(index + 4)) * cakeNumber;
        var cakeName = cakeNamep.slice(0,index);
        $("#cart").append("<div  id = 'item23'><li> " + cakeNumber + " " + cakeName + " cakes at Ksh " + cakePrice + "</li></div>");
        grandTotal+=cakePrice
        $('#grandtotal').text(grandTotal);
        $(".order23").hide();
        $(".remove23").show();
    });
    $(".order24").click(function(event){
        event.preventDefault();
        var cakeNamep = $("#24").text();
        var index = cakeNamep.indexOf("Ksh");
        var cakeNumber = parseInt($("#n24").val());
        var cakePrice = parseInt(cakeNamep.slice(index + 4)) * cakeNumber;
        var cakeName = cakeNamep.slice(0,index);
        $("#cart").append("<div  id = 'item24'><li> " + cakeNumber + " " + cakeName + " cakes at Ksh " + cakePrice + "</li></div>");
        grandTotal+=cakePrice
        $('#grandtotal').text(grandTotal);
        $(".order24").hide();
        $(".remove24").show();
    });
    $(".order25").click(function(event){
        event.preventDefault();
        var cakeNamep = $("#25").text();
        var index = cakeNamep.indexOf("Ksh");
        var cakeNumber = parseInt($("#n25").val());
        var cakePrice = parseInt(cakeNamep.slice(index + 4)) * cakeNumber;
        var cakeName = cakeNamep.slice(0,index);
        $("#cart").append("<div  id = 'item25'><li> " + cakeNumber + " " + cakeName + " cakes at Ksh " + cakePrice + "</li></div>");
        grandTotal+=cakePrice
        $('#grandtotal').text(grandTotal);
        $(".order25").hide();
        $(".remove25").show();
    });
    $(".order26").click(function(event){
        event.preventDefault();
        var cakeNamep = $("#26").text();
        var index = cakeNamep.indexOf("Ksh");
        var cakeNumber = parseInt($("#n26").val());
        var cakePrice = parseInt(cakeNamep.slice(index + 4)) * cakeNumber;
        var cakeName = cakeNamep.slice(0,index);
        $("#cart").append("<div  id = 'item26'><li> " + cakeNumber + " " + cakeName + " cakes at Ksh " + cakePrice + "</li></div>");
        grandTotal+=cakePrice
        $('#grandtotal').text(grandTotal);
        $(".order26").hide();
        $(".remove26").show();
    });
    $(".order27").click(function(event){
        event.preventDefault();
        var cakeNamep = $("#27").text();
        var index = cakeNamep.indexOf("Ksh");
        var cakeNumber = parseInt($("#n27").val());
        var cakePrice = parseInt(cakeNamep.slice(index + 4)) * cakeNumber;
        var cakeName = cakeNamep.slice(0,index);
        $("#cart").append("<div  id = 'item27'><li> " + cakeNumber + " " + cakeName + " cakes at Ksh " + cakePrice + "</li></div>");
        grandTotal+=cakePrice
        $('#grandtotal').text(grandTotal);
        $(".order27").hide();
        $(".remove27").show();
    });
    $(".order28").click(function(event){
        event.preventDefault();
        var cakeNamep = $("#28").text();
        var index = cakeNamep.indexOf("Ksh");
        var cakeNumber = parseInt($("#n28").val());
        var cakePrice = parseInt(cakeNamep.slice(index + 4)) * cakeNumber;
        var cakeName = cakeNamep.slice(0,index);
        $("#cart").append("<div  id = 'item28'><li> " + cakeNumber + " " + cakeName + " cakes at Ksh " + cakePrice + "</li></div>");
        grandTotal+=cakePrice
        $('#grandtotal').text(grandTotal);
        $(".order28").hide();
        $(".remove28").show();
    });
    $(".order29").click(function(event){
        event.preventDefault();
        var cakeNamep = $("#29").text();
        var index = cakeNamep.indexOf("Ksh");
        var cakeNumber = parseInt($("#n29").val());
        var cakePrice = parseInt(cakeNamep.slice(index + 4)) * cakeNumber;
        var cakeName = cakeNamep.slice(0,index);
        $("#cart").append("<div  id = 'item29'><li> " + cakeNumber + " " + cakeName + " cakes at Ksh " + cakePrice + "</li></div>");
        grandTotal+=cakePrice
        $('#grandtotal').text(grandTotal);
        $(".order29").hide();
        $(".remove29").show();
    });
    $(".order30").click(function(event){
        event.preventDefault();
        var cakeNamep = $("#30").text();
        var index = cakeNamep.indexOf("Ksh");
        var cakeNumber = parseInt($("#n30").val());
        var cakePrice = parseInt(cakeNamep.slice(index + 4)) * cakeNumber;
        var cakeName = cakeNamep.slice(0,index);
        $("#cart").append("<div  id = 'item30'><li> " + cakeNumber + " " + cakeName + " cakes at Ksh " + cakePrice + "</li></div>");
        grandTotal+=cakePrice
        $('#grandtotal').text(grandTotal);
        $(".order30").hide();
        $(".remove30").show();
    });
    $(".carti").click(function(){
        $(".cart").show();
    });
    $("#carrt").click(function(){
        $(".cart").hide();
    })
});
>>>>>>> bf30d940e7df4e653f4a2b10210e4484c63bda39
