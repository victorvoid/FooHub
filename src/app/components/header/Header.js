class HeaderController {
    constructor($scope, onlineStatus){
        $scope.onlineStatus = onlineStatus;
        $scope.$watch('onlineStatus.isOnline()', function(online) {
            $scope.online_status = online ? true : false;
        });
    }

}
HeaderController.$inject = ['$scope', 'onlineStatus'];

export const Header = {
    template: require('./Header.html'),
    controller: HeaderController,
    controllerAs: 'HeaderCtrl'
};
