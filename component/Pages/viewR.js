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
];

import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Card, ListItem, Button, Icon} from 'react-native-elements';

const Viewer = () => {
  return (
    <View>
      <Card containerStyle={{padding: 0}}>
        {users.map((u, i) => {
          return (
            <Card>
              <ListItem
                key={i}
                roundAvatar
                title={u.name}
                leftAvatar={{source: {uri: u.avatar}}}
              />
            </Card>
          );
        })}
      </Card>
    </View>
  );
};

export default Viewer;
