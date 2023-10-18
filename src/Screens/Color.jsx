import { StyleSheet, Text, View ,Button, FlatList} from 'react-native'
import React, { useState } from 'react'

const Color = () => {
    const [col, setColour]=useState([])

console.log(col);
  return (
    <View>
        
        <Button 
        title="addColor"
        onPress={()=>{
            setColour([...col, rgb()]);
        }}
        />
      
      <FlatList
      keyExtractor={item => item}
        data={col}
        renderItem={({item})=> 
          {
            return(<View style={{height:100,width:100,backgroundColor:item}}></View>)
          }
        }
      />
    </View>
  )
}

const rgb= ()=>{
   const red= Math.floor(Math.random()*256);
   const green= Math.floor(Math.random()*256);
   const yellow= Math.floor(Math.random()*256);

   return `rgb(${red}, ${green} , ${yellow})`
}
export default Color

const styles = StyleSheet.create({})