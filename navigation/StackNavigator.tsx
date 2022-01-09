
import 'react-native-gesture-handler'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Button } from 'react-native'
import HomeScreen from '../screens/HomeScreen'
import AddPost from '../screens/AddPost'
import ViewPost from '../screens/ViewPost'
import EditPost from '../screens/EditPost'

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen 
        name="Home"
        component={HomeScreen} 
        options={({ navigation }) => ({
          headerTitle: 'Posts App',
          headerRight: () => (
            <Button
              onPress={() => navigation.navigate('AddPost')}
              title="Add Post"
              color="#00cc00"
            />
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
              onPress={navigation.goBack}
              title="Back"
              color="#FF0000"
            />
          ),
        })}
      />
      <Stack.Screen 
        name="ViewPost"
        component={ViewPost} 
        options={({ navigation }) => ({
          headerTitle: 'View post',
          headerLeft: () => (
            <Button
              onPress={navigation.goBack}
              title="Back"
              color="#FF0000"
            />
          ),
        })}
      />
      <Stack.Screen 
        name="EditPost"
        component={EditPost} 
        options={({ navigation }) => ({
          headerTitle: 'View post',
          headerLeft: () => (
            <Button
              onPress={navigation.goBack}
              title="Back"
              color="#FF0000"
            />
          ),
        })}
      />
    </Stack.Navigator>
  );
}