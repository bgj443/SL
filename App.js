import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';

export default function App() {
  const [text, setText] = useState('');
  const [data, setData] = useState([]);

  const Add = () => {
    setData([...data, { key: text }]);
    setText('');
  }
  const Remove = () => {
    setData ([]);
    setText('');
  }

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} onChangeText={text => setText(text)} value={text} />

      <View style={styles.button}>
      <Button onPress={Add} title="Add" color="green" />
      <Button onPress={Remove} title="Clear" color="red" />
      </View>

      <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Shopping List</Text>

      <FlatList  style={styles.list} 
        data={data}
        renderItem={({ item }) =>
          <Text>{item.key}</Text>}
          keyExtractor={(item, index) => index.toString()}
           />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  input: {
    marginTop: 50,
    marginBottom: 5,
    width: 200,
    borderColor: 'black',
    borderWidth: 2 
  },
  button: {
    alignItems: 'center',
    flexDirection: "row",
  },
});