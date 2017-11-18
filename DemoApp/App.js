import React from 'react';
import Login from './js/screens/Login';
import { StackNavigator } from 'react-navigation';

const RootNavigator = StackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      header: null
    }
  }
});

const App = () => {
  return <RootNavigator />;
};

export default App;
