import React , {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    ScrollView,
    Modal
} from 'react-native';


const ip = 'http://172.30.1.53:8010/app/';

export default class ContentsModal extends Component {

    videoSuperId = '';
    mainImageUrl = '';
    funcOnCloseModal;
    constructor(props) {
        super(props);
        this.videoSuperId = props.videoSuperId;
        this.mainImageUrl = props.mainImageUrl;
        this.state = {modelVisible:false}
        this.onCloseModal = props.onCloseModal;
        
    }

    onCloseBtn(){
        onCloseModal();
    }
    render(){
        return (
            <View>
                <Modal animationType="slide" visible={this.state.modelVisible} >
                    <View style={styles.rootView}>
                        <View style={styles.backBtnView}>
                            <Image 
                                style={styles.backBtn} 
                                source={require('./play.png')}
                                onTouchEnd={()=>this.onCloseBtn()}></Image>
                        </View>
                        <View style={styles.mainImageView}>
                            <Image style={styles.mainImage} source={{uri:this.mainImageUrl}}></Image>
                        </View>
                    </View>
                </Modal>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    rootView:{
        backgroundColor:'black',
        width: '100%' , 
        height: '100%' ,
        color: 'white'
    },
    backBtnView:{
        alignItems:'flex-end'
    },
    backBtn:{
        transform:  [{rotate: '180deg'}] , 
        width: 35 ,
        height: 35 , 
        margin: 5 ,
        borderColor: '#333333',
        borderWidth: 2 , 
        borderRadius: 30
    } , 
    mainImageView:{
        alignItems:'center'
    } ,
    mainImage:{
        width:180,
        height:230
    }
});