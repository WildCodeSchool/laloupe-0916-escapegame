class usersController {
    constructor(enigmeUsersService, openDayUsersService, priceUsersService, commentUsersService) {
        this.enigmeUsersService = enigmeUsersService;
        this.loadEnigme();
        this.openDayUsersService = openDayUsersService;
        this.loadDays();
        this.priceUsersService = priceUsersService;
        this.loadPrices();
        this.commentUsersService = commentUsersService;
        this.loadComments();
    }
    loadDays() {
        this.openDayUsersService.getAll().then((res) => {
            this.openDays = res.data;
        });
    }
    loadEnigme() {
        this.enigmeUsersService.getAll().then((res) => {
            this.enigmes = res.data;
        });
    }
    loadPrices() {
        this.priceUsersService.getAll().then((res) => {
            this.prices = res.data;
        });
    }
    loadComments() {
        this.commentUsersService.getAll().then((res) => {
            this.comments = res.data;
        });
    }
}
