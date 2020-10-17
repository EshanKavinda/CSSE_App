import React from 'react';
import {View} from 'react-native';
import {Button, Input, Text, Icon} from 'react-native-elements';

const LogIn = () => {
  return (
    <View style={{margin: 10, marginTop: 'auto', marginBottom: 'auto'}}>
      <Text h1 style={{textAlign: 'center'}}>
        Log In
      </Text>
      <Text h4>Username</Text>
      <Input
        placeholder="Username"
        leftIcon={{type: 'font-awesome', name: 'chevron-left'}}
      />
      <Text h4>Password</Text>
      <Input
        placeholder="Password"
        leftIcon={<Icon name="user" size={24} color="black" />}
      />
      <Button title="Log In" />
    </View>
  );
};
export default LogIn;
