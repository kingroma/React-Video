import React , {Component} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    Platform
} from 'react-native';
import Swiper from 'react-native-swiper'
import ViewPager from "@react-native-community/viewpager";

export default class MainHeaderImage extends Component   {
    render(){
        // swiperStart = null ; 
        // swiperEnd = null ;
        // if ( Platform.OS == "ios" ){
        //     swiperStart = <Swiper style={styles.swiper} showsPagination={false} showsButtons={false}> ;
        //     swiperEnd = </Swiper> ;
        // }else { 
        //     swiperStart = <ViewPager style={styles.swiper} showsPagination={false} showsButtons={false}> ;
        //     swiperEnd = </ViewPager> ;
        // }

        return (
            <View style={{flex:1}}>
                <ViewPager style={styles.swiper} showsPagination={false} showsButtons={false}>
               
                    <Image 
                        style={styles.image} 
                        source={require('./sample1.jpg')}/>
                    <Image 
                        style={styles.image} 
                        source={require('./sample3.jpeg')}/>
                </ViewPager>
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    swiper:{
        height:220
    },
    image: {
        width:'100%',
        height:220,
        backgroundColor:'black'
    }
});