import React , {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    ScrollView
} from 'react-native';

export default class ContentsView extends Component   {

    render(){
        return (
            <View style={styles.contentsView}>
                <Text>
                    Content View
                </Text>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    contentsView:{
        width: 100, 
        height:100, 
        margin:10
    }
});