class enigmeUsersController {
    constructor(enigmeUsersService, openDayAdminService) {
        this.enigmeUsersService = enigmeUsersService;
        this.loadEnigme();
        this.openDayAdminService = openDayAdminService;
        this.loadDays();
    }
    loadDays() {
        this.openDayAdminService.getAll().then((res) => {
            this.openDays = res.data;
        });
    }
    loadEnigme() {
        this.enigmeUsersService.getAll().then((res) => {
            this.todos = res.data;
        });
    }
}
