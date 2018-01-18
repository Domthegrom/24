import React from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import demoMessages from '../../_mock_data/messages'

console.ignoredYellowBox = [
  'Warning: Failed prop type: Invalid prop `keyboardShouldPersistTaps`'
]

const Message = () => (
  <GiftedChat messages={demoMessages} user={{ _id: '123test' }} />
)

export default Message
