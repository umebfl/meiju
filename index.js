/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import AsyncStorage from './RNAsyncStorage'

AppRegistry.registerComponent(appName, () => App);
