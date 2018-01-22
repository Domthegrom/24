import React, { Component } from 'react'
import { StyleSheet, TextInput, View, Button } from 'react-native'
import { AutoGrowingTextInput } from 'react-native-autogrow-textinput'

const styles = StyleSheet.create({
  container: {
    alignSelf: 'flex-end',
    borderColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row'
  },
  inputContainer: {
    flex: 1,
    alignItems: 'stretch'
  },
  textInput: {
    paddingTop: 14,
    paddingBottom: 14,
    paddingLeft: 10,
    fontSize: 16,
    backgroundColor: 'white',
    borderWidth: 0
  },
  sendButtonContainer: {
    paddingRight: 12,
    paddingVertical: 6
  },
  sendButton: {
    height: 45,
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

  onChange = event => {
    this.setState({ text: event.nativeEvent.text || '' })
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
          <AutoGrowingTextInput
            value={this.state.text}
            onChange={event => this.onChange(event)}
            style={styles.textInput}
            placeholder="write a message..."
            placeholderTextColor="#66737C"
            maxHeight={200}
            minHeight={45}
            ref={r => {
              this.textInput = r
            }}
          />
        </View>
        <View style={styles.sendButtonContainer}>{sendButton(this.send)}</View>
      </View>
    )
  }
}

export default ChatInput
