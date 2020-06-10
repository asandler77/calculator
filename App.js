import React, {useState} from 'react';
import {StyleSheet, View, Text, Button, TextInput} from 'react-native';
import MyInput from './components/MyInput';

export default function App() {
  const [value, setValue] = useState(0);
  let sum: number = 0;

  const submitHandler = itemval => {
    console.log(sum + ' sum');
    console.log(itemval + ' item');
    sum = sum + +itemval;
    return sum;
  };

  function setNumber() {
    console.log('setNumber ' + sum);
    console.log('setNumber ' + value);
    return setValue(sum);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.content}>Calculator</Text>
      <MyInput submitHandler={submitHandler} />
      <Text style={styles.content}>+</Text>
      <MyInput submitHandler={submitHandler} />

      <Button style={styles.button} onPress={() => setNumber()} title="=" />
      <Text style={styles.content}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    margin: 20,
    fontSize: 40,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {height: 40, borderColor: 'gray', borderWidth: 1},
  button: {
    height: 40,
    width: 70,
    margin: 20,
    backgroundColor: '#ddd',
  },
});
