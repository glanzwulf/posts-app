import React from 'react'
import { StyleSheet, Text, TouchableHighlight, View, } from 'react-native'

const SubmitButton = ({ onPress }) => (
  <View style={[styles.container]}>
    <TouchableHighlight
      style={[styles.button]}
      onPress={onPress}
      underlayColor="#DDDDDD"
    >
      <Text style={styles.label}>Submit</Text>
    </TouchableHighlight>
  </View>
)

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
    paddingVertical: 12,
    paddingHorizontal: 14,

  },
  label: {
    color: '#0a940a',
    fontWeight: '700',
  },
})

export default SubmitButton