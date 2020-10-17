import React, {useState} from 'react';
import {View, ImageBackground, Image, StyleSheet} from 'react-native';
import {Button, Input, Text} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';
import Dashboard from './dashboard';

const LogIn = () => {
  const [user, setUser] = useState({});
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const req = {
    email: userEmail,
    password: userPassword,
  };

  const login = () => {
    console.log('Button Clicked..............................................');
    axios
      .post('http://192.168.43.169:3001/login', req)
      .then((res) => {
        console.log(res.data.error);
        console.log('login method xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx');
        console.log(res.data);

        if (res.data.error == 'false') {
          return <Dashboard />;
        }
      })
      .catch((err) => {
        console.log(
          'qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
        );
        console.log(err);
      });
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={require('./unnamed.jpg')} style={styles.image}>
        <View style={{margin: 10, marginTop: 'auto', marginBottom: 'auto'}}>
          <Text h1 style={{textAlign: 'center'}}>
            Log In
          </Text>
          <Text h4>{userEmail}</Text>
          <Input
            placeholder="Username"
            leftIcon={{type: 'font-awesome', name: 'chevron-left'}}
            onChangeText={setUserEmail}
          />
          <Text h4>Password</Text>
          <Input
            placeholder="Password"
            leftIcon={<Icon name="user" size={24} color="black" />}
            onChangeText={setUserPassword}
            secureTextEntry={true}
          />
          <Button
            title="Log In"
            onPress={() => {
              login();
            }}
          />
        </View>
      </ImageBackground>
    </View>
  );
};
export default LogIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  text: {
    color: 'grey',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
