import React, {useState} from 'react';
import {TextInput, View, Button} from 'react-native';

export default function MyInput({submitHandler}) {
  const [numValue, setNumValue] = useState(0);
  const submitTheNumber1 = text => {
    setNumValue(text);
    console.log(text);
    submitHandler(text);
  };

  return (
    <View>
      <TextInput
        style={{height: 50, width: 70, borderColor: 'gray', borderWidth: 1}}
        keyboardType="numeric"
        onChangeText={submitTheNumber1}
      />
    </View>
  );
}
