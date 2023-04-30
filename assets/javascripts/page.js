$(document).ready(() => {
    // console.log($(".dash-container").width() * 0.5, $(".eff-content").width());
    $(".eff-content").css('height', ($(".eff1-rest-cont.img-eff-cont").width()))

    setTimeout(() => {
        aniTextFlow();
    }, 500);
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


