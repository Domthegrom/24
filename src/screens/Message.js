import React from 'react'
import { View, NativeModules } from 'react-native'
import IMUI from 'aurora-imui-react-native'
import demoMessages from '../_mock_data/messages'

const { MessageList, ChatInput, AuroraIMUIController } = IMUI

AuroraIMUIController.appendMessages(demoMessages)

const Message = () => (
  <View>
    <MessageList />
    <ChatInput />
  </View>
)

export default Message
