import angular from 'angular';
import {SearchUser} from './search/Search';
import {searchService} from './search/Search.service.js';
export const userModule = 'userModule';

angular
    .module(userModule, [])
    .factory('searchService', searchService)
    .component('searchUserComponent', SearchUser);
