//Pending requestion delete

import React, {Component, useState, useEffect} from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import {Card, ListItem, Button} from 'react-native-elements';
import Dialog, {DialogContent, DialogTitle} from 'react-native-popup-dialog';
import axios from 'axios';

const Viewer = () => {
  const [visible, setVisible] = useState(false);
  const [requisitionData, setRequisitionData] = useState([]);
  const [oneRequisitionData, setOneRequisitionData] = useState([]);

  const req = {
    rid: oneRequisitionData.requistion_id,
  };

  const deleteRequ = () => {
    axios
      .post('http://192.168.43.169:3001/requisition/delete', req)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getRequisitionData = () => {
    axios
      .get('http://192.168.43.169:3001/requisition/getpendingrequitions')
      .then((res) => {
        console.log(res.data);
        setRequisitionData(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getRequisitionData();
  }, []);

  return (
    <View style={styles.margin}>
      <ScrollView style={styles.margin}>
        <Card containerStyle={{padding: 0}}>
          {requisitionData.map((r, i) => {
            return (
              <Card>
                <ListItem
                  key={i}
                  title={r.item_name}
                  titleStyle={styles.tStyle}
                  rightElement={<Text>{r.due_date}</Text>}
                  subtitle={r.store_location}
                  onPress={() => {
                    setOneRequisitionData(r), setVisible(true);
                  }}
                />
              </Card>
            );
          })}
        </Card>
      </ScrollView>
      <View>
        <Dialog
          width={300}
          visible={visible}
          onTouchOutside={() => {
            setVisible(false);
          }}>
          <DialogTitle title="Delete Pending Requisision"></DialogTitle>
          <DialogContent>
            <ScrollView style={styles.margin}>
              <View style={styles.row}>
                <Text style={styles.texts}>Requestion ID</Text>
                <View style={{flex: 1}} />
                <Text>{oneRequisitionData.requistion_id}</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.texts}>Item Name</Text>
                <View style={{flex: 1}} />
                <Text>{oneRequisitionData.item_name}</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.texts}>Unit Price</Text>
                <View style={{flex: 1}} />
                <Text>{oneRequisitionData.unit_price}</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.texts}>Quantity</Text>
                <View style={{flex: 1}} />
                <Text>{oneRequisitionData.quantity}</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.texts}>Type</Text>
                <View style={{flex: 1}} />
                <Text>{oneRequisitionData.type}</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.texts}>Date</Text>
                <View style={{flex: 1}} />
                <Text>{oneRequisitionData.due_date}</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.texts}>Location</Text>
                <View style={{flex: 1}} />
                <Text>{oneRequisitionData.store_location}</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.texts}>Status</Text>
                <View style={{flex: 1}} />
                <Text>{oneRequisitionData.status}</Text>
              </View>
              <Button
                title="Delete"
                onPress={() => {
                  deleteRequ(), setVisible(false);
                }}
              />
            </ScrollView>
          </DialogContent>
        </Dialog>
      </View>
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
  row: {
    flexDirection: 'row',
    marginBottom: 40,
  },
  texts: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default Viewer;
