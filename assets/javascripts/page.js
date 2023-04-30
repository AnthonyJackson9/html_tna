$(document).ready(() => {
    // console.log($(".dash-container").width() * 0.5, $(".eff-content").width());
    $(".eff-content").css('height', ($(".eff1-rest-cont.img-eff-cont").width()))

    setTimeout(() => {
        aniTextFlow();
    }, 500);

    $(".fbtn-blue-start").click(() => {
        location.replace('tna_page1.html');
    })
})

var aniTextFlow = () => {
    var text = document.getElementById('text_flow');
    text.style['opacity'] = 1;
    var newDom = '';
    var animationDelay = 15;

    for(let i = 0; i < text_flow.innerText.length; i++)
    {
        newDom += '<span class="char">' + (text_flow.innerText[i] == ' ' 
                                            ? '&nbsp;' 
                                            : (text_flow.innerText[i] == '.' 
                                                ? '.<br/>' 
                                                : text.innerText[i] + '')) + '</span>';
                                            
    }

    text_flow.innerHTML = newDom;
    var length = text_flow.children.length;

    for(let i = 0; i < length; i++)
    {
        text_flow.children[i].style['animation-delay'] = animationDelay * i + 'ms';
    }
}

$(window).resize(() => {
    $(".eff-content").css('height', ($(".eff1-rest-cont.img-eff-cont").width()))
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

//setInterval(toggleAnimations, 10000);

