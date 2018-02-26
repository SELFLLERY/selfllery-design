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

    /*modal full size photo /start/*/
    $(function () {

        $('#fullsize').click(function (e) {
            e.preventDefault();
            var $src = $("this").attr("src");
            $(".popup-show").css({'display': 'block'});
            $(".img-show img").attr("src", $src);
        });

        $(".close, .overlay").click(function () {
            $(".popup-show").hide();
        });

    });
    /*modal full size photo /end/*/

    /*modal form /start/*/
    $(function () {

        $('#button-share').click(function (e) {
            e.preventDefault();
            $(".overlay, .modal-block").css({'display': 'block'});
            $('.overlay').fadeIn(1000).fadeTo("slow",0.8);

        });
        $('.modal-block-close, .overlay').click(function (e) {
            e.preventDefault();
            $('.modal-block, .overlay').hide();
        });

    });
    /*modal form /end/*/
});