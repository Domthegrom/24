import React, { Component } from 'react'
import { StyleSheet, TextInput, View, Button } from 'react-native'

const styles = StyleSheet.create({
  container: {
    alignSelf: 'flex-end',
    borderColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row'
  },
  inputContainer: {
    flex: 1
  },
  input: {
    backgroundColor: 'white',
    height: 50,
    paddingHorizontal: 8
  },
  sendButtonContainer: {
    paddingRight: 12,
    paddingVertical: 6
  },
  sendButton: {
    height: 50,
    width: 32
  }
})

const sendButton = send => (
  <Button
    color="#0371ff"
    name="send"
    onPress={send}
    style={styles.sendButton}
    title="Send"
  />
)

class ChatInput extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  send = () => {
    this.props.send(this.state.text)
    this.textInput.clear()
    this.textInput.blur()
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            ref={ref => {
              this.textInput = ref
            }}
            onChangeText={text => this.setState({ text })}
            style={styles.input}
            placeholder="Type your message here!"
          />
        </View>
        <View style={styles.sendButtonContainer}>{sendButton(this.send)}</View>
      </View>
    )
  }
}

export default ChatInput
