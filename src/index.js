const angular = require('angular');
const routesConfig = require('./routes');
require('@uirouter/angularjs');

import authModule from './app/auth/auth.module';
import './index.scss';

const MODULE = 'app';
module.export = MODULE;

angular
  .module(MODULE, ['ui.router', authModule])
  .config(routesConfig);
