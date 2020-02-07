$(document).ready(function(){
    //SHOWING AND ANIMATION NAV MENU
$(".burger").click(function(e){
    e.preventDefault;
    $(".burger").toggleClass("burger__active");
    if($("nav ul").css("display") === "none") {
        $("nav ul").css("display", "block");
    }
    else {
        $("nav ul").css("display", "none");
    }
});

//SHOWING AND ANIMATION NAV MENU//

});
