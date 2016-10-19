class enigmeAdminController {
    constructor(enigmeAdminService, openDayAdminService) {
        this.enigmeAdminService = enigmeAdminService;
        this.openDayAdminService = openDayAdminService;
        this.loadEnigme();
        this.loadDays();
    }

    loadDays() {
        this.openDayAdminService.getAll().then((res) => {
            this.openDays = res.data;
        });
    }

    createDays() {
        this.openDayAdminService.create(this.openDay).then(() => {
            this.openDay = '';
            this.loadDays();
        });
    }

    updateDays(openDay) {
        this.openDayAdminService.update(openDay._id, openDay.jour, openDay.horaires).then(() => {
            this.loadDays();
        });
    }

    deleteDays(openDay) {
        this.openDayAdminService.delete(openDay._id).then(() => {
            this.loadDays();
        });
    }


    loadEnigme() {
        this.enigmeAdminService.getAll().then((res) => {
            this.todos = res.data;
        });
    }

    createEnigme() {
        this.enigmeAdminService.create(this.todo).then(() => {
            this.todo = '';
            this.loadEnigme();
        });
    }

    updateEnigme(todo) {
        this.enigmeAdminService.update(todo._id, todo.nom_enigme, todo.description_enigme).then(() => {
            this.loadEnigme();
        });
    }

    deleteEnigme(todo) {
        this.enigmeAdminService.delete(todo._id).then(() => {
            this.loadEnigme();
        });
    }


}
