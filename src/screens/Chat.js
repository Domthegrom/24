import React, { Component } from 'react'
import {
  NativeModules,
  Dimensions,
  StyleSheet,
  KeyboardAvoidingView
} from 'react-native'
import IMUI from 'aurora-imui-react-native'
import firebase from '../Connections/Firebase'
import demoMessages from '../_mock_data/messages'
import ChatInput from '../components/ChatInput'

const { MessageList, AuroraIMUIController } = IMUI
const window = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF'
  }
})

// load message history: insertMessagesToTop
// send message to firebase
// listen for new messages ( appendMessages )

export default class Chat extends Component {
  constructor(props) {
    super(props)
    this.state = {
      messageListLayout: { flex: 1, width: window.width, margin: 0 }
    }

    const messageRef = firebase.database().ref('Messages')

    messageRef.on('value', snapshot => {
      console.log(snapshot.val())
    })
  }

  componentDidMount() {
    AuroraIMUIController.addMessageListDidLoadListener(() => {
      this.getHistoryMessage()
    })
  }

  componentWillUnmount() {
    AuroraIMUIController.removeMessageListDidLoadListener(
      'IMUIMessageListDidLoad'
    )
  }

  getHistoryMessage = () => {
    AuroraIMUIController.scrollToBottom(true)
    AuroraIMUIController.insertMessagesToTop(demoMessages)
  }

  populateMessage = ({ type, message, createdAt, createdBy }) => {
    const sentMessage = {
      msgId: 'temp_id',
      status: 'send_going',
      msgType: type,
      text: message,
      isOutgoing: true,
      fromUser: {
        userId: '321',
        displayName: 'Ben'
      },
      timeString: '10:05'
    }

    AuroraIMUIController.appendMessages([sentMessage])

    return sentMessage
  }

  updateSentMessage = (message, status) => {
    const updatedMessage = {
      ...message,
      status
    }
    AuroraIMUIController.updateMessage(updatedMessage)
  }

  sendMessage = text => {
    const createdAt = new Date().getTime()
    const fakeUserId = '101'

    const message = {
      type: 'text',
      message: text,
      createdAt,
      createdBy: fakeUserId
    }

    const populated = this.populateMessage(message)

    firebase
      .database()
      .ref('Messages')
      .push()
      .set(message, error => {
        if (error) {
          this.updateSentMessage(populated, 'send_failed')
        } else {
          this.updateSentMessage(populated, 'send_succeed')
        }
      })
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
