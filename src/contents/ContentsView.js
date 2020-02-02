import React , {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    ScrollView,
    Modal , 
    ImageBackground
} from 'react-native';

import ContentsModal from './ContentsModal'
const ip = 'http://172.30.1.53:8010/app/';

export default class ContentsView extends Component {
    mainImageUrl = '';
    state = {
        contentsModalVisible: false
    }
    constructor(props) {
        super(props);
        this.mainImageUrl = ip + 'images/get/' + this.props.imageUrl;
    }

    onClickModalContents(visible){
        this.setState({contentsModalVisible: visible});
    }

    render(){
        return (
            <View style={styles.contentsView} >
                <Image
                    style={styles.contentsImage}
                    source={{uri:this.mainImageUrl}}
                    onTouchEnd={() => this.onClickModalContents(true)}
                    />
                <View>
                    <Modal 
                        animationType="slide" 
                        visible={this.state.contentsModalVisible}
                        transparent={false} 
                        
                        >
                        <View style={styles.modalRootView}>
                            <ImageBackground 
                                source={{uri:this.mainImageUrl}} 
                                blurRadius={0.5}
                                style={{position:'absolute' ,width: '100%', height: '90%', opacity: 0.4}}
                                >
                                
                            </ImageBackground>
                            <View style={styles.modalBackBtnView}>
                                <Image 
                                    style={styles.modalBackBtn} 
                                    source={require('./play.png')}
                                    onTouchEnd={() => this.onClickModalContents(false)}></Image>
                            </View>
                            <View style={styles.modalMainImageView}>
                                <Image style={styles.modalMainImage} source={{uri:this.mainImageUrl}}></Image>
                            </View>
                            <View style={styles.modalTitleView}>
                                <Text style={styles.modalTitleText}>{this.props.videoSuperNm}</Text>
                            </View>
                            <View>
                                <Text style={{color:'white'}}>Hello WOrld</Text>
                            </View>
                        </View>
                    </Modal>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    contentsView:{
        width: 100, 
        height: 130, 
        margin: 4
    } ,
    contentsImage:{
        width: 100,
        height: 130
    } ,
    modalRootView:{
        backgroundColor:'black',
        width: '100%' , 
        height: '100%' ,
        color: 'white'
    } ,
    modalBackBtnView:{
        alignItems: 'flex-end'
    } ,
    modalBackBtn:{
        transform:  [{rotate: '180deg'}] , 
        width: 35 ,
        height: 35 , 
        margin: 5 ,
        borderColor: '#333333',
        borderWidth: 2 , 
        borderRadius: 30
    } , 
    modalMainImageView:{
        alignItems:'center'
    } ,
    modalMainImage:{
        width: 170,
        height: 220
    } ,
    modalTitleView:{
        alignItems: 'center' , 
        margin: 3
    } , 
    modalTitleText:{
        color: 'white' ,
        fontWeight: 'bold' ,
        fontSize : 18
    }
});