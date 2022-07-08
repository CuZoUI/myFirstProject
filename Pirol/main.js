$(document).ready(function () {
    $('.single-item').slick({
        dots: true,
        arrows: false,
        autoplay: true
    });

    let header = $("#header"),
        introH = $("#header").innerHeight(),
        scrollOffset = $(window).scrollTop();

    checkScroll(scrollOffset);

    $(window).on("scroll", function () {

        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);
    })

    function checkScroll() {
        if (scrollOffset >= introH) {
            header.addClass("header_fixed")
        } else {
            header.removeClass("header_fixed")
        }

    }


    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();

        let blockId = $(this).data('scroll'),
            blockOffset = $(blockId).offset().top;

        $("html, body").animate({
            scrollTop: blockOffset - header.innerHeight()
        })
    })
});
