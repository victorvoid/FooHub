import angular from 'angular';

//Modules
export const userModule = 'userModule';

//Components
import {SearchUser} from './search/Search';
import {InputSearch} from './search/InputSearch';
import {User} from './User';

//Services
import {searchService} from './search/Search.service.js';

angular
    .module(userModule, [])
    .factory('searchService', searchService)
    .component('searchComponent', SearchUser)
    .component('userComponent', User)
    .component('inputSearchComponent', InputSearch);
