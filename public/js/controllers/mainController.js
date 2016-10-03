class mainController {
    constructor() {
            $('.js-scrollTo').on('click', function() { // Au clic sur un élément
                var page = $(this).attr('href'); // Page cible
                var speed = 1000; // Durée de l'animation (en ms)
                $('html, body').animate({
                    scrollTop: $(page).offset().top
                }, speed); // Go
                return false;
            });
            /*
              this.todoService = todoService;
              this.load();
              */
        }
        /*
            load() {
                this.todoService.getAll().then((res) => {
                    this.todos = res.data;
                })
            }

            create() {
                this.todoService.create(this.todo).then(() => {
                    this.todo = '';
                    this.load()
                })
            }

            update(todo) {
                this.todoService.update(todo._id, todo.description).then(() => {
                    this.load()
                })
            }

            delete(todo) {
                this.todoService.delete(todo._id).then(() => {
                    this.load()
                })
            }
        */
}
