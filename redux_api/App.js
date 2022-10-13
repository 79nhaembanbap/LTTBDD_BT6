/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  FlatList,
  TextInput,
  StyleSheet,
  Button,
  Linking,
} from 'react-native';

const App = () => {
  const [data, setData] = useState([]);
  useEffect(()=> {
    getApi()
  },[]);

   const getApi = () => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://79nhaembanbap.github.io/todolist.json", requestOptions)
      .then(response => response.json())
      .then(result => setData(result.subjects))
      .catch(error => console.log('error', error));
  };

  const Item = ({subject, id}) => (
    <View >
      <View >
        <Text>{subject}</Text>
      </View>
      <Button title="Chat" color={'red'} width={15} />
    </View>
  );

  const renderItem = ({item}) => <Item id={item.id} subject={item.subject} />;
  return (
    <View style={styles.container}>
      <View>
        <Text>To Do List</Text>
      </View> 
      <View style={styles.header}>
        <TextInput placeholder="Thêm môn học" />
        <Button title="Thêm" color={'blue'} width={15} />
      </View>
      <View>
        <FlatList
          data={data}
          renderItem={(renderItem)}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  header: {
    backgroundColor: 'grey',

    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  item: {
    flex: 1,

    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
  },
  subitem: {
    flex: 2,
    flexDirection: 'column',
  },
  btn: {
    width: 10,
    backgroundColor: 'oldlace',
  },
  img: {
    width: 50,
    height: 50,
  },
});
export default App;
