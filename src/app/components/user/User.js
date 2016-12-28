let $location, $stateParams;
class UserController {

    constructor(_$location, _$stateParams){
        $location = _$location;
        $stateParams = _$stateParams;
        this.user = JSON.parse($stateParams.user);
        console.log(this.user);
    }

}

UserController.$inject = ['$location', '$stateParams'];

export const User = {
    template: require('./User.html'),
    controller: UserController,
    controllerAs: 'UserCtrl'
};
