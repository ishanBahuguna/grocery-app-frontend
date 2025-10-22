/**
 * @format
 */

import { AppRegistry , Text , TextInput } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { configureReanimatedLogger , ReanimatedLogLevel } from 'react-native-reanimated';



configureReanimatedLogger({
    level:ReanimatedLogLevel.warn,
    strict:false
})

// if(Text.defaultProps) {
//     Text.defaultProps.allowFontScaling = false;
// } else {
//     Text.defaultProps = {};
//     TextInput.defaultProps.allowFontScaling = false 
// }

// if(TextInput.defaultProps) {
//     TextInput.defaultProps.allowFontScaling = false;
// } else {
//     TextInput.defaultProps = {};
//     TextInput.defaultProps.allowFontScaling = false;
// }

if (Text.defaultProps == null) {
  Text.defaultProps = {};
}
Text.defaultProps.allowFontScaling = false;

if (TextInput.defaultProps == null) {
  TextInput.defaultProps = {};
}
TextInput.defaultProps.allowFontScaling = false;


AppRegistry.registerComponent(appName, () => App);
