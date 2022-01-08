import React from 'react'
import { View, SafeAreaView, StyleSheet, TextInput, Button } from 'react-native'
import { Formik } from 'formik'
import * as Yup from 'yup'

export default function AddPost () {

  const initialValues = {
    title: '',
    body: '',
  }

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
            console.log(values)
            alert('Submitted')
            resetForm({values: initialValues})
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
                onPress={props.handleSubmit}
                title="Submit"
                color="#00cc00"
              />
            </View>
          )}
        </Formik>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
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