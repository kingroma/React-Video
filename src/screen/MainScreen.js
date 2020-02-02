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
  AsyncStorage
} from 'react-native';

import MainHeaderImage from '../main/MainHeaderImage';
import ContentsHorizontalView from '../contents/ContentsHorizontalView'
import AjaxFunc from '../func/AjaxFunc'

const ip = 'http://172.30.1.53:8010/app';

export default class MainScreen extends Component   {


  constructor(props){
    console.log('constructor')
    super(props);
    this.state = {mainData:<></>};
  }

  componentDidMount(){ 
    var url = ip + '/contents/api/mainVideoList.do';
    AjaxFunc.ajaxPost(url,{},this.getMainData,this)
  }

  getMainData(data,transferData){
    var output = [];
    if ( data != null && data != undefined ){
      const length = data.length ; 
      for ( var i = 0 ; i < length ; i ++ ){
        const contents = data[i];
        var contentsNm = contents.contentsNm
        
        output.push(
          <ContentsHorizontalView title={contentsNm} videos={contents.videos}>
          </ContentsHorizontalView>
        )
      }

      transferData.setState({mainData:output});
    }
    
  }
  render(){
    console.log('render')

    return (
        <View >
            <StatusBar barStyle="light-content" />
              <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}>
                <MainHeaderImage></MainHeaderImage>
                {this.state.mainData}
              </ScrollView>
              
              {/* <Header></Header>   */}
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
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: 'white',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: 'black',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: 'black',
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: 'black',
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});
