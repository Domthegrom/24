import React from 'react'
import { ScrollView, StyleSheet, TextInput, View, Text } from 'react-native'
import { postThought } from '../Connections/'

export default class PostScreen extends React.Component {
  /**
   * TODO: add a post button and use the following function:
   *
   * postThought(this.props.screenProps.firebase,this.state.thought,()=>{console.log("done?")})
   *
   * 1st prop is firebase object, leave as is
   * 2nd prop is the text from the post
   * 3rd prop is a callback, you can create any function for example change page or give some kind of feedback
   */

  static navigationOptions = {
    title: 'Post'
  }
  constructor(props) {
    super(props)
    this.state = {
      thought: ''
    }
  }

  _PostAThought = async () => {}
  render() {
    return (
      <TextInput
        onChangeText={thought => this.setState({ thought })}
        style={{ flex: 1 }}
        multiline
        numberOfLines={4}
        placeholder="No longer then 200 characters"
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff'
  }
})
