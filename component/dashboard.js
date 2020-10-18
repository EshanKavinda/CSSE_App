import React from 'react';
import {Button, ScrollView, StyleSheet, Text, View} from 'react-native';
import {Header, Card, PricingCard} from 'react-native-elements';

const Dashboard = ({navigation}) => {
  return (
    <>
      <Header
        centerComponent={{
          text: 'Build Bridge',
          style: {color: '#fff', fontSize: 20, fontWeight: 'bold'},
        }}
      />
      <ScrollView>
        <Card>
          <Text style={{alignSelf: 'center', fontWeight: 'bold'}}>
            Project Summary
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Card>
              <Text style={{fontSize: 12, fontWeight: 'bold'}}>Expenses</Text>
              <Text>20 Lak</Text>
            </Card>
            <Card>
              <Text style={{fontSize: 12, fontWeight: 'bold'}}>Budget</Text>
              <Text>100 Lak</Text>
            </Card>
            <Card>
              <Text style={{fontSize: 12, fontWeight: 'bold'}}>Deadline</Text>
              <Text>2021-06-10</Text>
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
