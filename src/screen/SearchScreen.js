/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React ,{ Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Modal
} from 'react-native';

import Header from '../basic/Header';
import Footer from '../basic/Footer';

export default class SearchScreen extends Component {

    render(){
        return (
            <View>
                <StatusBar barStyle="light-content" />
                <View >
                    <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}>
                        <View style={styles.inputViewRoot} >
                          <View style={styles.inputView}>
                            <TextInput 
                              style={styles.inputText}
                              placeholderTextColor="white"
                              placeholder="Search..."
                              onChangeText={text => this.setState({search:text})}
                              autoCapitalize={false}
                              autoCorrect={false}
                            ></TextInput>
                          </View>
                        </View>
                        
                        {/* <Modal animationType="slide"></Modal> */}
                    </ScrollView>
                    
                </View>
            </View>
          );
    }
};


const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'black',
    width: '100%',
    height: '100%',
    zIndex:0
  },
  inputViewRoot:{
    paddingTop:10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputView:{
    width:"80%",
    backgroundColor:"#465881",
    
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50,
    color:"white"
  },
  
});
  