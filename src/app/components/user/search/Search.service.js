/**
 * @param {$http, $location, $q}
 * @return {apiSearch, user}
 */
export const searchService = function($http, $q){
    let user = {
        name: ''
    };

    function apiSearch(){
        let deferred = $q.defer();
        $http({
            url:`https://api.github.com/users/${this.user.name}`,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(onSearchSuccess.bind({deferred: deferred}))
        .catch(onSearchCatch.bind({deferred: deferred}));

        return deferred.promise;
    }

    function onSearchSuccess(response) {
        this.deferred.resolve({data: response.data});
    }

    function onSearchCatch(error) {
        this.deferred.reject();
    }

    return {
        apiSearch,
        user
    };
};
