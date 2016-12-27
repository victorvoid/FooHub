let searchService, $location;
/**
 * @description Makes the requisition for searching users.
 * @constructor {searchService, $location}
 */
class SearchController {

    constructor(_searchService, _$location){
        searchService = _searchService;
        $location = _$location;
        this.user = searchService.user;
    }

    submit(){
        searchService.apiSearch().then(this.onSubmitSuccess, this.onSubmitError);
    }

    onSubmitSuccess(response){
        console.log('onsubmit', response.data);
        // $location.path('users/');
    }

    onSubmitError(error){
        console.log('onError', error);
    }
}

SearchController.$inject = ['searchService', '$location'];

export const SearchUser = {
    template: require('./Search.html'),
    controller: SearchController,
    controllerAs: 'SearchCtrl'
};
