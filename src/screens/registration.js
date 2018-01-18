import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import LoginForm from '../components/loginForm'
import { registerUser } from '../Connections/'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: '50%'
  }
})

export default class Registration extends Component {
  static navigationOptions = {
    header: null
  }

  render() {
    return (
      <View style={styles.container}>
        <LoginForm
          onSubmit={user =>
            registerUser(
              this.props.screenProps.firebase,
              user /** , you can add a function here to be called after registration is complete */
            )
          }
        />
      </View>
    )
  }
}
