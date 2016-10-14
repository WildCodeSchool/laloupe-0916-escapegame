class adminController {

    constructor(todoService) {
      this.todoService = todoService;
      this.load();

    }

        load() {
            this.todoService.getAll().then((res) => {
                this.todos = res.data;
            });
        }

        create() {
            this.todoService.create(this.todo).then(() => {
                this.todo = '';
                this.load();
            });
        }

        update(todo) {
            this.todoService.update(todo._id, todo.nom_enigme, todo.description_enigme).then(() => {
                this.load();
            });
        }

        delete(todo) {
            this.todoService.delete(todo._id).then(() => {
                this.load();
            });
        }
}
