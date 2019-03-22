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
    $("#navItem1 a").hover(function () {
            //in
            $("#navItem1 a").animate({color:"#0000cc"}, 500);
        }, function () {
            //out
            $("#navItem1 a").animate({color:"#F5DEB3"}, 500);
        }
    );
    $("#navItem2 a").hover(function () {
            //in
            $("#navItem2 a").animate({color:"#0000cc"}, 500);
        }, function () {
            //out
            $("#navItem2 a").animate({color:"#F5DEB3"}, 500);
        }
    );
    $("#navItem3 a").hover(function () {
            //in
            $("#navItem3 a").animate({color:"#0000cc"}, 500);
        }, function () {
            //out
            $("#navItem3 a").animate({color: "#F5DEB3"}, 500);
        }
    );
});