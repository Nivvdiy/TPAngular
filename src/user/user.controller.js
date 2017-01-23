export class UserController {
    constructor($routeParams, UserService, $location) {
        const id = $routeParams.id;
        this.UserService = UserService;
        this.$location = $location;

            this.UserService.getUser(id).then(user => {
                this.user = user;
            });
    }

    saveUser(user) {
        this.UserService.saveUser(user).then(()=> this.$location.path('/users'));
    }

}