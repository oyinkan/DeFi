$(document).ready(function(){
    $('.search input[type="text"]').on('keyup',function(){
        $('.results').show();
    }); 

    $(".results a").click(function(){
        $(".results").toggle();
    });
});  