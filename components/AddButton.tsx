import React from 'react'
import { StyleSheet, TouchableHighlight, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const AddButton = ({ onPress }) => (
  <View style={[styles.container]}>
    <TouchableHighlight
      style={[styles.button]}
      onPress={onPress}
      underlayColor="#DDDDDD"
    >
      <Ionicons name="add" size={28} color="#323232" />
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

export default AddButton