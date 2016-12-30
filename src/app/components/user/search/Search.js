let searchService, $location, $stateParams = '', $timeout;
/**
 * @description Makes the requisition for searching users and repositories.
 * @constructor {searchService, $location, $stateParams}
 */
class Search {
    constructor(_searchService, _$location, _$stateParams,  _$timeout){
        searchService = _searchService;
        $stateParams = _$stateParams;
        $location = _$location;
        $timeout = _$timeout;
        this.getUserName = $stateParams.q;
        this.getType = $stateParams.type;
        this.user = {};
        this.listOrdered = false;
        this.loadedUser = false;
        this.loadedRepository = false;
        this.submit();
    } 
    dynamicOrder(){
        return this.listOrdered ? 'stargazers_count': '-stargazers_count';
    }
    /**
    * @description Submit requisition for searchService
    */
    submit(){
        searchService.getUsers($stateParams.q).then(this.onGetUsersSuccess.bind(this), this.onGetUsersSubmitError);
        searchService.getRepositories($stateParams.q).then(this.onGetReposSuccess.bind(this), this.onGetUserSubmitError);
    }

    /**
    * @return {String}
    * @description Return a username
    */
    getUser(){
        return this.user;
    }

    onGetUsersSuccess(response){
        this.users = response.data;
        $timeout(() => {
            this.loadedUser = true;
        }, 1000);
    }

    onGetUsersError(error){
        console.log('onError in Get Users', error);
    }

    onGetReposSuccess(response){
        this.repos = response;
        $timeout(() => {
            this.loadedRepository = true;
        }, 1000);
    }

    onGetReposError(error){
        console.log('onError in get Repos');
    }
}

Search.$inject = ['searchService', '$location', '$stateParams', '$timeout'];

export const SearchUser = {
    template: require('./Search.html'),
    controller: Search,
    controllerAs: 'SearchCtrl'
};
