import React from 'react';
import Dashboard from './component/dashboard';
import Viewer from './component/Pages/viewR';
import {} from 'react-native';
import LogIn from './component/login';
import AddItem from './component/Pages/addItem';
import Apitest from './component/apiTest';
import Details from './component/Pages/deleteR';

import FView from './component/NewPages/firstViewPage';
import AccePur from './component/NewPages/secondPage';
import FirstD from './component/DeliveryPages/first';
import ViewD from './component/DeliveryPages/viewD';

import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';

const App: () => React$Node = () => {
  return <AddItem />;
};
export default App;
