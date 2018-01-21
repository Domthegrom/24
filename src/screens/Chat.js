import React, { Component } from 'react'
import { View, NativeModules, Platform, StyleSheet } from 'react-native'
import IMUI from 'aurora-imui-react-native'
import demoMessages from '../_mock_data/messages'

const { MessageList, ChatInput, AuroraIMUIController } = IMUI

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
      inputViewLayout: { width: window.width, height: initHeight },
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
    if (this.state.inputLayoutHeight != size.height) {
      this.setState({
        inputLayoutHeight: size.height,
        inputViewLayout: { width: size.width, height: size.height },
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
      this.refs.ChatInput.showMenu(false)
      this.setState({
        messageListLayout: { flex: 1, width: window.width, margin: 0 }
      })
    } else {
      this.setState({
        inputViewLayout: { width: window.width, height: 100 }
      })
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <MessageList
          ref="MessageList"
          style={this.state.messageListLayout}
          // onAvatarClick={this.onAvatarClick}
          // onMsgClick={this.onMsgClick}
          // onStatusViewClick={this.onStatusViewClick}
          // onTouchMsgList={this.onTouchMsgList}
          // onTapMessageCell={this.onTapMessageCell}
          // onBeginDragMessageList={this.onBeginDragMessageList}
          // onPullToRefresh={this.onPullToRefresh}
          sendBubbleTextSize={18}
          sendBubbleTextColor="#000000"
          sendBubblePadding={{ left: 10, top: 10, right: 15, bottom: 10 }}
          messageListBackgroundColor="#FFFFFF"
        />
        <ChatInput
          ref="ChatInput"
          style={this.state.inputViewLayout}
          onSizeChange={this.onInputViewSizeChange}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  sendCustomBtn: {},
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF'
  }
})
