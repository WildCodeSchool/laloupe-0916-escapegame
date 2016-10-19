class openDayUsersService {

    constructor($http) {
        this.$http = $http;
    }

    getAll() {
        return this.$http.get('/api/openDays');
    }

}
