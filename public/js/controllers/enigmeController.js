class enigmeController {
    constructor(enigmeService) {
        this.enigmeService = enigmeService;
        this.load();
    }

    load() {
        this.enigmeService.getAll().then((res) => {
            this.todos = res.data;
        });
    }
}
