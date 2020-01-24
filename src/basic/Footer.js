import React , {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image
} from 'react-native';


export default class Footer extends Component   {
    homeBtnOnClick() {
        // console.log ( this.props.navigation )
        this.props.navigation.navigate("Main");
    }

    searchBtnOnClick() {
        // this.props.navigation.navigate("Search");
        this.props.navigation.navigate("Search");
    }

    render(){
        return (
            <View style={styles.viewRoot}  >
                <View style={styles.footerItemView}>
                    <Text onPress={ () => this.homeBtnOnClick() }>
                        Home
                    </Text>
                </View>
                <View style={styles.footerItemView}>
                    <Text onPress={ () => this.searchBtnOnClick() }>
                        Search
                    </Text>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    viewRoot:{
        height:'8%',
        backgroundColor:'#abcdef',
        flexDirection: 'row'
    },
    footerItemView: {
        width:'21%',
        margin: '2%',
        alignItems: 'center',
        textAlignVertical: 'center'
    }
});