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
// import Icon from 'react-native-vector-icons/FontAwesome';
import Dialog, {
  DialogContent,
  DialogTitle,
  DialogButton,
} from 'react-native-popup-dialog';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Feather';
import DatePicker from 'react-native-datepicker';
import axios from 'axios';

const list = [
  {
    name: 'Screw Drawer',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'inneco brand',
  },
  {
    name: 'Drill',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',

    subtitle: 'power tools',
  },
];

const AddItem = () => {
  const [visible, setVisible] = useState(false);
  const [itemData, setItemData] = useState([]);

  // const fetchItemData = () => {
  //   axios
  //     .post('http://10.101.147.59:3001/item/getbycategory', {categoryId: 1})
  //     .then((res) => {
  //       setItemData(res.data);
  //       console.log(res.data);
  //     })
  //     .catch((err) => console.log(err));
  // };

  const fetchData = () => {
    axios
      .post('http://10.106.91.233:3001/item/getbycategory', {categoryId: 1})
      .then((res) => {
        setItemData(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={{margin: 10}}>
      <ScrollView>
        <Text h5 style={{textAlign: 'center'}}>
          Add Items
        </Text>

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
            {/* <Avatar source={{uri: l.avatar_url}} /> */}
            <ListItem.Content>
              <ListItem.Title>{l.item_name}</ListItem.Title>
              <ListItem.Subtitle>{l.description}</ListItem.Subtitle>
            </ListItem.Content>
            <Button
              title="Add"
              onPress={() => {
                setVisible(true);
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
          <DialogTitle title="Choose Quantity"></DialogTitle>
          <DialogContent>
            <Text style={{marginTop: 20}}>Item Name: Drill</Text>
            <Text style={{marginTop: 20}}>Unit price: $80</Text>
            <Text style={{marginTop: 20}}>Quantity (pieces)</Text>
            <Input placeholder="Quantity" />
            <Text
              style={{
                marginBottom: 10,
                marginRight: 'auto',
                marginLeft: 'auto',
                fontSize: 20,
              }}>
              Price: $0
            </Text>
            <Text>Discription</Text>
            <Input placeholder="Discription" disabled />
            <DatePickerforDuedate />
            <LocationDropDownPicker />
          </DialogContent>
        </Dialog>
      </View>
    </View>
  );
};
export default AddItem;

const CategoryFilterDropDownPicker = () => {
  return (
    <View style={{marginBottom: 40}}>
      <Text style={{marginBottom: 5}}>Filter</Text>
      <DropDownPicker
        items={[
          {
            label: 'UK',
            value: 'uk',
            icon: () => <Icon name="flag" size={18} color="#900" />,
          },
          {
            label: 'France',
            value: 'france',
            icon: () => <Icon name="flag" size={18} color="#900" />,
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

const LocationDropDownPicker = () => {
  return (
    <View style={{marginBottom: 40, marginTop: 40}}>
      <Text style={{marginBottom: 5}}>Location</Text>
      <DropDownPicker
        items={[
          {
            label: 'UK',
            value: 'uk',
            icon: () => <Icon name="flag" size={18} color="#900" />,
          },
          {
            label: 'France',
            value: 'france',
            icon: () => <Icon name="flag" size={18} color="#900" />,
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
