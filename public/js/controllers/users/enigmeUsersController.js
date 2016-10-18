class enigmeUsersController {
    constructor(enigmeUsersService) {
        this.enigmeUsersService = enigmeUsersService;
        this.load();
    }

    load() {
        this.enigmeUsersService.getAll().then((res) => {
            this.todos = res.data;
        });
    }
}
