import React from 'react';  
import {StyleSheet, Text, View,Button, Image} from 'react-native';  
import { createBottomTabNavigator, createAppContainer} from 'react-navigation';  
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';  
import Icon from 'react-native-vector-icons/Ionicons';  

import MainScreen from '../screen/MainScreen'
import SearchScreen from '../screen/SearchScreen'

class HistoryScreen extends React.Component {  
    render() {  
        return (  
            <View style={styles.container}>  
                <Text>History Screen</Text>  
            </View>  
        );  
    }  
}  
class SettingScreen extends React.Component {  
    render() {  
        return (  
            <View style={styles.container}>  
                <Text>Setting Screen</Text>  
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

const MyNav = createMaterialBottomTabNavigator(  
    {  
        Home: { screen: MainScreen,  
            navigationOptions:{  
                tabBarLabel:'Home',  
                tabBarIcon: ({ tintColor }) => (  
                    <View>  
                        {/* <Icon style={[{color: tintColor}]} size={25} name={'ios-home'}/>   */}
                        <Text style={{color:'white'}}>1</Text>
                    </View>),
            }  
        },  
        Search: { screen: SearchScreen,  
            navigationOptions:{  
                tabBarLabel:'Search',  
                tabBarIcon: ({ tintColor }) => (  
                    <View>  
                        {/* <Icon style={[{color: tintColor}]} size={25} name={'ios-person'}/>   */}
                        <Text style={{color:'white'}}>2</Text>
                    </View>),   
            }  
        },  
        History: { screen: HistoryScreen,  
            navigationOptions:{  
                tabBarLabel:'History',  
                tabBarIcon: ({ tintColor }) => (  
                    <View>  
                        {/* <Icon style={[{color: tintColor}]} size={25} name={'ios-images'}/>   */}
                        <Text style={{color:'white'}}>3</Text>
                    </View>),
            }  
        },  
        Setting: {  
            screen: SettingScreen,  
            navigationOptions:{  
                tabBarLabel:'Setting',  
                tabBarIcon: ({ tintColor }) => (  
                    <View>  
                        {/* <Icon style={[{color: tintColor}]} size={25} name={'ios-cart'}/>    */}
                        <Text style={{color:'white'}}>4</Text>
                    </View>),  
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
  
export default createAppContainer(MyNav);  