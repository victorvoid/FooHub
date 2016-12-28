let searchService, $location;
/**
 * @description Makes the requisition for searching users.
 * @constructor {searchService, $location}
 */
let $stateParams = '';
class SearchController {
    constructor(_searchService, _$location, _$stateParams, $scope){
        searchService = _searchService;
        $stateParams = _$stateParams;
        $location = _$location;
        this.submit();
    }

    submit(){
        searchService.apiSearch($stateParams.q).then(this.onSubmitSuccess.bind(this), this.onSubmitError);
    }

    getUser(){
        return JSON.stringify(this.user);
    }

    onSubmitSuccess(response){
        this.user = response.data;
        console.log(this.user)
    }

    onSubmitError(error){
        console.log('onError', error);
    }
}

SearchController.$inject = ['searchService', '$location', '$stateParams', '$scope'];

export const SearchUser = {
    template: require('./Search.html'),
    controller: SearchController,
    controllerAs: 'SearchCtrl'
};
