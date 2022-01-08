
import 'react-native-gesture-handler'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { AppearanceProvider, useColorScheme } from 'react-native-appearance'
import { StatusBar } from 'expo-status-bar';
import { Button } from 'react-native'
import HomeScreen from './screens/HomeScreen'
import AddPost from './screens/AddPost'
import ViewPost from './screens/ViewPost'

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
              headerRight: () => (
                <Button
                  onPress={() => alert('This will Submit')}
                  title="Submit"
                  color="#00cc00"
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
              headerRight: () => (
                <Button
                  onPress={() => alert('This will Eit')}
                  title="Edit"
                  color="#00cc00"
                />
              ),
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style={scheme === 'dark' ? 'light' : 'dark'} />
    </AppearanceProvider>
  );
}