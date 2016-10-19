class mainController {

    constructor() {
        $(".button-collapse").sideNav();
        $('#textarea1').val('New Text');
        $('#textarea1').trigger('autoresize');
        $('input#input_text, textarea#textarea1').characterCounter();
        $(window).scroll(function() {
            if ($(window).scrollTop() > $('#accueil').height()) {
                $('.navbar-fixed').addClass('navbar-color');
            }
            if ($(window).scrollTop() < $('#accueil').height()) {
                $('.navbar-fixed').removeClass('navbar-color');
            }
        });

    }
}
