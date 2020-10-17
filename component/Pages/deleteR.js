import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';

const Details = () => {
  return (
    <ScrollView style={styles.margin}>
      <View style={styles.row}>
        <Text style={styles.texts}>Item Name</Text>
        <View style={{flex: 1}} />
        <Text>Null</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.texts}>Unit Price</Text>
        <View style={{flex: 1}} />
        <Text>Null</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.texts}>Quantity</Text>
        <View style={{flex: 1}} />
        <Text>Null</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.texts}>Description</Text>
        <View style={{flex: 1}} />
        <Text>Null</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.texts}>Date</Text>
        <View style={{flex: 1}} />
        <Text>Null</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.texts}>Location</Text>
        <View style={{flex: 1}} />
        <Text>Null</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.texts}>Status</Text>
        <View style={{flex: 1}} />
        <Text>Null</Text>
      </View>
      <Button title="Delete" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginBottom: 40,
  },
  margin: {
    margin: 10,
  },
  texts: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default Details;
