class enigmeUsersController {
    constructor(enigmeUsersService, openDayUsersService, priceUsersService) {
        this.enigmeUsersService = enigmeUsersService;
        this.loadEnigme();
        this.openDayUsersService = openDayUsersService;
        this.loadDays();
        this.priceUsersService = priceUsersService;
        this.loadPrices();
    }
    loadDays() {
        this.openDayUsersService.getAll().then((res) => {
            this.openDays = res.data;
        });
    }
    loadEnigme() {
        this.enigmeUsersService.getAll().then((res) => {
            this.todos = res.data;
        });
    }
    loadPrices() {
        this.priceUsersService.getAll().then((res) => {
            this.prices = res.data;
        });
    }
}
