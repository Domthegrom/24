import React, {Component} from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  Button
} from "react-native";

export default class LoginForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      onSubmit: props.onSubmit,
      email: "",
      password: "",
      bday: "",
      sex: -1
    }
  }

  submit() {
    let {bday, password, email, sex} = this.state
    //FIXME: fix this for actual masking checking.
    if (bday != "") 
      if (password != "") 
        if (email != "") 
          if (sex > -1) 
            this.state.onSubmit
  }
  // TODO: I would recommend adding a second password field and then checking if
  // they are matching.
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholderTextColor="#e9e9e9"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Email..."
          style={styles.input}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "black"
  },
  input: {
    height: 40,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderColor: "red",
    borderWidth: 1,
    borderRadius: 12
  },
  Ageinput: {
    height: 40,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderColor: "red",
    borderWidth: 1,
    borderRadius: 12
  },
  buttonContainer: {
    backgroundColor: "#2980b9",
    paddingVertical: 25
  },
  buttonText: {
    textAlign: "center",
    color: "#FFFFFF",
    fontWeight: "700"
  }
});
