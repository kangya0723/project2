$(document).ready(function(){
    
    $("#header").mouseenter(function(){
    $("h1 img").attr("src","images/common/logo_b.png");
    });
    $("#header").mouseleave(function(){
        $("h1 img").attr("src","images/common/logo_w.png");
        });

});