//step 1:
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

//step 2:
const Components = () => {
  
   const v= <Text style={styles.StyleSubHead}>"akshay variable"</Text>

  return <View>
      <Text style={styles.textStyle}>This is component</Text>
      {v}
    </View>
  
}

const styles = StyleSheet.create({
    textStyle:{
        fontSize:40
    },
    StyleSubHead:{
    fontSize:20
    }
})

export default Components
