import {SHOW_ALL} from '../constants/TodoFilters';

class AppController {
  constructor() {
      this.filter = SHOW_ALL;

  }
}

export const App = {
  template: require('./App.html'),
  controller: AppController
};
