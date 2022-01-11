import React from 'react'
import { StyleSheet, TouchableHighlight, View, Text } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Feather } from '@expo/vector-icons' 

interface ButtonProps {
  onPress: () => void,
  type: string,
}

const Button = ({ onPress, type } : ButtonProps) => (
  type === 'add' ? (
    <View style={[styles.container]}>
      <TouchableHighlight
        style={[styles.button]}
        onPress={onPress}
        underlayColor="#DDDDDD"
      >
        <Ionicons name="add" size={28} color="#323232" />
      </TouchableHighlight>
    </View>
  ) : type === 'edit' ? (
    <View style={[styles.container]}>
      <TouchableHighlight
        style={[styles.button]}
        onPress={onPress}
        underlayColor="#DDDDDD"
      >
        <Feather name="edit-3" size={23} color="#0a6194" />
      </TouchableHighlight>
    </View>
  ) : type === 'delete' ? (
    <View style={[styles.container]}>
      <TouchableHighlight
        style={[styles.button]}
        onPress={onPress}
        underlayColor="#DDDDDD"
      >
        <Text style={styles.label}>Delete post</Text>
      </TouchableHighlight>
    </View>
  ) : type === 'submit' ? (
    <View style={[styles.container]}>
      <TouchableHighlight
        style={[styles.button]}
        onPress={onPress}
        underlayColor="#DDDDDD"
      >
        <Text style={[styles.label]}>Submit post</Text>
      </TouchableHighlight>
    </View>
  ) : type === 'save' ? (
    <View style={[styles.container]}>
      <TouchableHighlight
        style={[styles.button]}
        onPress={onPress}
        underlayColor="#DDDDDD"
      >
        <Text style={[styles.label]}>Save post</Text>
      </TouchableHighlight>
    </View>
  ) : type === 'back' ? (
    <View style={[styles.container]}>
    <TouchableHighlight
      style={[styles.button]}
      onPress={onPress}
      underlayColor="#DDDDDD"
    >
      <Ionicons name="arrow-back-sharp" size={28} color="#323232" />
    </TouchableHighlight>
  </View>
  ) : type === 'darklight' ? (
    <View style={[styles.container]}>
      <TouchableHighlight
        style={[styles.button]}
        onPress={onPress}
        underlayColor="#DDDDDD"
      >
        <MaterialCommunityIcons name="theme-light-dark" size={24} color="black" />
      </TouchableHighlight>
    </View>
  ) : null
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

export default Button