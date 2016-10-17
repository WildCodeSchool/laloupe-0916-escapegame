angular.module('app', ['ngRoute', 'ui.materialize'])
    .factory('sessionFactory', sessionFactory)
    .service('userService', userService)
    .service('adminService', adminService)
    /**.service('enigmeService', enigmeService)**/
    .controller('mainController', mainController)
    /**.controller('enigmeController', enigmeController)**/
    .controller('navbarController', navbarController)
    .controller('loginController', loginController)
    .controller('adminController', adminController)
    .config(routes)
    .run(loginStatus);
