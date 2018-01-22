import React, { Component } from 'react'
import {
  NativeModules,
  Dimensions,
  Platform,
  StyleSheet,
  KeyboardAvoidingView
} from 'react-native'
import IMUI from 'aurora-imui-react-native'
import demoMessages from '../_mock_data/messages'
import ChatInput from '../components/ChatInput'

const { MessageList, AuroraIMUIController } = IMUI
const window = Dimensions.get('window')

export default class Chat extends Component {
  constructor(props) {
    super(props)

    let initHeight
    if (Platform.OS === 'ios') {
      initHeight = 100
    } else {
      initHeight = 100
    }

    this.state = {
      inputLayoutHeight: initHeight,
      messageListLayout: { flex: 1, width: window.width, margin: 0 },
      isAllowPullToRefresh: true
    }
  }

  componentDidMount() {
    this.resetMenu()
    AuroraIMUIController.addMessageListDidLoadListener(() => {
      this.getHistoryMessage()
    })
  }

  componentWillUnmount() {
    AuroraIMUIController.removeMessageListDidLoadListener(
      'IMUIMessageListDidLoad'
    )
  }

  onInputViewSizeChange = size => {
    if (this.state.inputLayoutHeight !== size.height) {
      this.setState({
        inputLayoutHeight: size.height,
        messageListLayout: { flex: 1, width: window.width, margin: 0 }
      })
    }
  }

  getHistoryMessage = () => {
    AuroraIMUIController.scrollToBottom(true)
    AuroraIMUIController.insertMessagesToTop(demoMessages)
  }

  resetMenu = () => {
    if (Platform.OS === 'android') {
      this.setState({
        messageListLayout: { flex: 1, width: window.width, margin: 0 }
      })
    }
  }

  sendMessage = text => {
    const message = {
      msgId:
        Math.random()
          .toString(36)
          .substring(2, 15) +
        Math.random()
          .toString(36)
          .substring(2, 15),
      status: 'send_going',
      msgType: 'text',
      text,
      isOutgoing: true,
      fromUser: {
        userId: '321',
        displayName: 'Ben'
      },
      timeString: '10:05'
    }

    AuroraIMUIController.appendMessages([message])
  }

  render() {
    return (
      <KeyboardAvoidingView
        behavior="position"
        contentContainerStyle={styles.container}
        keyboardVerticalOffset={64}
        style={styles.container}
      >
        <MessageList
          sendBubble={{
            imageName: 'outgoing_bubble',
            padding: { left: 13, top: 40, right: 15, bottom: 40 }
          }}
          receiveBubble={{
            imageName: 'incoming_bubble',
            padding: { left: 13, top: 40, right: 15, bottom: 40 }
          }}
          style={this.state.messageListLayout}
          receiveBubblePadding={{ left: 25, top: 12, right: 14, bottom: 12 }}
          sendBubblePadding={{ left: 14, top: 12, right: 25, bottom: 12 }}
          sendBubbleTextSize={16}
          sendBubbleTextColor="#000000"
          messageListBackgroundColor="#FFFFFF"
          avatarSize={{ width: 0, height: 0 }}
        />
        <ChatInput send={this.sendMessage} />
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  sendCustomBtn: {},
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF'
  }
})
