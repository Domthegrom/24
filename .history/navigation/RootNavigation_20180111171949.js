import {Notifications} from 'expo';
import React from 'react';
import {StackNavigator} from 'react-navigation';
import Message from '../screens/Message';
import Login from '../screens/Login'
import MainTabNavigator from './MainTabNavigator';
import PostScreen from '../screens/PostScreen';
import registerForPushNotificationsAsync from '../api/registerForPushNotificationsAsync';

import fb from "../Connections/Firebase"

const RootStackNavigator = StackNavigator({
  Login: {
    screen: Login
  },
  Main: {
    screen: MainTabNavigator
  },
  Message: {
    screen: Message
  },
  PostScreen: {
    screen: PostScreen
  }
}, {
  navigationOptions: () => ({
    headerTitleStyle: {
      fontWeight: 'normal'
    }
  })
});

export default class RootNavigator extends React.Component {
  componentDidMount() {
    this._notificationSubscription = this._registerForPushNotifications();
  }

  componentWillUnmount() {
    this._notificationSubscription && this
      ._notificationSubscription
      .remove();
  }

  render() {
    return <RootStackNavigator screenProps={{
      firebase: fb
    }}/>;
  }

  _registerForPushNotifications() {
    // Send our push token over to our backend so we can receive notifications You
    // can comment the following line out if you want to stop receiving a
    // notification every time you open the app. Check out the source for this
    // function in api/registerForPushNotificationsAsync.js
    registerForPushNotificationsAsync();

    // Watch for incoming notifications
    this._notificationSubscription = Notifications.addListener(this._handleNotification);
  }

  _handleNotification = ({origin, data}) => {
    console.log(`Push notification ${origin} with data: ${JSON.stringify(data)}`);
  };
}