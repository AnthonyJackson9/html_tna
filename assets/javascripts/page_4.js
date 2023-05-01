$(document).ready(function() {
    // $(".mk-cont").height($(".mk-cont").width() * 1.4);
    $(".mk-cont").each(function(index, element) {
        $(element).height($(element).width() * 1.4);
    });

    setTimeout(() => {
        $(".mk-container .mk-cont01").addClass("paused") 
    }, 2500);

    setTimeout(() => {
        $(".mk-container .mk-cont02").addClass("paused") 
    }, 3100);

    setTimeout(() => {
        $(".mk-container .mk-cont03").addClass("paused") 
    }, 3700);

    setTimeout(() => {
        $(".mk-container .mk-cont04").addClass("paused") 
    }, 4400);

    setTimeout(() => {
        $(".mk-container .mk-cont05").addClass("paused") 
    }, 4800);

    setTimeout(() => {
        $(".coin.coin01,.coin.coin02,.coin.coin03,.coin.coin04,.coin.coin05").addClass("paused") 
    }, 6500);
    
})


$(window).resize(() => {
    $(".mk-cont").each(function(index, element) {
        $(element).height($(element).width() * 1.4);
    });
})


function toggleAnimations() {
    // $("[class^='ani_']").removeClass('remove-animations').addClass('play-animations');
    // $('body').css('opacity', 0).delay(100);
    // $('body').css('opacity', 1);
    // setTimeout(() => {
    //     $('body').css('opacity', 0);
    // // $("[class^='ani_']").removeClass('play-animations').addClass('remove-animations');
    // }, 1000);
    
    // myFunction();
    location.reload();
}


// setInterval(toggleAnimations, 10000);