let $location;
class UserController {


    constructor(_$location){
        $location = _$location;
    }

}

UserController.$inject = ['$location'];

export const SearchUser = {
    template: require('./Search.html'),
    controller: UserController
};
