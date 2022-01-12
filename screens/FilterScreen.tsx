import React, { useEffect, useState } from 'react'
import { Text, View, SafeAreaView, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import axios from 'axios'
import { useTheme } from '@react-navigation/native'

export default function FilterScreen({ navigation, route }) {
  const [postsData, setPostsData] = useState([])
  const { id } = route.params
  const { colors } = useTheme()
  const styles = makeStyles(colors)
  
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
      .then(response => setPostsData(response.data))
  }, [])

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
      />
    </SafeAreaView>
  )
}

const makeStyles = (colors: any) => StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: colors.primary,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 6,
  },
  title: {
    fontSize: 14,
    color: colors.text
  },
  user_id: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.text
  },
});