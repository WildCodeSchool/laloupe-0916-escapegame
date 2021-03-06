class adminController {
    constructor(enigmeAdminService, openDayAdminService, priceAdminService, commentAdminService) {
            this.enigmeAdminService = enigmeAdminService;
            this.loadEnigmes();
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

    loadEnigmes() {
        this.enigmeAdminService.getAll().then((res) => {
            this.enigmes = res.data;
        });
    }

    createEnigmes() {
        this.enigmeAdminService.create(this.enigme).then(() => {
            this.enigme = '';
            this.loadEnigmes();
        });
    }

    updateEnigmes(enigme) {
        this.enigmeAdminService.update(enigme._id, enigme.nom_enigme, enigme.description_enigme, enigme.picture).then(() => {
            this.loadEnigmes();
        });
    }

    deleteEnigmes(enigme) {
            this.enigmeAdminService.delete(enigme._id).then(() => {
                this.loadEnigmes();
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
            if (this.comments.length > 0) this.comment = this.comments[0].commentaire;
        });
    }

    createComments() {
        if (this.comments.length > 0) this.comments.forEach((v, i) => {
            this.commentAdminService.delete(v._id);
        });
        this.commentAdminService.create(this.comment).then(() => {
            this.loadComments();
        });
    }


}
