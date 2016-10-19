class priceAdminService {

    constructor($http) {
        this.$http = $http;
    }

    create(data1, data2) {
        return this.$http.post('/api/prices', {
            joueur: data1,
            prix: data2,
        });
    }

    getAll() {
        return this.$http.get('/api/prices');
    }

    getOne(id) {
        return this.$http.get('/api/prices/' + id);
    }

    update(id, data1, data2) {
        return this.$http.put('/api/prices/' + id, {
            joueur: data1,
            prix: data2,
        });
    }

    delete(id) {
        return this.$http.delete('/api/prices/' + id);
    }

}
