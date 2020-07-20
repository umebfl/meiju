/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import AsyncStorage from '#/src/tools/RNAsyncStorage'

AppRegistry.registerComponent(appName, () => App);
