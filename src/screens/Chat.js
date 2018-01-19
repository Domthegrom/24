import React from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import demoMessages from '../_mock_data/messages'

console.ignoredYellowBox = [
  'Warning: Failed prop type: Invalid prop `keyboardShouldPersistTaps`'
]

const Chat = () => (
  <GiftedChat messages={demoMessages} user={{ _id: '123test' }} />
)

export default Chat

// import React from 'react'
// import { View, NativeModules } from 'react-native'
// import IMUI from 'aurora-imui-react-native'
// import demoMessages from '../../_mock_data/messages'

// const messages = [
//   {
//     msgId: '1',
//     status: 'send_going',
//     msgType: 'text',
//     text: 'Hello world',
//     isOutgoing: true,
//     fromUser: {
//       userId: '1',
//       displayName: 'Ken',
//       avatarPath: 'ironman'
//     },
//     timeString: '10:00'
//   }
// ]

// console.ignoredYellowBox = [
//   'Warning: Failed prop type: Invalid prop `keyboardShouldPersistTaps`'
// ]

// const { MessageList, ChatInput, AuroraIMUIController } = IMUI

// // AuroraIMUIController.appendMessages(messages)d

// const Chat = () => (
//   <View>
//     <MessageList />
//     <ChatInput />
//   </View>
// )

// export default Chat
