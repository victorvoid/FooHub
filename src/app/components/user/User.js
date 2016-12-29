let $location, $stateParams, searchService;
class UserController {
    constructor(_$location, _$stateParams, _searchService){
        searchService = _searchService;
        $location = _$location;
        $stateParams = _$stateParams;
        this.user = $stateParams;
        this.submit();
    }

    submit(){
        searchService.getUser(this.user.username).then(this.onGetUserSuccess.bind(this), this.onGetUserError);
        searchService.getUserRepositories(this.user.username).then(this.onGetReposSuccess.bind(this), this.onGetReposError);
    }

    onGetUserSuccess(response){
        this.user = response.data;
    }

    onGetUserError(error){
        console.log('onError in Get User', error);
    }

    onGetReposSuccess(response){
        this.user['repos'] = response;
    }

    onGetReposError(error){
        console.log('onError in get Repos');
    }
}

UserController.$inject = ['$location', '$stateParams', 'searchService'];

export const User = {
    template: require('./User.html'),
    controller: UserController,
    controllerAs: 'UserCtrl'
};


