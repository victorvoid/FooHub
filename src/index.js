import angular from 'angular';
import 'angular-ui-router';
// import 'angular-mocks';

//Modules
import {userModule} from './app/components/user/index';

// Components
import {Header} from './app/components/header/Header';
import {Home} from './app/components/home/Home';
import {Footer} from './app/components/footer/Footer';

// Routes
import routesConfig from './routes';

//style
import './index.scss';

//services
import {onlineService} from './app/services/onlineStatus.service.js';

angular
    .module('app', ['ui.router', userModule])
    .config(routesConfig)
    .factory('onlineStatus', onlineService)
    .component('headerComponent', Header)
    .component('homeComponent', Home)
    .component('footerComponent', Footer);
