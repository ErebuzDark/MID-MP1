import React, { useState  } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

export default function AddTodo({ addTodoHandler }) {
  const [addTodo, setAddTodo] = useState('');
  const changeInputHandler = (val) => {
    setAddTodo(val);
  };

  const [display, setDisplay] = useState (false);
  const [addButton, setAddButton] = useState (true);
  const pressShowHandler = () => {
    setDisplay(true);
    setAddButton(false);
  };

  const revertUseStates = () => {
    setDisplay(false);
    setAddButton(true);
  };

  const handleAddTodo = () => {
    addTodoHandler(addTodo);

    setAddTodo('');
    revertUseStates();
  };
  
  return (

    <View>
      {addButton == true && 
        <View style={styles.addlistButtonContainer}>
          <TouchableOpacity style={styles.addListButton} onPress={pressShowHandler}>
            <Entypo name="add-to-list" size={24} color="white" />
          </TouchableOpacity>
        </View>
      }

      {display == true && 
        <View style={styles.inputContainer}>
          <TextInput 
            style={styles.input}
            placeholder='Add new TODO...'
            onChangeText={changeInputHandler}
            maxLength={30}
          />

          <View style={styles.buttonContainers}>
            <TouchableOpacity style={styles.add} onPress={handleAddTodo}>
              <Text style={styles.buttonTitles}>Add</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.cancel} onPress={revertUseStates}>
              <Text style={styles.buttonTitles}>Cancel</Text>
            </TouchableOpacity>
          </View>
         
        </View>
      }

    </View>
    
  );
}

const styles = StyleSheet.create({
  addlistButtonContainer: {
    alignItems: 'flex-end',
    marginBottom: 10,
  },
  addListButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#36854b',
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  inputContainer: {
    backgroundColor: 'white',
    marginBottom: 10,
    padding: 20,
    borderRadius: 8,
    margin: 8,
  },
  input: {
    padding: 6,
    marginHorizontal: 16,
    marginBottom: 5,
    borderWidth: 1, 
    borderColor: 'lightgray',
    borderRadius: 4,
  },
  buttonTitles: {
    color: 'white',
  },
  add: {
    backgroundColor: '#69d184',
    width: 65,
    padding: 8,
    marginHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  cancel: {
    backgroundColor: '#85152a',
    width: 65,
    padding: 8,
    marginHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  buttonContainers: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
