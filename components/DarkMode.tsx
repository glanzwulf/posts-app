import React from 'react'
import { StyleSheet, TouchableHighlight, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const DarkMode = ({ onPress }) => (
  <View style={[styles.container]}>
    <TouchableHighlight
      style={[styles.button]}
      onPress={onPress}
      underlayColor="#DDDDDD"
    >
      <MaterialCommunityIcons name="theme-light-dark" size={24} color="black" />
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
  label: {
    color: '#ff0000',
    fontWeight: '700',
  },
})

export default DarkMode