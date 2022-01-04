import React, { useEffect, useState } from 'react'
import { Text, View, SafeAreaView, FlatList, StyleSheet } from 'react-native'
import axios from 'axios'

export default function HomeScreen () {
  const [postsData, setPostsData] = useState([])

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => setPostsData(response.data));
  }, []);

  const Item = ({ title, id } : { title: string, id: number }) => (
    <View style={styles.item}>
      <Text style={styles.user_id}>user_id: {id}</Text>
      <Text style={styles.title}>title: {title}</Text>
    </View>
  )

  const renderItem = ({ item } : { item: any}) => (
    <Item title={item.title} id={item.id} />
  )

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={postsData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
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