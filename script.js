$(document).ready(function() {
    
    //Skapa ScrollMagic
    var controller = new ScrollMagic.controller();
    
    //Texten i mitten.
    $("#titleText").slideDown(1200);
    $("#descText").delay(1200);
    $("#descText").fadeIn();

    //Nav Baren.
    $("a").slideDown();
});