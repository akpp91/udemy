import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ListScreen = () => {

     interface IUser {
  id: string;
  name: string;
}
    const friends=[
        {name: 'akshay 1', age:100},
        {name: 'akshay 2',age:2},
        {name: 'akshay 3',age:3},
        {name: 'akshay 4',age:4},
        {name: 'akshay 5',age:5},
        {name: 'akshay 6',age:6},
        {name: 'akshay 7',age:7},
        {name: 'akshay 8',age:8},
    ]
  return (
    
      <FlatList 
      // horizontal
      // showsHorizontalScrollIndicator={false}
      keyExtractor={  (item: {age: number; name: string }) => item.name }
      data={friends} 
      
      renderItem=
        { 

            (e) => 
            {   
                return (
                  <View>
                  <Text style={styles.textStyle}>{`${e.item.name}-${e.item.age}`}</Text> 
                  
                  </View>
                )
                
                  
            } 
        }
      />
    
  )
}

export default ListScreen

const styles = StyleSheet.create({
  textStyle:{
    marginVertical:50
  }
})