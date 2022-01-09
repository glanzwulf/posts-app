
import 'react-native-gesture-handler'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { AppearanceProvider, useColorScheme } from 'react-native-appearance'
import { StatusBar } from 'expo-status-bar';
import DrawerMenu from './navigation/DrawerMenu'

const Stack = createStackNavigator();

export default function App() {
  const scheme = useColorScheme()

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
  };

  return (
    <AppearanceProvider>
      <NavigationContainer theme={scheme === 'dark' ? CustomDark : DefaultTheme}>
        <DrawerMenu />
      </NavigationContainer>
      <StatusBar style={scheme === 'dark' ? 'light' : 'dark'} />
    </AppearanceProvider>
  );
}