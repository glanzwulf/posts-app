import React, { useEffect, useState } from 'react'
import { View, SafeAreaView, StyleSheet, TextInput, Text, Alert } from 'react-native'
import { Formik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import Button from '../components/Button'

export default function EditPost({ navigation, route }) {
  const [postsData, setPostsData] = useState([])
  const { id } = route.params

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => setPostsData(response.data))
  }, [])

  const initialValues = {
    title: postsData.title,
    body: postsData.body,
    id: postsData.id,
  }

  const editPost = (values: { title: string; body: string; id?: number }) => {
    return Alert.alert(
      "Edit Post?",
      "You will be submitting changes to this post. This action is irreversible",
      [
        {
          text: "Yes",
          onPress: () => {
            axios.put(`https://jsonplaceholder.typicode.com/posts/${values.id}`, { title: values.title, body: values.body, userId: 0 })
            alert('Edited')
            navigation.navigate('ViewPost', {id: id})
          },
        },
        {
          text: "No",
        },
      ]
    );
  };

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
          onSubmit ={(values) =>{
            editPost(values)
          }}
          >
          {props => (
            <View>
              <Text style={styles.header}>Title:</Text>
              <TextInput
                onChangeText={props.handleChange('title')}
                onBlur={props.handleBlur('title')}
                value={props.values.title}
                autoFocus
                placeholder="Title"
                multiline={true}
                style={styles.input}
              />
              <Text style={styles.header}>Body:</Text>
              <TextInput
                onChangeText={props.handleChange('body')}
                onBlur={props.handleBlur('body')}
                value={props.values.body}
                placeholder="Your message"
                multiline={true}
                style={styles.bodyInput}
              />
              <Button 
                type='save'
                onPress={props.handleSubmit}
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
  header:{
    paddingVertical: 8,
    fontSize: 15,
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
    maxHeight: 150,
    padding: 8,
    width: '100%',
    borderColor: '#ddd',
    borderWidth: 1,
    backgroundColor: '#fff',
    marginBottom: 5,
  },
  bodyInput: {
    height: 150,
    padding: 8,
    width: '100%',
    borderColor: '#ddd',
    borderWidth: 1,
    backgroundColor: '#fff',
    marginBottom: 5,
  },
})