let searchService, $location, $stateParams = '';
/**
 * @description Makes the requisition for searching users.
 * @constructor {searchService, $location}
 */
class Search {
    constructor(_searchService, _$location, _$stateParams, $scope){
        searchService = _searchService;
        $stateParams = _$stateParams;
        console.log($stateParams);
        this.getUserName = $stateParams.q;
        this.getType = $stateParams.type;
        $location = _$location;
        this.user = {};
        this.submit();
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
        console.log('responseUsers: ', this.users);
    }

    onGetUsersError(error){
        console.log('onError in Get Users', error);
    }

    onGetReposSuccess(response){
        console.log('getRepos: ', response);
        this.repos = response;
    }

    onGetReposError(error){
        console.log('onError in get Repos');
    }
}

Search.$inject = ['searchService', '$location', '$stateParams', '$scope'];

export const SearchUser = {
    template: require('./Search.html'),
    controller: Search,
    controllerAs: 'SearchCtrl'
};
