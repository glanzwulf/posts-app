import 'react-native-gesture-handler'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { View } from 'react-native'
import HomeScreen from '../screens/HomeScreen'
import AddPost from '../screens/AddPost'
import ViewPost from '../screens/ViewPost'
import EditPost from '../screens/EditPost'
import BackButton from '../components/BackButton'
import AddButton from '../components/AddButton'
import DarkMode from '../components/DarkMode'

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
              <DarkMode 
                onPress={() => alert('change to dark mode')}
              />
              <AddButton
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
            <BackButton 
              onPress={navigation.goBack}
            />
          ),
          headerRight: () => (
            <DarkMode 
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
            <BackButton 
              onPress={navigation.goBack}
            />
          ),
          headerRight: () => (
            <DarkMode 
              onPress={() => alert('change to dark mode')}
            />
          ),
        })}
      />
      <Stack.Screen 
        name="EditPost"
        component={EditPost} 
        options={({ navigation }) => ({
          headerTitle: 'Edit post',
          headerLeft: () => (
            <BackButton 
              onPress={navigation.goBack}
            />
          ),
          headerRight: () => (
            <DarkMode 
              onPress={() => alert('change to dark mode')}
            />
          ),
        })}
      />
    </Stack.Navigator>
  );
}

export { StackNavigator }