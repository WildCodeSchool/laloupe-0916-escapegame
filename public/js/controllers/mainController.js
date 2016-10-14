class mainController {

    constructor() {
        $('.js-scrollTo').on('click', function() { // Au clic sur un élément
            var page = $(this).attr('href'); // Page cible
            var speed = 1000; // Durée de l'animation (en ms)
            $('html, body').animate({
                scrollTop: $(page).offset().top - 100
            }, speed); // Go
            return false;
        });
        $(window).scroll(function() {
            if ($(window).scrollTop() > $('#accueil').height()) {
                $('.navbar-fixed').addClass('navbar-color');
            }
            if ($(window).scrollTop() < $('#accueil').height()) {
                $('.navbar-fixed').removeClass('navbar-color');
            }
        });
        $(".button-collapse").sideNav();
    }
}
