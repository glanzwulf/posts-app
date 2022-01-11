import React from 'react'
import { StyleSheet, TouchableHighlight, View } from 'react-native'
import { Feather } from '@expo/vector-icons' 

const EditButton = ({ onPress }) => (
  <View style={[styles.container]}>
    <TouchableHighlight
      style={[styles.button]}
      onPress={onPress}
      underlayColor="#DDDDDD"
    >
      <Feather name="edit-3" size={23} color="#0a6194" />
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
    paddingVertical: 12,
    paddingHorizontal: 14,

  },
  label: {
    color: '#0a6194',
    fontWeight: '700',
  },
})

export default EditButton