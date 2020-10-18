import React from 'react';
import {Button, ScrollView, StyleSheet, Text, View} from 'react-native';
import {Header, Card, PricingCard} from 'react-native-elements';

const Dashboard = ({navigation}) => {
  return (
    <>
      <Header
        centerComponent={{
          text: 'Project Name',
          style: {color: '#fff', fontSize: 20, fontWeight: 'bold'},
        }}
      />
      <ScrollView>
        <Card>
          <Text style={{alignSelf: 'center'}}>Project Summary</Text>
          <View style={{flexDirection: 'row'}}>
            <Card>
              <Text>Expenses</Text>
              <Text>Null</Text>
            </Card>
            <Card>
              <Text>Budget</Text>
              <Text>Null</Text>
            </Card>
            <Card>
              <Text>Deadline</Text>
              <Text>Null</Text>
            </Card>
          </View>
        </Card>
        <PricingCard
          title="Add Requisitions"
          titleStyle={styles.tstyle}
          button={{title: 'GO TO'}}
          onButtonPress={() => {
            navigation.push('AddItem');
          }}
        />
        <View style={{flexDirection: 'row'}}>
          <PricingCard
            containerStyle={{flex: 1}}
            title="View Delivery"
            titleStyle={styles.tstyle}
            button={{title: 'GO TO'}}
            onButtonPress={() => {
              navigation.push('Delivery');
            }}
          />
          <PricingCard
            containerStyle={{flex: 1}}
            title="View Orders"
            titleStyle={styles.tstyle}
            button={{title: 'GO TO'}}
            onButtonPress={() => {
              navigation.push('Purchase');
            }}
          />
        </View>
        <PricingCard
          title="Manage Requisitions"
          titleStyle={styles.tstyle}
          button={{title: 'GO TO'}}
          onButtonPress={() => {
            navigation.push('Viewer');
          }}
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  tstyle: {
    fontSize: 30,
    marginBottom: 0,
  },
});

export default Dashboard;
