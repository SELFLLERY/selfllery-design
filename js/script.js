$(document).ready(function () {
    var blockhidden = $('.hidden-block'), searchblock = $('.search-block');
    $('.search-button').click(function () {
        if (blockhidden.is(':visible')) {
            searchblock.show();
        } else {
            searchblock.hide();
        }
        blockhidden.toggle();
    });
    $('.close-search').click(function () {
        blockhidden.show();
        searchblock.hide();
    });
});