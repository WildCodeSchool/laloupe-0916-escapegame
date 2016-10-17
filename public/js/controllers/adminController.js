class adminController {
    constructor(adminService) {
        this.adminService = adminService;
        this.load();
    }

    load() {
        this.adminService.getAll().then((res) => {
            this.todos = res.data;
        });
    }

    create() {
        this.adminService.create(this.todo).then(() => {
            this.todo = '';
            this.load();
        });
    }

    update(todo) {
        this.adminService.update(todo._id, todo.nom_enigme, todo.description_enigme).then(() => {
            this.load();
        });
    }

    delete(todo) {
        this.adminService.delete(todo._id).then(() => {
            this.load();
        });
    }

}
