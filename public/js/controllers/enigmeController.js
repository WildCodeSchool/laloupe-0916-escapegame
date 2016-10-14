class enigmeController {

    constructor(enigmeService) {
        this.todoService = enigmeService;
        this.load();

    }

    load() {
        this.todoService.getAll().then((res) => {
            this.todos = res.data;
        });
    }
}
