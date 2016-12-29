let searchService, $stateParams;
class Repository {
    constructor(_searchService, _$stateParams){
        searchService = _searchService;
        $stateParams = _$stateParams;
        this.repositoryName = $stateParams.repository;
        this.username = $stateParams.username;
        this.submit();
        this.repository = {};
    }

    submit(){
        searchService.getRepositoryByUser(this.username, this.repositoryName).then(this.onGetRepoByUserSuccess.bind(this), this.onGetRepoByUserError);
    }

    onGetRepoByUserSuccess(response){
        this.repository = response.data;
    }

    onGetRepoByUserError(){
        console.log('onError in getGetRepoByUserError');
    }

}
Repository.$inject = ['searchService', '$stateParams'];
export const RepositoryInfo = {
    template: require('./Repository.html'),
    controller: Repository,
    controllerAs: 'RepositoryCtrl'
};
