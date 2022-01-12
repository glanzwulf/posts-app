import 'react-native-gesture-handler'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { View } from 'react-native'
import HomeScreen from '../screens/HomeScreen'
import AddPost from '../screens/AddPost'
import ViewPost from '../screens/ViewPost'
import EditPost from '../screens/EditPost'
import FilterScreen from '../screens/FilterScreen'
import Button from '../components/Button'
import { ThemeContext } from '../App'

const Stack = createStackNavigator();

const StackNavigator = () => {
  const { setTheme, theme } = React.useContext(ThemeContext)

  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Homescreen"
        component={HomeScreen} 
        options={({ navigation }) => ({
          headerTitle: 'Posts App',
          headerRight: () => (
            <View style={{flexDirection:"row"}}>
              <Button
                type='darklight'
                onPress={() => setTheme(theme === 'Light' ? 'Dark' : 'Light')}
              />
              <Button
                type='add'
                onPress={() => navigation.navigate('AddPost')}
              />
            </View>
          ),
        })}
      />
      <Stack.Screen 
        name="AddPost"
        component={AddPost} 
        options={({ navigation }) => ({
          headerTitle: 'Add post',
          headerLeft: () => (
            <Button
              type='back' 
              onPress={navigation.goBack}
            />
          ),
        })}
      />
      <Stack.Screen 
        name="ViewPost"
        component={ViewPost} 
        options={() => ({
          headerTitle: 'Post',
        })}
      />
      <Stack.Screen 
        name="EditPost"
        component={EditPost} 
        options={({ navigation }) => ({
          headerTitle: 'Edit post',
          headerLeft: () => (
            <Button
              type='back' 
              onPress={navigation.goBack}
            />
          ),
        })}
      />
      <Stack.Screen 
        name="FilterScreen"
        component={FilterScreen} 
        options={({ navigation }) => ({
          headerTitle: 'Filtered list',
          headerLeft: () => (
            <Button
              type='back' 
              onPress={navigation.goBack}
            />
          ),
        })}
      />
    </Stack.Navigator>
  )
}

export { StackNavigator }