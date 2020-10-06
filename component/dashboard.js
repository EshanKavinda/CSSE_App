import React from 'react';
import {Button, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Header, Card} from 'react-native-elements';

const Dashboard = () => {
  return (
    <>
      <Header
        centerComponent={{
          text: 'Project Name',
          style: {color: '#fff', fontSize: 20, fontWeight: 'bold'},
        }}
      />

      <Card>
        <Button title="Add Requisitions" />
      </Card>
      <Card>
        <Button title="Manage Requisitions" />
      </Card>
      <Card>
        <Button title="View Orders" />
      </Card>
    </>
  );
};

export default Dashboard;
