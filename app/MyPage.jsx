import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const MyPage = () => {
  const [name, setName] = useState('');

  const handleSubmit = () => {
    // Handle form submission here (e.g., send data to server, display message)
    Alert.alert(`Hello, ${name}!`);
    setName('');
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text>This is a page with some elements:</Text>
      <TextInput
        style={{ height: 40, borderWidth: 1, padding: 10 }}
        placeholder="Enter your name"
        onChangeText={setName}
        value={name}
      />
      <Button title="Submit" onPress={handleSubmit} />
      <Text style={{ marginTop: 20 }}>This is some additional text.</Text>
      <Button title="Another Button" onPress={() => Alert.alert('Button Pressed!')} />
    </View>
  );
};

export default MyPage;
