import React from 'react';  
import {StyleSheet, Text, View,Button, Image} from 'react-native';  
import { createBottomTabNavigator, createAppContainer} from 'react-navigation';  
import { createStackNavigator } from 'react-navigation-stack'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';  
import Icon from 'react-native-vector-icons/Ionicons';  

import MainScreen from './src/screen/MainScreen'

class HomeScreen extends React.Component {  
  render() {  
    return (  
        <View style={styles.container}>  
          <Text>Home Screen</Text>  
        </View>  
    );  
  }  
}  
class ProfileScreen extends React.Component {  
  render() {  
    return (  
        <View style={styles.container}>  
          <Text>Profile Screen</Text>  
        </View>  
    );  
  }  
}  
class ImageScreen extends React.Component {  
    render() {  
        return (  
            <View style={styles.container}>  
                <Text>Image Screen</Text>  
            </View>  
        );  
    }  
}  
class CartScreen extends React.Component {  
    render() {  
        return (  
            <View style={styles.container}>  
                <Text>Cart Screen</Text>  
            </View>  
        );  
    }  
}  
const styles = StyleSheet.create({  
    container: {  
        flex: 1,  
        justifyContent: 'center',  
        alignItems: 'center'  
    },  
});  

const TabNavigator = createMaterialBottomTabNavigator(  
    {  
        Home: { screen: MainScreen,  
            navigationOptions:{  
                tabBarLabel:'Home',  
                tabBarIcon: ({ tintColor }) => (  
                    <View>  
                        {/* <Icon style={[{color: tintColor}]} size={25} name={'ios-home'}/>   */}
                        <Text style={{color:'white'}}>1</Text>
                    </View>),
                // activeColor: '#ffffff',  
                // activeColor: '#ffffff',  
                // barStyle: { backgroundColor: '#000000' },  
            }  
        },  
        Profile: { screen: ProfileScreen,  
            navigationOptions:{  
                tabBarLabel:'Profile',  
                tabBarIcon: ({ tintColor }) => (  
                    <View>  
                        {/* <Icon style={[{color: tintColor}]} size={25} name={'ios-person'}/>   */}
                        <Text style={{color:'white'}}>2</Text>
                    </View>),  
                // activeColor: '#ffffff',  
                // activeColor: '#ffffff',  
                // barStyle: { backgroundColor: '#000000' },  
            }  
        },  
        Image: { screen: ImageScreen,  
            navigationOptions:{  
                tabBarLabel:'History',  
                tabBarIcon: ({ tintColor }) => (  
                    <View>  
                        {/* <Icon style={[{color: tintColor}]} size={25} name={'ios-images'}/>   */}
                        <Text style={{color:'white'}}>3</Text>
                    </View>),  
                // activeColor: '#ffffff',  
                // activeColor: '#ffffff',  
                // barStyle: { backgroundColor: '#000000' },  
            }  
        },  
        Cart: {  
            screen: CartScreen,  
            navigationOptions:{  
                tabBarLabel:'Cart',  
                tabBarIcon: ({ tintColor }) => (  
                    <View>  
                        {/* <Icon style={[{color: tintColor}]} size={25} name={'ios-cart'}/>    */}
                        <Text style={{color:'white'}}>4</Text>
                    </View>),  
                // activeColor: '#ffffff',  
                // activeColor: '#ffffff',    
                // barStyle: { backgroundColor: '#000000' },  
            }  
        },  
    },  
    {  
      initialRouteName: "Home",  
      activeColor: '#ffffff',  
      activeColor: '#ffffff',    
      barStyle: { backgroundColor: '#000000' },  
    },  
);  
  
// export default createAppContainer(TabNavigator);  

import MyNav from './src/screen/MyNav'
import LoginScreen from './src/screen/LoginScreen'

const AppStack = createStackNavigator(
  {
      LoginScreen: LoginScreen,
      MyNav: MyNav
      
  },{
    initialRouteName: 'LoginScreen',  
  }
);

export default createAppContainer(AppStack);

const App: () => React$Node = () => {
  return (
    <MyNav></MyNav>
  );
};

// export default App;
