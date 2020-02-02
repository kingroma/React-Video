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
    constructor(props){
        super(props);
    }
    render(){
        const videos = this.props.videos;
        var contentsViesList = [] ;

        if ( videos != null && videos != undefined ){
            const len = videos.length; 

            for ( var i = 0 ; i < len ; i ++ ){
                const v = videos[i];
                var videoSuperId = v.videoSuperId;
                var videoSuperNm = v.videoSuperNm;
                var videoSuperMainImage = v.videoSuperMainImage;
                
                contentsViesList.push(
                    <ContentsView 
                        videoSuperId={videoSuperId} 
                        videoSuperNm={videoSuperNm}
                        imageUrl={videoSuperMainImage} >
                        
                    </ContentsView>
                )
            }
        }
        return (
            <View style={styles.contentsRoot}>
                <View>
                    <Text style={styles.titleText}>
                        {this.props.title}
                    </Text>
                </View>
                <ScrollView horizontal={true} style={styles.scrollView} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false} >
                    <View style={{flexDirection: 'row'}}>
                        {contentsViesList}
                    </View>
                </ScrollView>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    contentsRoot:{
        marginTop:10,
        marginBottom:3
    },
    titleText: {
        color:'white',
        fontWeight: "bold",
        marginTop:3,
        marginBottom:3
    },
    scrollView:{
        width:'100%', 
        height:140, 
        backgroundColor:'#111111'
    }
});