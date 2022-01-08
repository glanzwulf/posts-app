import React, { useEffect, useLayoutEffect, useState } from 'react'
import { Text, View, SafeAreaView, FlatList, StyleSheet, Button } from 'react-native'
import axios from 'axios'

export default function ViewPost({ navigation, route }) {
  const [postsData, setPostsData] = useState([])
  const { id } = route.params;

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => setPostsData(response.data))
  }, [])
  
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

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.item}>
        <Text style={styles.user_id}>user_id: {postsData.userId}</Text>
        <Text style={styles.titleHeader}>title: </Text>
        <Text style={styles.title}>{postsData.title}</Text>
        <Text style={styles.bodyHeader}>body: </Text>
        <Text style={styles.body}>{postsData.body}</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  titleHeader: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 3,
  },
  bodyHeader: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 3,
  },
  title: {
    fontSize: 14,
  },
  body: {
    fontSize: 14,
  },
  user_id: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 3,
  },
});