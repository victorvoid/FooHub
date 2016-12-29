let searchService, $location, $stateParams = '';
/**
 * @description Makes the requisition for searching users and repositories.
 * @constructor {searchService, $location, $stateParams}
 */
class Search {
    constructor(_searchService, _$location, _$stateParams, $scope){
        searchService = _searchService;
        $stateParams = _$stateParams;
        $location = _$location;
        this.getUserName = $stateParams.q;
        this.getType = $stateParams.type;
        this.user = {};
        this.listOrdered = false;
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
    }

    onGetUsersError(error){
        console.log('onError in Get Users', error);
    }

    onGetReposSuccess(response){
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
