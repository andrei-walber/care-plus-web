// Fade-in nos cards
$(window).on("scroll", function () {
    $(".team-card").each(function () {
        const top = $(this).offset().top;
        if ($(window).scrollTop() + $(window).height() > top + 50) {
            $(this).addClass("show");
        }
    });
}).trigger("scroll");