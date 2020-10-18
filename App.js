import React from 'react';
import {} from 'react-native';
import LogIn from './component/login';
import AddItem from './component/Pages/addItem';
import Apitest from './component/apiTest';
import Dashboard from './component/dashboard';
import Viewer from './component/Pages/viewR';
import FView from './component/NewPages/firstViewPage';
import FirstD from './component/DeliveryPages/first';

import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';

const navigator = createStackNavigator();

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <navigator.Navigator>
        <navigator.Screen name="login " component={LogIn} />
        <navigator.Screen name="Dashboard" component={Dashboard} />
        <navigator.Screen name="Viewer" component={Viewer} />
        <navigator.Screen name="Purchase" component={FView} />
        <navigator.Screen name="Delivery" component={FirstD} />
        <navigator.Screen name="AddItem" component={AddItem} />
      </navigator.Navigator>
    </NavigationContainer>
  );
};
export default App;
