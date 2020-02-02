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
  TouchableOpacity,
  Alert,
  AsyncStorage

} from 'react-native';

import AjaxFunc from '../func/AjaxFunc'

const STORAGE_USER_KEY = "USER";
const API_GET_USER_URL = 'http://172.30.1.53:8010/app/user/getUser.do';

export default class LoginScreen extends Component   {
  
  init(){
    AsyncStorage.getItem(STORAGE_USER_KEY, ( error , value )=>{
      
      if ( value != null && value != undefined ){
        let json = JSON.parse(value);
        let username = json.username  ; 
        let password = json.password ; 
        let token = json.token ; 
        
        this.props.navigation.navigate("MyNav");
      }
    });
  }
  checkLogin(){
    let username = this.state.username;
    let password = this.state.password;
    console.log ('Login username :', username , "Login password :" , password )

    
    AjaxFunc.ajaxPost(
      API_GET_USER_URL,
      {'username':username,'password':password},
      this.setUserStorage,
      this.props.navigation
    );
  }

  setUserStorage(data,callbackData){
    if ( data != null ){
      let username = data.username  ; 
      let password = data.password ; 
      let token = data.token ;

      if ( username != null && username != '' && password != null && password != '' && token != null && token != '' ){
        let str = JSON.stringify(data);
        AsyncStorage.setItem( STORAGE_USER_KEY , str ) ;
        callbackData.navigate("MyNav");
      }else {
        alert('Login Fail')
      }
    }
  }

  componentDidMount(){
    this.init();
  }

  render(){

    return (
      <View style={styles.rootView}>
          <StatusBar barStyle="light-content" />
          <View >  
            <Text style={styles.whoAreYou}>Who are you ?</Text>
          </View>
          <View style={styles.inputView}>
            <TextInput 
                  style={styles.inputText}
                  placeholderTextColor="white"
                  placeholder="Username ..."
                  onChangeText={text => this.setState({username:text})}
                  autoCorrect={false}
                  autoCapitalize={false}
                  ></TextInput>
            
          </View>
          <View style={styles.inputView}>
              <TextInput 
                  style={styles.inputText}
                  placeholderTextColor="white"
                  placeholder="Password ..."
                  onChangeText={text => this.setState({password:text})}
                  autoCorrect={false}
                  autoCapitalize={false}
                  secureTextEntry={true}
                  ></TextInput>
          </View> 
          <TouchableOpacity onPress={()=>{Alert.alert('Phone say','I don\'t know')}}>
              <Text style={styles.forgot}>Forgot Password?</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.loginBtn} onPress={()=>{this.checkLogin()}}>
              <Text style={styles.loginText}>LOGIN</Text>
          </TouchableOpacity>
      </View>
    );
  }
};


const styles = StyleSheet.create({
  rootView: {
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center'
  } ,
  whoAreYou: {
    fontWeight:"bold",
    fontSize:50,
    color:"#fb5b5a",
    marginBottom:40
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
  forgot:{
    color:"white",
    fontSize:11
},
loginBtn:{
    width:"80%",
    backgroundColor:"#fb5b5a",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
});
  