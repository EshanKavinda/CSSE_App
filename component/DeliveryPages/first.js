//Delivery first list View

import React, {useState, useEffect} from 'react';
import {ScrollView, View, StyleSheet, Text} from 'react-native';
import {Card, ListItem, Button} from 'react-native-elements';
import Dialog, {DialogContent, DialogTitle} from 'react-native-popup-dialog';
import Axios from 'axios';

const FirstD = () => {
  const [visible, setVisible] = useState(false);
  const [deliverData, setDeliverData] = useState([]);
  const [OneDeliverData, setOneDeliverData] = useState([]);

  const getDeliverData = () => {
    Axios.get('http://192.168.43.169:3001/delivery/getDeliveries')
      .then((res) => {
        console.log(res.data);
        setDeliverData(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getDeliverData();
  }, []);

  return (
    <View>
      <ScrollView style={styles.margin}>
        <Card containerStyle={{padding: 0}}>
          {deliverData.map((d, i) => {
            return (
              <Card>
                <ListItem
                  key={i}
                  title={d.supplier}
                  titleStyle={styles.tStyle}
                  rightElement={<Text>{d.approved_date}</Text>}
                  leftElement={<Text>{d.invoice_id}</Text>}
                  onPress={() => {
                    setOneDeliverData(d), setVisible(true);
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
          <DialogTitle title="Delivery Notices"></DialogTitle>
          <DialogContent>
            <ScrollView style={styles.main}>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.top}>Invoice ID : </Text>
                <Text style={styles.other}>{OneDeliverData.invoice_id}</Text>
                <View style={{flex: 1}} />
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.top}>Type : </Text>
                  <Text style={styles.other}>{OneDeliverData.type}</Text>
                </View>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.next}>Supplier Name : </Text>
                <Text style={styles.other}>{OneDeliverData.supplier}</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.next}>Store Location : </Text>
                <Text style={styles.other}>
                  {OneDeliverData.store_location}
                </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.next}>Item Name : </Text>
                <Text style={styles.other}>{OneDeliverData.item_name}</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.next}>Quantity : </Text>
                <Text style={styles.other}>{OneDeliverData.quantity}</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.next}>Unit Price : </Text>
                <Text style={styles.other}>{OneDeliverData.unit_price}</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.next}>Total Price : </Text>
                <Text style={styles.other}>{OneDeliverData.total_price}</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.next}>Due Date : </Text>
                <Text style={styles.other}>{OneDeliverData.due_date}</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.next}>Approved Date : </Text>
                <Text style={styles.other}>{OneDeliverData.approved_date}</Text>
              </View>
              <Button
                title="Back To Dashboard"
                containerStyle={{margin: 10, flex: 1}}
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

export default FirstD;
