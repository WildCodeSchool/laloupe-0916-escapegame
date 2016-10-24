class mainController {

    constructor() {
        $('#textarea1').val('New Text');
        $('#textarea1').trigger('autoresize');
        $('input#input_text, textarea#textarea1').characterCounter();
    }
}
