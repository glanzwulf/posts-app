import * as React from 'react'
import { SafeAreaView, StyleSheet, Text } from 'react-native'

export default function BurgerScreen() {
  return (
    <SafeAreaView style={styles.drawerContainer}>
      <Text style={styles.text}>Creating a generic drawer content</Text>
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