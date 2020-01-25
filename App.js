import React from 'react';  
import {StyleSheet, Text, View,Button, Image} from 'react-native';  
import { createBottomTabNavigator, createAppContainer} from 'react-navigation';  
import { createStackNavigator } from 'react-navigation-stack'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';  
import Icon from 'react-native-vector-icons/Ionicons';  



  
// export default createAppContainer(TabNavigator);  

import MyNav from './src/screen/MyNav'
import LoginScreen from './src/screen/LoginScreen'

const AppStack = createStackNavigator(
  {
      LoginScreen: LoginScreen,
      MyNav: MyNav
      
  },{
    initialRouteName: 'LoginScreen',  
    headerMode: 'none'
  }
);

export default createAppContainer(AppStack);

// const App: () => React$Node = () => {
//   return (
//     <MyNav></MyNav>
//   );
// };

// export default App;
