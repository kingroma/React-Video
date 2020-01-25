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

const STORAGE_USER_KEY = "USER";

export default class LoginScreen extends Component   {
  constructor(props) {
    super(props);

    navigation = this.props.navigation;
    AsyncStorage.getItem(STORAGE_USER_KEY, ( error , value )=>{
      // let json = JSON.parse(value);
      // console.log (  " Value :" , value , " Error :" , error)
      // callback (json, transData, error)
      if ( value != null && value != undefined ){
        let json = JSON.parse(value);
        let id = json.id  ; 

        navigation.navigate("MyNav",json);
      }
    });
  }

  checkLogin(){
    let id = this.state.id;
    let pwd = this.state.pwd;
    console.log ('Login ID :', id , "Login PWD :" , pwd )

    date = {
      'id':id,
      'pwd':pwd
    }
    this.setUserStorage(date);
  }

  setUserStorage(data){
    let str = JSON.stringify(data);
    AsyncStorage.setItem( STORAGE_USER_KEY , str ) ;
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
                  placeholder="Your Id ..."
                  onChangeText={text => this.setState({id:text})}
                  autoCorrect="false"
                  autoCapitalize={false}
                  ></TextInput>
            
          </View>
          <View style={styles.inputView}>
              <TextInput 
                  style={styles.inputText}
                  placeholderTextColor="white"
                  placeholder="Your Pwd ..."
                  onChangeText={text => this.setState({pwd:text})}
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
  