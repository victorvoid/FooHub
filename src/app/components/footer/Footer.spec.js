import angular from 'angular';
import 'angular-mocks';
import {Footer} from './Footer';

describe('Footer component', () => {
    beforeEach(() => {
        angular
        .module('footerComponent', ['app/components/Footer.html'])
        .component('footerComponent', Footer);
        angular.mock.module('footerComponent');
    });

    it('should render \'Victor Igor\'', angular.mock.inject(($rootScope, $compile) => {
        const element = $compile('<footer-component></footer-component>')($rootScope);
        $rootScope.$digest();
    }));
});
