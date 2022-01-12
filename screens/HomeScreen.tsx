import React, { useEffect, useLayoutEffect, useState } from 'react'
import { Text, View, SafeAreaView, FlatList, StyleSheet, TouchableOpacity, RefreshControl, Modal, Pressable } from 'react-native'
import axios from 'axios'
import Button from '../components/Button'
import { useTheme } from '@react-navigation/native'

export default function HomeScreen({ navigation }) {
  const [refreshing, setRefreshing] = useState(false)
  const [postsData, setPostsData] = useState([])
  const [modalVisible, setModalVisible] = useState(false)
  const [userData, setUserData] = useState([])
  const { colors } = useTheme()
  const styles = makeStyles(colors)

  useEffect(() => {
    loadPostData(), loadUserData()
  }, [])

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Button
          type='filter' 
          onPress={() => setModalVisible(true)}
        />
      ),
    });
  }, [navigation])

  const loadPostData = () => {
    axios.get(`https://jsonplaceholder.typicode.com/posts`)
    .then((response) => {
      setPostsData(response.data), 
      setRefreshing(false)
    })
  }

  const loadUserData = () => {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
      setUserData(response.data)
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

  const filterStuff = (id: number) => {
    setModalVisible(!modalVisible)
    navigation.navigate('FilterScreen', {id: id})
  }

  return (
    <SafeAreaView style={styles.container}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible)
        }}>
          <TouchableOpacity style={styles.centeredView} onPress={() => setModalVisible(!modalVisible)}>
            <TouchableOpacity style={styles.modalView} activeOpacity={1}>
              <SafeAreaView style={styles.modalInterior}>
                {userData.map((user) => (
                  <Pressable key={user.id}
                    style={[styles.button]}
                    onPress={() => filterStuff(user.id)}>
                    <Text style={styles.textStyle}>User id: {user.id}</Text>
                  </Pressable>
                ))}
              </SafeAreaView>
            </TouchableOpacity>
          </TouchableOpacity>
      </Modal>
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
  centeredView: {
    height: '100%',
  },
  modalView: {
    flexDirection: 'column',
    backgroundColor: colors.card,
    borderRadius: 20,
    alignSelf: 'flex-start',
    marginLeft: 10,
    marginTop: 90,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    maxWidth: 120,
    maxHeight: 500,
  },
  modalInterior: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  button: {
    borderRadius: 6,
    padding: 10,
    elevation: 2,
    margin: 4,
    backgroundColor: colors.primary,
  },
  textStyle: {
    color: colors.text,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});