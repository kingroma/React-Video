import React , {Component} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';
import Swiper from 'react-native-swiper'

export default class MainHeaderImage extends Component   {
    render(){
        return (
            <View style={{flex:1}}>
                <Swiper style={styles.swiper} showsPagination={false} showsButtons={false}>
                    <Image 
                        style={styles.image} 
                        source={require('./sample1.jpg')}/>
                    <Image 
                        style={styles.image} 
                        source={require('./sample3.jpeg')}/>
                </Swiper>
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