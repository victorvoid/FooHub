class HeaderController {
    constructor($scope, onlineStatus){
        $scope.onlineStatus = onlineStatus;
        $scope.online_again = false;
        $scope.on = false;
        $scope.$watch('onlineStatus.isOnline()', function(online) {
            $scope.online_status = online ? true : false;
            $scope.online_again = $scope.online_status === false ? true: false;
            if($scope.online_again){
                $scope.on = true;
            }
        });
    }

}
HeaderController.$inject = ['$scope', 'onlineStatus'];

export const Header = {
    template: require('./Header.html'),
    controller: HeaderController,
    controllerAs: 'HeaderCtrl'
};
