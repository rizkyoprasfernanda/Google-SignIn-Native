import {AppRegistry} from 'react-native';
import App from './src/App'; // Pastikan ini mengarah ke file yang benar
import {name as appName} from './app.json';
import 'react-native-url-polyfill/auto';

AppRegistry.registerComponent(appName, () => App);
