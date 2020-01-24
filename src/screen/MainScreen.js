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
} from 'react-native';

import Header from '../basic/Header';
import Footer from '../basic/Footer';
import MainHeaderImage from '../main/MainHeaderImage';
import ContentsHorizontalView from '../contents/ContentsHorizontalView'

export default class MainScreen extends Component   {

    render(){
        return (
            <View >
                <StatusBar barStyle="light-content" />
                  <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}>
                  
                  <MainHeaderImage></MainHeaderImage>

                  <ContentsHorizontalView></ContentsHorizontalView>
                  <ContentsHorizontalView></ContentsHorizontalView>
                  <ContentsHorizontalView></ContentsHorizontalView>
                  <ContentsHorizontalView></ContentsHorizontalView>
                  <ContentsHorizontalView></ContentsHorizontalView>
                  </ScrollView>
                  {/* <Footer navigation={this.props.navigation}></Footer> */}
                  <Header></Header>  
            </View>
          );
    }
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'black',
    width: '100%',
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