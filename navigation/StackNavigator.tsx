import 'react-native-gesture-handler'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { View } from 'react-native'
import HomeScreen from '../screens/HomeScreen'
import AddPost from '../screens/AddPost'
import ViewPost from '../screens/ViewPost'
import EditPost from '../screens/EditPost'
import Button from '../components/Button'

const Stack = createStackNavigator();

const StackNavigator = () => {
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
                onPress={() => alert('change to dark mode')}
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
          headerRight: () => (
            <Button 
              type='darklight'
              onPress={() => alert('change to dark mode')}
            />
          ),
        })}
      />
      <Stack.Screen 
        name="ViewPost"
        component={ViewPost} 
        options={({ navigation }) => ({
          headerTitle: 'Post',
          headerLeft: () => (
            <Button
              type='back' 
              onPress={navigation.goBack}
            />
          ),
          headerRight: () => (
            <View style={{flexDirection:"row"}}>
              <Button
                type='darklight'
                onPress={() => alert('change to dark mode')}
              />
              <Button 
              type='edit'
              onPress={() => navigation.navigate('EditPost', {id: id})}
            />
            </View>
          ),
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
          headerRight: () => (
            <Button 
              type='darklight'
              onPress={() => alert('change to dark mode')}
            />
          ),
        })}
      />
    </Stack.Navigator>
  )
}

export { StackNavigator }