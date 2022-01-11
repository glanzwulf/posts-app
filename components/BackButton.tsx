import React from 'react'
import { StyleSheet, TouchableHighlight, View, } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const BackButton = ({ onPress }) => (
  <View style={[styles.container]}>
    <TouchableHighlight
      style={[styles.button]}
      onPress={onPress}
      underlayColor="#DDDDDD"
    >
      <Ionicons name="arrow-back-sharp" size={28} color="#323232" />
    </TouchableHighlight>
  </View>
)

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: '#ffffff',
  },
})

export default BackButton