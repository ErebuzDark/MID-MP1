import React, {useState} from 'react';
import { Text, View, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Card } from 'react-native-paper';

// or any files within the Snack
import List from './components/List';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const bgColor = isDarkMode ? '#212422' : 'white';
  const textColor = isDarkMode ? 'white' : 'black';
  const baseBGColor = isDarkMode ? '#343b36' : '#ecf0f1';

  return (
    <SafeAreaView style={[styles.container, {backgroundColor: baseBGColor}]}>

      <View style={[styles.topBar, {backgroundColor: bgColor}]}>
        <Text style={[styles.topbarTitle, {color: textColor}]}>To Do List</Text>
        <TouchableOpacity onPress ={toggleDarkMode}>
          <FontAwesome name="moon-o" size={24} color={textColor} />
        </TouchableOpacity>
      </View>
      
      <View style={{flex: 9}}>
        <List />
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  topBar: {
    flex: 1, 
    height: 70,
    marginTop: 50,
    marginBottom: 10,
    padding: 8,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  topbarTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'monospace',
  },
});
