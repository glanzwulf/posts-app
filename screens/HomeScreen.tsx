import React, { useEffect, useLayoutEffect, useState } from 'react'
import { Text, View, SafeAreaView, FlatList, StyleSheet, Button, TouchableOpacity, RefreshControl } from 'react-native'
import axios from 'axios'

export default function HomeScreen({ navigation }) {
  const [refreshing, setRefreshing] = useState(false)
  const [postsData, setPostsData] = useState([])

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          onPress={() => navigation.navigate('AddPost')}
          title="Add Post"
          color="#00cc00"
        />
      )
    });
  }, [navigation])

  useEffect(() => {
    loadPostData()
  }, [])

  const loadPostData = () => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((response) => {
      setPostsData(response.data), 
      setRefreshing(false)
    })
  }

  const Item = ({ title, userId } : { title: string, userId: number }) => (
    <View style={styles.item}>
      <Text style={styles.user_id}>user_id: {userId}</Text>
      <Text style={styles.title}>title: {title}</Text>
    </View>
  )

  const renderItem = ({ item } : { item: any}) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate('ViewPost', {id: item.id})}>
        <Item title={item.title} userId={item.userId} />
      </TouchableOpacity>)
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={postsData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={loadPostData} />
        }
      />
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
  title: {
    fontSize: 14,
  },
  user_id: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});