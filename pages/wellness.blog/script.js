// Smooth scroll
$(document).on("click", "a.nav-link, .hero-actions a", function (e) {
    const hash = this.hash;
    if (hash) {
        e.preventDefault();
        $("html, body").animate({ scrollTop: $(hash).offset().top - 72 }, 700);
    }
});

// Fade-in simples nos cards
$(window).on("scroll", function () {
    $(".info-card").each(function () {
        const top = $(this).offset().top;
        if ($(window).scrollTop() + $(window).height() > top + 50) {
            $(this).addClass("show");
        }
    });
}).trigger("scroll");
