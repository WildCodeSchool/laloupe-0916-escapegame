class enigmeService {

    constructor($http) {
        this.$http = $http;
    }


    getAll() {
        return this.$http.get('/api/todos')
    }

    getOne(id) {
        return this.$http.get('/api/todos/' + id)
    }


}
