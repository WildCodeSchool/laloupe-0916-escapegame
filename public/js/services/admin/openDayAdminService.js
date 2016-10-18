class openDayAdminService {

    constructor($http) {
        this.$http = $http;
    }

    create(data1, data2) {
        return this.$http.post('/api/openDays', {
            jour: data1,
            horaires: data2,
        });
    }

    getAll() {
        return this.$http.get('/api/openDays');
    }

    getOne(id) {
        return this.$http.get('/api/openDays/' + id);
    }

    update(id, data1, data2) {
        return this.$http.put('/api/openDays/' + id, {
            jour: data1,
            horaires: data2,
        });
    }

    delete(id) {
        return this.$http.delete('/api/openDays/' + id);
    }

}
