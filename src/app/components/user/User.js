let $location, $stateParams, searchService, $timeout;
class UserController {
    constructor(_$location, _$stateParams, _searchService, _$timeout){
        searchService = _searchService;
        $location = _$location;
        $stateParams = _$stateParams;
        this.user = $stateParams;
        this.loadedUserDetail = false;
        this.loadedRepository = false;
        $timeout = _$timeout;
        this.submit();
    }

    submit(){
        searchService.getUser(this.user.username).then(this.onGetUserSuccess.bind(this), this.onGetUserError);
        searchService.getUserRepositories(this.user.username).then(this.onGetReposSuccess.bind(this), this.onGetReposError);
    }

    onGetUserSuccess(response){
        this.user = response.data;
        $timeout(() => {
            this.loadedUserDetail = true;
        }, 1000);
    }

    onGetUserError(error){
        console.log('onError in Get User', error);
    }

    onGetReposSuccess(response){
        this.user['repos'] = response;
        $timeout(() => {
            this.loadedRepository = true;
        }, 1000);
    }

    onGetReposError(error){
        console.log('onError in get Repos');
    }
}

UserController.$inject = ['$location', '$stateParams', 'searchService', '$timeout'];

export const User = {
    template: require('./User.html'),
    controller: UserController,
    controllerAs: 'UserCtrl'
};


