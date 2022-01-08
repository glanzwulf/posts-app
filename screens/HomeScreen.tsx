import React, { useEffect, useLayoutEffect, useState } from 'react'
import { Text, View, SafeAreaView, FlatList, StyleSheet, Button } from 'react-native'
import axios from 'axios'

export default function HomeScreen({ navigation }) {
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
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => setPostsData(response.data))
  }, [])

  const Item = ({ title, userId } : { title: string, userId: number }) => (
    <View style={styles.item}>
      <Text style={styles.user_id}>user_id: {userId}</Text>
      <Text style={styles.title}>title: {title}</Text>
    </View>
  )

  const renderItem = ({ item } : { item: any}) => {
    return <Item title={item.title} userId={item.userId} />
  }

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