import React from 'react'
import { View, SafeAreaView, StyleSheet, TextInput } from 'react-native'
import { Formik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import Button from '../components/Button'
import { useTheme } from '@react-navigation/native'

export default function AddPost({ navigation }) {
  const initialValues = {
    title: '',
    body: '',
  }
  const { colors } = useTheme()
  const styles = makeStyles(colors)

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Formik
          initialValues={initialValues}
          validationSchema={Yup.object({
            title: Yup.string()              
              .required('Required'),
            body: Yup.string()
              .required('Required'),
          })}
          onSubmit ={(values, {resetForm}) =>{
            axios.post(`https://jsonplaceholder.typicode.com/posts`, { title: values.title, body: values.body, userId: 0 })
            resetForm({values: initialValues})
            navigation.navigate('Homescreen')
            alert('Submitted')
          }}
          >
          {props => (
            <View>
              <TextInput
                onChangeText={props.handleChange('title')}
                onBlur={props.handleBlur('title')}
                value={props.values.title}
                autoFocus
                placeholder="Title"
                style={styles.input}
              />
              <TextInput
                onChangeText={props.handleChange('body')}
                onBlur={props.handleBlur('body')}
                value={props.values.body}
                placeholder="Your message"
                style={styles.bodyInput}
              />
              <Button
                type='submit'
                onPress={props.handleSubmit}
              />
            </View>
          )}
        </Formik>
      </View>
    </SafeAreaView>
  )
}

const makeStyles = (colors: any) => StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
  },
  title: {
    margin: 24,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  error: {
    margin: 8,
    fontSize: 14,
    color: 'red',
    fontWeight: 'bold',
  },
  input: {
    height: 50,
    paddingHorizontal: 8,
    width: '100%',
    borderColor: '#ddd',
    borderWidth: 1,
    backgroundColor: '#fff',
    marginBottom: 5,
  },
  bodyInput: {
    height: 150,
    paddingHorizontal: 8,
    width: '100%',
    borderColor: '#ddd',
    borderWidth: 1,
    backgroundColor: '#fff',
    marginBottom: 5,
  },
})