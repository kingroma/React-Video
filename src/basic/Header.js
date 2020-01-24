import React , {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image
} from 'react-native';

export default class Header extends Component   {

    render(){
        return (
            <View style={{position:'absolute',zIndex:99,height:'5%',top:0}}>
                <Text>Hello World</Text>
            </View>
        );
    }
}


const styles = StyleSheet.create({

});