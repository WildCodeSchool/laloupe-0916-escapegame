class enigmeAdminController {
    constructor(enigmeAdminService) {
        this.enigmeAdminService = enigmeAdminService;
        this.load();
    }

    load() {
        this.enigmeAdminService.getAll().then((res) => {
            this.todos = res.data;
        });
    }

    create() {
        this.enigmeAdminService.create(this.todo).then(() => {
            this.todo = '';
            this.load();
        });
    }

    update(todo) {
        this.enigmeAdminService.update(todo._id, todo.nom_enigme, todo.description_enigme).then(() => {
            this.load();
        });
    }

    delete(todo) {
        this.enigmeAdminService.delete(todo._id).then(() => {
            this.load();
        });
    }

}
