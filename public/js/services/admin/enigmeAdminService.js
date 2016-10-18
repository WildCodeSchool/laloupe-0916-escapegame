class enigmeAdminService {

    constructor($http) {
        this.$http = $http;
    }

    create(data1, data2) {
        return this.$http.post('/api/todos', {
            nom_enigme: data1,
            description_enigme: data2,
        });
    }

    getAll() {
        return this.$http.get('/api/todos');
    }

    getOne(id) {
        return this.$http.get('/api/todos/' + id);
    }

    update(id, data1, data2) {
        return this.$http.put('/api/todos/' + id, {
            nom_enigme: data1,
            description_enigme: data2,
        });
    }

    delete(id) {
        return this.$http.delete('/api/todos/' + id);
    }

}
