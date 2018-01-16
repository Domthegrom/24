import React from "react";
import { ScrollView, StyleSheet, Button, View, Text } from "react-native";
import LoginForm from '../components/loginForm';

import { registerUser } from "../Connections/";

export default class Registration extends React.Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
        <View style={styles.container}>
        <LoginForm onSubmit={(user)=>registerUser(this.props.screenProps.firebase,user/**, you can add a function here to be called after registration is complete*/)} />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: '50%'
  },
});
