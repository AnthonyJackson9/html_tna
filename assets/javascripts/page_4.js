$(document).ready(function() {
    $(".mk-cont").height($(".mk-cont").width() * 1.4);

    setTimeout(() => {
        $(".mk-container .mk-cont01").addClass("paused") 
    }, 2500);

    setTimeout(() => {
        $(".mk-container .mk-cont02").addClass("paused") 
    }, 3200);

    setTimeout(() => {
        $(".mk-container .mk-cont03").addClass("paused") 
    }, 3800);
})