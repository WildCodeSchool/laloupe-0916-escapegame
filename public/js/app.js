angular.module('app', ['ngRoute', 'ui.materialize'])
    .service('enigmeAdminService', enigmeAdminService)
    .service('enigmeUsersService', enigmeUsersService)
    .service('openDayUsersService', openDayUsersService)
    .service('mailUserService', mailUserService)
    .service('openDayAdminService', openDayAdminService)
    .service('priceUsersService', priceUsersService)
    .service('priceAdminService', priceAdminService)
    .service('commentUsersService', commentUsersService)
    .service('commentAdminService', commentAdminService)
    .service('userService', userService)
    .factory('sessionFactory', sessionFactory)
    .controller('usersController', usersController)
    .controller('navbarController', navbarController)
    .controller('adminController', adminController)
    .controller('mainController', mainController)
    .controller('loginController', loginController)
    .config(routes)
    .run(loginStatus);
