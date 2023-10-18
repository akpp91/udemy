import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
interface props {
    source: string;
  } 

const ImageDetail= (props:any) =>{
    console.log(props);
    
    return (
        <View>
        <Image source={props.ImageSource}></Image>
        <Text>{props.title}</Text>
    </View>

    );

}

const styles=StyleSheet.create({
    
});

export default ImageDetail;