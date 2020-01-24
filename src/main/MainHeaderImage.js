import React , {Component} from 'react';
import {
    View,
    Text,
    Image
} from 'react-native';

export default class MainHeaderImage extends Component   {

    render(){
        return (
            <View style={{flex:1}}>
                <Image 
                    style={{width:'100%',height:220,backgroundColor:'black'}} 
                    source={require('./sample1.jpg')}/>
                <Text>Hello World</Text>
            </View>
        );
    }
}