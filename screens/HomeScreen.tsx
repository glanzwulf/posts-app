import React, { useEffect, useLayoutEffect, useState } from 'react'
import { Text, View, SafeAreaView, FlatList, StyleSheet, TouchableOpacity, RefreshControl, Modal, Alert, Pressable } from 'react-native'
import axios from 'axios'
import Button from '../components/Button'

export default function HomeScreen({ navigation }) {
  const [refreshing, setRefreshing] = useState(false)
  const [postsData, setPostsData] = useState([])
  const [filterData, setFilterData] = useState('')
  const [modalVisible, setModalVisible] = useState(false)
  const [userData, setUserData] = useState([])

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
    axios.get(`https://jsonplaceholder.typicode.com/posts${filterData}`)
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
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalHeader}>Select a user to filter posts</Text>
            </View>
            <View style={styles.modalInterior}>
              {userData.map((user) => (
                <Pressable key={user.id}
                  style={[styles.button]}
                  onPress={() => filterStuff(user.id)}>
                  <Text style={styles.textStyle}>User id: {user.id}</Text>
                </Pressable>
              ))}
            </View>
          </View>
        </View>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 6,
  },
  title: {
    fontSize: 14,
  },
  user_id: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
    borderRadius: 20,
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    maxHeight: 300,
    maxWidth: 320,
  },
  modalHeader: {
    marginTop: 10,
    marginBottom: 0,
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
    backgroundColor: '#F194FF',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});