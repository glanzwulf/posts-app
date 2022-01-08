import React, { useEffect, useLayoutEffect, useState  } from 'react'
import { View, SafeAreaView, StyleSheet, TextInput, Button } from 'react-native'
import { Formik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'

export default function EditPost({ navigation, route }) {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          onPress={() => alert('This will edit')}
          title="Edit Post"
          color="#00cc00"
        />
      )
    });
  }, [navigation])
  
  const [postsData, setPostsData] = useState([])
  const { id } = route.params

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => setPostsData(response.data))
  }, [])

  const initialValues = {
    title: postsData.title,
    body: postsData.body,
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Formik
          enableReinitialize={true} 
          initialValues={initialValues}
          validationSchema={Yup.object({
            title: Yup.string()              
              .required('Required'),
            body: Yup.string()
              .required('Required'),
          })}
          onSubmit ={(values, {resetForm}) =>{
            axios.put(`https://jsonplaceholder.typicode.com/posts/${values.id}`, { title: values.title, body: values.body, userId: 0 })
            alert('Edited')
            navigation.navigate('ViewPost', {id: id})
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