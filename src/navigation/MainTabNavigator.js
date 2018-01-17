import React from 'react'
import { Platform } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { TabNavigator, TabBarBottom } from 'react-navigation'

import Colors from '../constants/Colors'

import InboxScreen from '../screens/InboxScreen'
import tshirt from '../screens/t-shirt'
import Feed from '../screens/Feed'

export default TabNavigator(
  {
    tshirt: {
      screen: tshirt
    },
    feed: {
      screen: Feed
    },
    inbox: {
      screen: InboxScreen
    }
  },
  {
    tabBarOptions: {
      tabStyle: {
        backgroundColor: '#37474F',
        borderBottomWidth: 2,
        borderBottomColor: '#0371FF'
      },
      labelStyle: {
        paddingVertical: '15%',
        fontSize: 16,
        color: '#FFFFFF'
      }
    },
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
    initialRouteName: 'feed'
  }
)
