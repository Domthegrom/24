import React from "react";
import { ScrollView, StyleSheet, TextInput, View, Text } from "react-native";
import { postThought } from "../Connections/";
export default class PostScreen extends React.Component {
  static navigationOptions = {
    title: "Post"
  };
  constructor(props) {
    super(props);
    this.state = {
      thought: ""
    };
    postThought(this.props.screenProps.firebase,"test",()=>{console.log("done?")})
  }

  _PostAThought = async () => {};
  render() {
    return (
      <TextInput
        onChangeText={thought => this.setState({thought})}
        style={{ flex: 1 }}
        multiline={true}
        numberOfLines={4}
        placeholder={"No longer then 200 characters"}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  }
});
