import React, {useState, useEffect} from 'react';
import {View, ToastAndroid, ScrollView} from 'react-native';
import {
  Button,
  Input,
  Text,
  ListItem,
  Avatar,
  Card,
} from 'react-native-elements';
import Dialog, {
  DialogContent,
  DialogTitle,
  DialogButton,
} from 'react-native-popup-dialog';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Feather';
import DatePicker from 'react-native-datepicker';
import axios from 'axios';

const AddItem = () => {
  const [visible, setVisible] = useState(false);
  const [quantityCalc, setQuantityCalc] = useState(0);
  const [itemData, setItemData] = useState([]);
  const [oneItem, setOneItem] = useState([]);

  const fetchData = () => {
    axios
      .post('http://10.104.159.140:3001/item/getbycategory', {categoryId: 1})
      .then((res) => {
        setItemData(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const reqprams = {
    manager: 'manager',
    site: 'site',
    storeLocation: 'location',
    dueDate: 'date',
    // email: userEmail,
    // password: userPassword,
  };

  const addRequisition = () => {
    console.log('Button Clicked....');
    axios
      .post('http://10.104.159.140:3001/requisition/add', reqprams)
      .then((res) => {
        console.log(res.data);
        setVisible(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <View style={{margin: 10}}>
      <ScrollView>
        <Text h4 style={{textAlign: 'center'}}>
          Add Items
        </Text>
        <SupplierFilterDropDownPicker />
        <CategoryFilterDropDownPicker />
        {itemData.map((l, i) => (
          <ListItem
            key={i}
            containerStyle={{
              borderColor: 'black',
              borderStyle: 'solid',
              borderWidth: 0.5,
              marginBottom: 5,
              borderRadius: 10,
            }}>
            <ListItem.Content>
              <ListItem.Title>{l.item_name}</ListItem.Title>
              <ListItem.Subtitle>{l.description}</ListItem.Subtitle>
            </ListItem.Content>
            <Button
              title="Add"
              onPress={() => {
                setVisible(true), setOneItem(l);
              }}
            />
          </ListItem>
        ))}
      </ScrollView>
      <View>
        <Dialog
          width={300}
          visible={visible}
          onTouchOutside={() => {
            setVisible(false);
          }}>
          <DialogTitle title="Add Requisision"></DialogTitle>
          <DialogContent>
            <ScrollView>
              <Text style={{marginTop: 20, fontSize: 20}}>
                Item Name: {oneItem.item_name}
              </Text>
              <Text style={{marginTop: 20, fontSize: 15}}>
                Unit price: {oneItem.price}
              </Text>
              <Text style={{marginTop: 20}}>Quantity (pieces)</Text>
              <Input
                placeholder="Quantity"
                onChangeText={setQuantityCalc}
                keyboardType="numeric"
              />
              <Text
                style={{
                  marginBottom: 10,
                  marginRight: 'auto',
                  marginLeft: 'auto',
                  fontSize: 20,
                }}>
                Price: {quantityCalc * oneItem.price}
              </Text>
              <Text>Discription</Text>
              <Input
                value={oneItem.description}
                placeholder="Discription"
                disabled
              />
              <DatePickerforDuedate />
              <LocationDropDownPicker />

              <Button
                title="submit"
                onPress={() => {
                  addRequisition();
                }}
              />
            </ScrollView>
          </DialogContent>
        </Dialog>
      </View>
    </View>
  );
};
export default AddItem;

const CategoryFilterDropDownPicker = () => {
  const [categoryData, setCategoryData] = useState([]);

  const getCategoryData = () => {
    axios
      .get('http://10.104.159.140:3001/category/getall')
      .then((res) => {
        console.log(res.data);
        setCategoryData(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getCategoryData();
  }, []);

  return (
    <View style={{marginBottom: 40}}>
      <Text style={{marginBottom: 5}}>Filter</Text>
      <DropDownPicker
        items={[
          {
            label: 'Tools',
            value: 'Tools',
          },
          {
            label: 'Stationary',
            value: 'Stationary',
          },
          {
            label: 'Hardware',
            value: 'Hardware',
          },
          {
            label: 'Power tools',
            value: 'Power tools',
          },
        ]}
        placeholder="select category"
        containerStyle={{height: 40}}
        style={{backgroundColor: '#fafafa'}}
        itemStyle={{
          justifyContent: 'flex-start',
        }}
        dropDownStyle={{backgroundColor: '#fafafa'}}
      />
    </View>
  );
};

const SupplierFilterDropDownPicker = () => {
  const [supplierData, setSupplierData] = useState([]);

  // const getSupplierData = () => {
  //   axios
  //     .get('http://10.104.159.140:3001/category/getall')
  //     .then((res) => {
  //       console.log(res.data);
  //       setSupplierData(res.data);
  //     })
  //     .catch((err) => console.log(err));
  // };

  // useEffect(() => {
  //   getSupplierData();
  // }, []);

  return (
    <View style={{marginBottom: 40}}>
      <Text style={{marginBottom: 5}}>Filter</Text>
      <DropDownPicker
        items={[
          {
            label: 'Chanuka',
            value: 'Chanuka',
          },
          {
            label: 'Eshan',
            value: 'Eshan',
          },
          {
            label: 'Lakshan',
            value: 'Lakshan',
          },
          {
            label: 'Dinuli',
            value: 'Dinuli',
          },
        ]}
        placeholder="select supplier"
        containerStyle={{height: 40}}
        style={{backgroundColor: '#fafafa'}}
        itemStyle={{
          justifyContent: 'flex-start',
        }}
        dropDownStyle={{backgroundColor: '#fafafa'}}
      />
    </View>
  );
};

const LocationDropDownPicker = () => {
  return (
    <View style={{marginBottom: 40, marginTop: 40}}>
      <Text style={{marginBottom: 5}}>Location</Text>
      <DropDownPicker
        items={[
          {
            label: 'Kandy',
            value: 'Kandy',
          },
          {
            label: 'Jaffna',
            value: 'Jaffna',
          },
          {
            label: 'Colombo',
            value: 'Colombo',
          },
        ]}
        placeholder="select location"
        containerStyle={{height: 40}}
        style={{backgroundColor: '#fafafa'}}
        itemStyle={{
          justifyContent: 'flex-start',
        }}
        dropDownStyle={{backgroundColor: '#fafafa'}}
      />
    </View>
  );
};

const DatePickerforDuedate = () => {
  const [date, setDate] = useState('2020-05-10');
  return (
    <View>
      <Text>Due Date</Text>
      <DatePicker
        style={{width: 200}}
        date={date}
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
        minDate="2020-05-01"
        maxDate="2030-06-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0,
          },
          dateInput: {
            marginLeft: 36,
          },
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date) => {
          setDate(date);
        }}
      />
    </View>
  );
};
