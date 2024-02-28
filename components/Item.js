import React, { useRef } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, FlatList} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Item({ item, pressHandler }) {
  const myComponentRef = useRef(null);

  const handlePressIn = () => {

    // para sa effect lang ng pag pindot
    myComponentRef.current.setNativeProps({
      style: {
        backgroundColor: generateColor(item.key),
      },
    });
  };

  const handlePressOut = () => {
    // pang reset
    myComponentRef.current.setNativeProps({
      style: {
        backgroundColor: 'transparent',
      },
    });
  };

  const generateColor = (key) => {
  const hue = (parseInt(key, 10) * 137) % 360;
  return `hsl(${hue}, 70%, 80%)`;
};

  return (
    <View style={[styles.listCon, { backgroundColor: generateColor(item.key) }]}>
      <Text style={styles.listTitle}>{item.todoTitle}</Text>
      <TouchableOpacity
        style={styles.deleteList}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        ref={myComponentRef}
        onPress={() => pressHandler(item.key)}
      >
        <MaterialCommunityIcons name="delete" size={24} color="red" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  listCon: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 24,
    paddingVertical: 15,
    margin: 8,
    marginBottom: 4,
    backgroundColor: 'white',
    borderRadius: 5,
    elevation: 5,
  },
  listTitle: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  deleteList: {
    padding: 8,
    backgroundColor: 'white',
    borderRadius: 60,
  },
});
