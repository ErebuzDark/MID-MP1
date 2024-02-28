import React, { useRef, useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, FlatList} from 'react-native';
import { Entypo } from '@expo/vector-icons';

import Item from './Item';
import AddTodo from './addTodo'

export default function List() {
  const myComponentRef = useRef(null);

  //ito ay aking mga list of TODO:
  const [todos, setTodos] = useState ([
    // {todoTitle: 'Mag Code 10:00 PM', key: '1'},
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key)
    })
  }

   const bagongKey = () => {
    const maxKey = Math.max(...todos.map(todo => parseInt(todo.key, 10)), 0);
    return (maxKey + 1).toString();
  };

  const addTodoHandler = (newTitle) => {
    const newTodo = { todoTitle: newTitle, key: bagongKey() };
    setTodos(prevTodos => [...prevTodos, newTodo]);
  };

  return (
    <View style={styles.container}>

      <AddTodo addTodoHandler={addTodoHandler}/>

      <FlatList 
        data={todos}
        renderItem={({ item }) => (
          <Item item={item} pressHandler={pressHandler}/>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
