import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native"

const CounterScreen= ()=>{

    const [count, setCount] =useState(0);
return(
    <View>
        <Button 
        title="increase counter"
        onPress={()=> setCount (count+ 1)}
        />

        <Button 
        title="decrease counter"
        onPress={()=> setCount (count - 1)}
        />

        <Text>counter:{count}</Text>
    </View>
)
}

const styles= StyleSheet.create({});

export default CounterScreen;