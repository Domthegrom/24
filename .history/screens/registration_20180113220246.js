import React from "react";
import { ScrollView, StyleSheet, Button, View, Text } from "react-native";
import LoginForm from '../components/loginForm';

export default class Registration extends React.Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
        <View style={styles.container}>
        <LoginForm />
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
