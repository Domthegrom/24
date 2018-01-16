import React, { Component } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  Button
} from "react-native";

export default class LoginForm extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholderTextColor="#e9e9e9"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Email..."
          style={styles.input}
        />
        <TextInput
          secureTextEntry
          placeholderTextColor="#e9e9e9"
          placeholder="Password..."
          style={styles.input}
        />
        {/* This textInput for Age will have to be masked to confirm only to birthdays set as: MM/DD/YYYY */}
        <TextInput
          secureTextEntry
          placeholderTextColor="#e9e9e9"
          placeholder="This will have to be masked as 09/18/1996 "
          style={styles.Ageinput}
        />
        {/* Select one of these three options for your Gender */}
        <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 25}}>
          <Text style={{color: 'white'}}>Man</Text>
          <Text style={{color: 'white'}}>Woman</Text>
          <Text style={{color: 'white'}}>Non-Binary</Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Button title="Submit" />
        </View>
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
