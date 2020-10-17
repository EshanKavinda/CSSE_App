const users = [
  {
    name: 'brynn',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
  },
  {
    name: 'Karal',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
  },
  {
    name: 'Dash',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
  },
  {
    name: 'Saman',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
  },
  {
    name: 'Daham',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
  },
  {
    name: 'Delum',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
  },
  {
    name: 'band',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
  },
  {
    name: 'dd',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
  },
  {
    name: 'ss',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
  },
];

import React, {Component} from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import {Card, ListItem, Button, Icon} from 'react-native-elements';

const Viewer = () => {
  return (
    <View>
      <ScrollView style={styles.margin}>
        <Card containerStyle={{padding: 0}}>
          {users.map((u, i) => {
            return (
              <Card>
                <ListItem
                  key={i}
                  title={u.name}
                  titleStyle={styles.tStyle}
                  rightElement={<Text>Null</Text>}
                />
              </Card>
            );
          })}
        </Card>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  tStyle: {
    fontWeight: 'bold',
  },
  margin: {
    margin: 10,
  },
});

export default Viewer;
