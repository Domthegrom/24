import { TabNavigator, TabBarBottom } from 'react-navigation'
import InboxScreen from '../screens/InboxScreen'
import tshirt from '../screens/t-shirt'
import Feed from '../screens/Feed'
import Chat from '../screens/Chat'

export default TabNavigator(
  {
    tshirt: {
      screen: Chat
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
