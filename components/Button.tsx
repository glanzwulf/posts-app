import React from 'react'
import { StyleSheet, TouchableHighlight, View, Text } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Feather } from '@expo/vector-icons' 
import { useTheme } from '@react-navigation/native'

interface ButtonProps {
  onPress: () => void,
  type: string,
}

const Button = ({ onPress, type } : ButtonProps) => {
  const { colors } = useTheme()
  const styles = makeStyles(colors)
  
  return (
  type === 'add' ? (
    <View style={[styles.container]}>
      <TouchableHighlight
        style={[styles.button]}
        onPress={onPress}
        underlayColor="none"
      >
        <Ionicons name="add" size={28} style={[styles.icon]} />
      </TouchableHighlight>
    </View>
  ) : type === 'edit' ? (
    <View style={[styles.container]}>
      <TouchableHighlight
        style={[styles.button]}
        onPress={onPress}
        underlayColor="none"
      >
        <Feather name="edit-3" size={23} style={[styles.icon]} />
      </TouchableHighlight>
    </View>
  ) : type === 'delete' ? (
    <View style={[styles.container]}>
      <TouchableHighlight
        style={[styles.button]}
        onPress={onPress}
        underlayColor="none"
      >
        <Text style={styles.deleteLabel}>Delete</Text>
      </TouchableHighlight>
    </View>
  ) : type === 'submit' ? (
    <View style={[styles.container]}>
      <TouchableHighlight
        style={[styles.button]}
        onPress={onPress}
        underlayColor="none"
      >
        <Text style={[styles.submitLabel]}>Submit</Text>
      </TouchableHighlight>
    </View>
  ) : type === 'save' ? (
    <View style={[styles.container]}>
      <TouchableHighlight
        style={[styles.button]}
        onPress={onPress}
        underlayColor="none"
      >
        <Text style={[styles.saveLabel]}>Save</Text>
      </TouchableHighlight>
    </View>
  ) : type === 'back' ? (
    <View style={[styles.container]}>
    <TouchableHighlight
      style={[styles.button]}
      onPress={onPress}
      underlayColor="none"
    >
      <Ionicons name="arrow-back-sharp" size={24} style={[styles.icon]} />
    </TouchableHighlight>
  </View>
  ) : type === 'darklight' ? (
    <View style={[styles.container]}>
      <TouchableHighlight
        style={[styles.button]}
        onPress={onPress}
        underlayColor="none"
      >
        <MaterialCommunityIcons name="theme-light-dark" size={24} style={[styles.icon]} />
      </TouchableHighlight>
    </View>
  ) : type === 'filter' ? (
    <View style={[styles.container]}>
      <TouchableHighlight
        style={[styles.button]}
        onPress={onPress}
        underlayColor="none"
      >
        <Ionicons name="filter-sharp" size={24} style={[styles.icon]} />
      </TouchableHighlight>
    </View>
  ) : null
)}

const makeStyles = (colors: any) => StyleSheet.create({
// const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    paddingVertical: 8,
    paddingHorizontal: 12,
    color: colors.background
  },
  deleteLabel: {
    color: 'red',
    fontWeight: '700',
    borderWidth: 2,
    padding: 12,
    borderRadius: 6,
    borderColor: 'red',
  },
  saveLabel: {
    color: 'green',
    fontWeight: '700',
    borderWidth: 2,
    padding: 12,
    borderRadius: 6,
    borderColor: 'green',
  },
  submitLabel: {
    color: 'green',
    fontWeight: '700',
    borderWidth: 2,
    padding: 12,
    borderRadius: 6,
    borderColor: 'green',
  },
  icon: {
    color: colors.text,
  }
})

export default Button