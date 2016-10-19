class adminController {
    constructor(enigmeAdminService, openDayAdminService, priceAdminService) {
            this.enigmeAdminService = enigmeAdminService;
            this.loadEnigme();
            this.openDayAdminService = openDayAdminService;
            this.loadDays();
            this.priceAdminService = priceAdminService;
            this.loadPrices();
            this.commentAdminService = commentAdminService;
            this.loadComments();
        }
        //Jour d'ouverture
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
        //Enigme

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
        //Tarifs
    loadPrices() {
        this.priceAdminService.getAll().then((res) => {
            this.prices = res.data;
        });
    }

    createPrices() {
        this.priceAdminService.create(this.price).then(() => {
            this.price = '';
            this.loadPrices();
        });
    }

    updatePrices(price) {
        this.priceAdminService.update(price._id, price.joueur, price.prix).then(() => {
            this.loadPrices();
        });
    }

    deletePrices(price) {
            this.priceAdminService.delete(price._id).then(() => {
                this.loadPrices();
            });
        }
        //Commentaire
    loadComments() {
        this.commentAdminService.getAll().then((res) => {
            this.comments = res.data;
        });
    }

    createComments() {
        this.commentAdminService.create(this.comment).then(() => {
            this.comment = '';
            this.loadComments();
        });
    }

    updateComments(comment) {
        this.commentAdminService.update(comment._id, comment.commentaire).then(() => {
            this.loadComments();
        });
    }

    deleteComments(comment) {
        this.commentAdminService.delete(comment._id).then(() => {
            this.loadComments();
        });
    }

}
