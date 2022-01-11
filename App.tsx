
import 'react-native-gesture-handler'
import React, { createContext, useState } from 'react'
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import DrawerMenu from './navigation/DrawerMenu'

export const ThemeContext = createContext()

export default function App() {
  const [theme, setTheme] = useState('Light')
  const themeData = { theme, setTheme }

  const CustomDark = {
    dark: true,
    colors: {
      primary: 'rgb(72, 45, 109)',
      background: 'rgb(6, 9, 38)',
      card: 'rgb(18, 20, 68)',
      text: 'rgb(232, 232, 232)',
      border: 'rgb(199, 199, 204)',
      notification: 'rgb(72, 45, 109)',
    },
  }

  return (
    <ThemeContext.Provider value={themeData}>
      <NavigationContainer theme={theme == 'Light' ? DefaultTheme : DarkTheme}>
        <DrawerMenu />
      </NavigationContainer>
      <StatusBar style={theme === 'Light' ? 'dark' : 'light'} />
    </ThemeContext.Provider>
  );
}