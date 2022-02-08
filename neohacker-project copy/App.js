import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, SafeAreaView, Alert } from 'react-native';

const NeoHacker = () => {
  const [text, setText] = useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.title}>NeoHacker</Text>
      <Text style={styles.mainText}>Please type a url to start the vulnerability test.</Text>

      <TextInput
        placeholder="URL..."
        onChangeText={newText => setText(newText)}
        defaultValue={text}
      />
      <Button title="Submit" color="blue" onPress={Submitted}/>
    </View>
  );
}

function Submitted() {
  Alert.alert("Sent to NeoHacker HQ!")
  const url = '' + TextInput.value;
  const useless = fetch(url);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    position: 'relative',
    bottom: 200,
    fontSize: 35,
  },
  mainText: {
    width: '65%',
    textAlign: 'center',
  }
});

export default NeoHacker;