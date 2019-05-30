$(document).ready(function () {
    // $('.menu > ul > li >a').hover(function () {
    //     // over
    //     $(this).next().slideDown();
    // }, function () {
    //     // out
    //     $(this).next().slideUp();
    // }
    // );


    $('.menu > ul > li').hover(function () {
        // over
        $(this).find('.sub-menu').slideDown();
    }, function () {
        // out
        $(this).find('.sub-menu').slideUp();
    }
    );
});