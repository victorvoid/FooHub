import angular from 'angular';
import 'angular-ui-router';

// Components
import {App} from './app/containers/App';
import {Header} from './app/components/header/Header';
import {Home} from './app/components/home/Home';
import {Sidebar} from './app/components/sidebar/Sidebar';
import {Footer} from './app/components/footer/Footer';
import {SearchUser} from './app/components/searchUser/SearchUser';

// Route
import routesConfig from './routes';

import './index.scss';

angular
    .module('app', ['ui.router'])
    .config(routesConfig)
    .component('app', App)
    .component('headerComponent', Header)
    .component('homeComponent', Home)
    .component('seachUserComponent', SearchUser)
    .component('sidebarComponent', Sidebar)
    .component('footerComponent', Footer);
