/**
 * @description Makes the requisition for searching users.
 * @constructor {searchService, $location}
 */
let $location;
class InputSearchController {
    constructor(_$location){
        $location = _$location;
    }

}

InputSearchController.$inject = ['$location', '$state'];

export const InputSearch = {
    template: require('./InputSearch.html'),
    controller: InputSearchController,
    controllerAs: 'InputSearchCtrl'
};
