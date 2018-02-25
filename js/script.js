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


    $(function () {
        $('.show_all').click(function (e) {
            e.stopPropagation();
            $('.like-show_block').toggle();
        });
    });

    /*CUSTOM SCROLL /start/*/
    var customScroll = new PerfectScrollbar('.comments-wrap', {
        wheelSpeed: .2,
        swipeEasing: true,
        minScrollbarLength: 20,
        wheelPropagation: true
    });
    /*CUSTOM SCROLL /end/*/
});