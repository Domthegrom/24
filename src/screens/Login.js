import React from 'react'
import { StyleSheet, Button, View, Text } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    paddingVertical: '50%'
  },
  logo: {
    color: '#0371FF',
    fontSize: 45,
    textAlign: 'center'
  },
  logoContainer: {
    alignContent: 'center',
    justifyContent: 'center'
  }
})

export default class Login extends React.Component {
  static navigationOptions = {
    header: null
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Text style={styles.logo}>24</Text>
        </View>
        <Button
          title="Login not done, Press Me"
          onPress={() => this.props.navigation.navigate('Main')}
        />
        {/* accept/decline */}
        {/* <Button />
        <Button /> */}
      </View>
    )
  }
}
