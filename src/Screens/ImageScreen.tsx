import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ImageDetail from './Components/ImageDetails';


 
const ImageView=() =>{
    return(
    <View>
        <ImageDetail title= 'forest' ImageSource={require('../asset/forest.jpg')} />
        <ImageDetail title= 'beach' ImageSource={require('../asset/beach.jpg')}/>
        <ImageDetail title= 'mountain' ImageSource={require('../asset/mountain.jpg')}/>
    </View>
    )

}

const styles=StyleSheet.create({
    
});

export default ImageView;