import React, { useEffect, useState } from 'react'
import { Text, View, SafeAreaView, FlatList, StyleSheet, Button } from 'react-native'
import axios from 'axios'

export default function HomeScreen () {
  const [postsData, setPostsData] = useState([])
  const [filterNumber, setFilterNumber] = useState('0')
  const [showAll, setShowAll] = useState(true)

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
    if (showAll) {
      return <Item title={item.title} userId={item.userId} />
    } else {
      if (item.userId === filterNumber) {
        return <Item title={item.title} userId={item.userId} />
      }
    } 
  }

  function filterOut(arg: number){
    setShowAll(false);
    setFilterNumber(arg);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Button
        onPress={() => 
          setShowAll(true)
        }
        title="Clear Filter"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
      <Button
        onPress={() => filterOut(2)}
        title="Filter only by user #2"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
      <Button
        onPress={() => filterOut(5)}
        title="Filter only by user #5"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
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