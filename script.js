$(document).ready(function() {
    



    //Texten i mitten.
    $("#titleText").slideDown(1200);
    $("#descText").delay(1200);
    $("#descText").fadeIn();

    //Nav Baren.
    $("#navItem1").hide();
    $("#navItem2").hide();
    $("#navItem3").hide();
    $("#navItem1").delay(2000).fadeIn(1000);
    $("#navItem2").delay(2500).fadeIn(1000);
    $("#navItem3").delay(3000).fadeIn(1000);

    //Animera färgen på nav namnen.
    $("[id*='navItem']").hover(function () {
            //in
            console.log("Hej");
            $("#navItem1 a").animate({"color":"#0000cc"}, 500);
            $("#navItem2 a").animate({"color":"#3366ff"}, 500);
            $("#navItem3 a").animate({"color":"#3377ff"}, 500);
        }, function () {
            //out
            $("#navItem1 a").animate({"color":"wheat"}, 500);
            $("#navItem2 a").animate({"color":"wheat"}, 500);
            $("#navItem3 a").animate({"color":"wheat"}, 500);
        }
    );
});