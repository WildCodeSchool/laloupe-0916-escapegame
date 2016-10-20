class commentAdminService {

    constructor($http) {
        this.$http = $http;
    }

    create(data1) {
        return this.$http.post('/api/comments', {
            commentaire: data1
        });
    }

    getAll() {
        return this.$http.get('/api/comments');
    }

    getOne(id) {
        return this.$http.get('/api/comments/' + id);
    }

    update(id, data1) {
        return this.$http.put('/api/comments/' + id, {
            commentaire: data1
        });
    }

    delete(id) {
        return this.$http.delete('/api/comments/' + id);
    }

}
