import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function HolaMundo() {
    console.log("hola desde  la screen hola mundo")
  return (
    <View style={styles.container}>
      <Text>HolaMundo</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:"center",
        alignItems:"center"
    }
})