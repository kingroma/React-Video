import React , {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    ScrollView
} from 'react-native';

export default class ContentsView extends Component   {
    constructor(props) {
        super(props);
        this.state = {
            imgNm: './sample1.jpeg',
            rand: '1'
        }
      }
    render(){
        var min = 1;
        var max = 5;
        var rand =  Math.round(min + (Math.random() * (max-min)));

        var imgNm = './sample' + rand + '.jpeg';

        // Math.round(min + (Math.random() * (max-min))}
        // this.setState({rand: '1'});
        // this.setState ({imgNm:imgNm})
        // console.log(this.state.imgNm)
        // console.log ('./sample' + Math.round(min + (Math.random() * (max-min))) + '.jpeg')
        console.log ( this.state.rand );
        return (
            <View style={styles.contentsView}>
                {/* <Image
                    style={styles.contentsImage}
                    source={require('./sample' + (this.state.rand) + '.jpeg')}
                    /> */}
            </View>
        );
    }
}


const styles = StyleSheet.create({
    contentsView:{
        width: 100, 
        height:100, 
        margin:10
    },
    contentsImage:{
        width:100,
        height:100
    }
});