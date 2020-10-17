import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';

const AccePur = () => {
  return (
    <View>
      <ScrollView style={styles.main}>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.top}>Purchase ID : </Text>
          <Text style={styles.other}>Null</Text>
          <View style={{flex: 1}} />
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.top}>Type : </Text>
            <Text style={styles.other}>Null</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.next}>Supplier Name : </Text>
          <Text style={styles.other}>Null</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.next}>Site Manager : </Text>
          <Text style={styles.other}>Null</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.next}>Item Name : </Text>
          <Text style={styles.other}>Null</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.next}>Quantity : </Text>
          <Text style={styles.other}>Null</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.next}>Unit Price : </Text>
          <Text style={styles.other}>Null</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.next}>Total Price : </Text>
          <Text style={styles.other}>Null</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.next}>Due Date : </Text>
          <Text style={styles.other}>Null</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Button title="Reject" containerStyle={{margin: 10, flex: 1}} />

          <Button title="Accept" containerStyle={{margin: 10, flex: 1}} />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    margin: 10,
  },
  top: {
    fontWeight: 'bold',
    marginBottom: 25,
    fontSize: 18,
  },
  next: {
    fontWeight: 'bold',
    marginBottom: 10,
    fontSize: 16,
  },
  other: {
    fontSize: 15,
  },
});

export default AccePur;
