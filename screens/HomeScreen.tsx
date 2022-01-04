import React from 'react'
import { useTheme } from '@react-navigation/native'
import { Text, View } from 'react-native'

export default function HomeScreen () {
  const { colors } = useTheme()

  return (
    <View>
      <Text style={{ color: colors.text }}>This will be the home screen</Text>
      <Text style={{ color: colors.text }}>Here all the posts will appear</Text>
    </View>
  )
}