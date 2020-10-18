//List of purchece order

import Axios from 'axios';
import React, {useEffect, useState} from 'react';
import {ScrollView, View, StyleSheet, Text} from 'react-native';
import {Card, ListItem, Button} from 'react-native-elements';
import Dialog, {DialogContent, DialogTitle} from 'react-native-popup-dialog';

const FView = (navigation) => {
  const [visible, setVisible] = useState(false);
  const [purchseData, setPercheseData] = useState([]);
  const [onePurchseData, setOnePercheseData] = useState([]);

  const req = {
    rid: onePurchseData.requistion_id,
  };
  const acceptPurchase = () => {
    Axios.post('http://192.168.43.169:3001/purchase/updateA', req)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const RejectPurchase = () => {
    Axios.post('http://192.168.43.169:3001/purchase/updateR', req)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getPercheseData = () => {
    Axios.get('http://192.168.43.169:3001/purchase/getpendingpurchase')
      .then((res) => {
        console.log(res.data);
        setPercheseData(res.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getPercheseData();
  }, []);

  return (
    <View>
      <ScrollView style={styles.margin}>
        <Card containerStyle={{padding: 0}}>
          {purchseData.map((p, i) => {
            return (
              <Card>
                <ListItem
                  key={i}
                  title={p.item_name}
                  titleStyle={styles.tStyle}
                  rightElement={<Text>{p.status}</Text>}
                  leftElement={<Text>{p.purchase_id}</Text>}
                  onPress={() => {
                    setOnePercheseData(p), setVisible(true);
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
          <DialogTitle title="Pending Purchase Orders"></DialogTitle>
          <DialogContent>
            <ScrollView style={styles.main}>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.top}>Purchase ID : </Text>
                <Text style={styles.other}>{onePurchseData.purchase_id}</Text>
                <View style={{flex: 1}} />
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.top}>Type : </Text>
                  <Text style={styles.other}>{onePurchseData.type}</Text>
                </View>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.next}>Supplier Name : </Text>
                <Text style={styles.other}>{onePurchseData.supplier}</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.next}>Store Location : </Text>
                <Text style={styles.other}>
                  {onePurchseData.store_location}
                </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.next}>Item Name : </Text>
                <Text style={styles.other}>{onePurchseData.item_name}</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.next}>Quantity : </Text>
                <Text style={styles.other}>{onePurchseData.quantity}</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.next}>Unit Price : </Text>
                <Text style={styles.other}>{onePurchseData.unit_price}</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.next}>Total Price : </Text>
                <Text style={styles.other}>{onePurchseData.total_price}</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.next}>Due Date : </Text>
                <Text style={styles.other}>{onePurchseData.due_date}</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Button
                  title="Reject"
                  containerStyle={{margin: 10, flex: 1}}
                  onPress={() => {
                    RejectPurchase(), setVisible(false);
                  }}
                />

                <Button
                  title="Accept"
                  containerStyle={{margin: 10, flex: 1}}
                  onPress={() => {
                    acceptPurchase(), setVisible(false);
                  }}
                />
              </View>
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

export default FView;
