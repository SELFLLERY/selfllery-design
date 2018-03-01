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
    if ( $( ".comments-wrap" ).length ) {
        var customScroll = new PerfectScrollbar('.comments-wrap', {
            wheelSpeed: .2,
            swipeEasing: true,
            minScrollbarLength: 20,
            wheelPropagation: true
        });

    }
    /*CUSTOM SCROLL /end/*/

    /*modal full size photo /start/*/
    $(function () {

        $('#fullsize').click(function (e) {
            e.preventDefault();
            var $src = $("this").attr("src");
            $(".popup-show").css({'display': 'block'});
            $(".img-show img").attr("src", $src);
        });

        $(".closed, .popup-overlay").click(function () {
            $(".popup-show").hide();
        });

    });
    /*modal full size photo /end/*/

    /*modal form /start/*/
    $(function () {

        $('#button-share').click(function (e) {
            e.preventDefault();
            $(".overlay, .modal-block").fadeIn(300).fadeTo("slow",1);
            $('.overlay').fadeIn(500).fadeTo("slow", 1);

        });
        $('.modal-block-close, .overlay').click(function (e) {
            e.preventDefault();
            $(".overlay, .modal-block").fadeOut(300).fadeTo("slow",1);
            $('.modal-block, .overlay').fadeOut(500);
        });

    });
    /*modal form /end/*/

    /*scrollTop header /start/*/
    $(function () {

        $(window).scroll(function(){
            if($(this).scrollTop() > 37){
                $('#header').addClass('header-fixid');
            }
            else if ($(this).scrollTop() < 37){
                $('#header').removeClass('header-fixid');
            }
        });

    });


    /*scrollTop header /end/*/
});