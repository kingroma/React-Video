import React , {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    ScrollView,
    ListView
} from 'react-native';

import ContentsView from './ContentsView'

export default class ContentsHorizontalView extends Component   {

    render(){
        return (
            <View style={styles.contentsRoot}>
                <View>
                    <Text style={styles.titleText}>
                        Hello world
                    </Text>
                </View>
                <ScrollView horizontal={true} style={styles.scrollView} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false} >
                    <View style={{flexDirection: 'row'}}>
                        <ContentsView ></ContentsView>
                        <ContentsView ></ContentsView>
                        <ContentsView ></ContentsView>
                        <ContentsView ></ContentsView>
                        <ContentsView ></ContentsView>
                        <ContentsView ></ContentsView>
                        <ContentsView ></ContentsView>
                    </View>
                </ScrollView>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    contentsRoot:{
        marginTop:10,
        marginBottom:5
    },
    titleText: {
        color:'white',
        fontWeight: "bold"
    },
    scrollView:{
        width:'100%', 
        height:120, 
        backgroundColor:'#666666'
    }
});