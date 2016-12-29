/**
 * @param {$http, $location, $q}
 * @return {apiSearch, user}
 */
export const searchService = function($http, $q){

    //functions for to use in promise
    function onSearchSuccess(response) {
        this.deferred.resolve({data: response.data});
    }
    function onSearchCatch(error) {
        this.deferred.reject();
    }

    /**
    * @param {username}
    */
    function getUser(username){
        let deferred = $q.defer();
        $http({
            url:`https://api.github.com/users/${username}`,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(onSearchSuccess.bind({deferred: deferred}))
        .catch(onSearchCatch.bind({deferred: deferred}));

        return deferred.promise;
    }

    /**
     * @param {query}
     */
    function getUsers(q){
        let deferred = $q.defer();
        $http({
            url:`https://api.github.com/search/users?q=${q}`,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(onSearchSuccess.bind({deferred: deferred}))
            .catch(onSearchCatch.bind({deferred: deferred}));

        return deferred.promise;
    }
    /**
    * @param {username}
    * @description search repositories of the user
    */
    function getUserRepositories(username){
        let deferred = $q.defer();
        $http({
            url:`https://api.github.com/users/${username}/repos`,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(onSearchSuccess.bind({deferred: deferred}))
            .catch(onSearchCatch.bind({deferred: deferred}));

        return deferred.promise;
    }

    /**
     * @param {q}
     * @description search repositories
     */

    function getRepositories(q){
        let deferred = $q.defer();
        $http({
            url:`https://api.github.com/search/repositories?q=${q}`,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(onSearchSuccess.bind({deferred: deferred}))
            .catch(onSearchCatch.bind({deferred: deferred}));

        return deferred.promise;
    }
    return {
        getUsers,
        getUserRepositories,
        getRepositories,
        getUser
    };
};
