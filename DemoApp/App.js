import React from 'react';
import Login from './js/screens/Login';
import Tweets from './js/screens/Tweets';
import { StackNavigator } from 'react-navigation';

const RootNavigator = StackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      header: null
    }
  },
  Tweets: {
    screen: Tweets,
    navigationOptions: {
      header: null
    }
  }
});

const App = () => {
  return <RootNavigator />;
};

export default App;
