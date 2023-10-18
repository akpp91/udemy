import { Alert, Button, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'

const HomeScreen = ({navigation}: any) => {
  console.log(navigation);
  return (
    <View>
      <Text style={styles.Text}>HomeScreen</Text>
      <Button 
      title='GO TO COMPONENTS'
      onPress={()=> navigation.navigate('Components')
      }/>

      <Button 
      title='GO TO LIST'
      onPress={()=> navigation.navigate('ListScreen')
      }/>

      <Button 
      title='go to ImageScreen'
      onPress={()=> navigation.navigate('ImageView')
      }/>

      <Button 
      title='go to CounterScreen'
      onPress={()=> navigation.navigate('CounterScreen')
      }/>

      <Button 
      title='Color'
      onPress={()=> navigation.navigate('Color')
      }/>

    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    Text:{
        fontSize:30,
    }
})