$(document).ready(function () {
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

    $(window).scroll(function () {
        if ($(this).scrollTop() > 0)
        {
            $(".Header").addClass("AfterScroll");
            $(".NavUl").addClass("AfterScroll");
        } else 
        {
            $(".Header").removeClass("AfterScroll");
            $(".NavUl").removeClass("AfterScroll");
        }
    })
});