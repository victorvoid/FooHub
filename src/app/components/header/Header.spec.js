import angular from 'angular';
import 'angular-mocks';
import {Header} from './Header';

describe('Header component', () => {
  beforeEach(() => {
    angular
      .module('headerComponent', ['app/components/Header.html'])
      .component('headerComponent', Header);
    angular.mock.module('headerComponent');
  });

  it('should render correctly', angular.mock.inject(($rootScope, $compile) => {
    const element = $compile('<header-component></header-component>')($rootScope);
    $rootScope.$digest();
    const header = element.find('h1');
    expect(header.html().trim()).toEqual('GithubAPI');
  }));
});
