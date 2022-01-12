import * as React from 'react'
import { SafeAreaView, StyleSheet, Text } from 'react-native'

export default function BurgerScreen() {
  return (
    <SafeAreaView style={styles.drawerContainer}>
      <Text style={styles.text}>Hello! My name is Vladyslav and I like doing front-end work. If you liked this project, say hi!</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  drawerContainer: {
    backgroundColor: 'rgb(6, 9, 38)',
    flex: 1,
    padding: 10,
  },
  text: {
    margin: 50,
    color: 'white',
    opacity: 0.8,
  }
})