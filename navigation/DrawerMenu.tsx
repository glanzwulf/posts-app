import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { StackNavigator } from './StackNavigator'
import BurgerScreen from '../screens/BurgerScreen'

const Drawer = createDrawerNavigator()

export default function DrawerMenu() {
  
  return (
    <Drawer.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }} drawerContent={(props) => <BurgerScreen {...props} />}>
      <Drawer.Screen name="Home" component={StackNavigator}/>
    </Drawer.Navigator>
  )
}