import React from 'react'
import { ScrollView, StyleSheet, Text, Platform, View } from 'react-native'
import { ExpoLinksView } from '@expo/samples'
import {
  Container,
  Content,
  Card,
  CardItem,
  Button,
  Icon,
  Item,
  Input,
  Toast,
  Header,
  Right,
  Left,
  Body,
  Title
} from 'native-base'

export default class inbox extends React.Component {
  static navigationOptions = {
    header: null
  }

  constructor(props) {
    super(props)
    this.state = {
      showToast: false
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate('Me')}
            >
              <Text style={styles.topNavigationButtons}>me</Text>
            </Button>
          </Left>
          <Body style={styles.topCenterNavButton}>
            <Title style={styles.titleText}>sort</Title>
            <Icon name="ios-arrow-down" style={styles.topNavigationButtons} />
          </Body>
          <Right>
            <Button
              transparent
              onPress={() =>
                Toast.show({
                  text: 'Bulk Delete',
                  position: 'top',
                  buttonText: 'Okay'
                })
              }
            >
              <Text style={styles.topNavigationButtons}>select</Text>
            </Button>
          </Right>
        </Header>
        <ScrollView style={{ paddingVertical: '3%' }}>
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'center',
              justifyContent: 'space-around'
            }}
          >
            <Text style={{ textAlign: 'center', color: 'black', fontSize: 24 }}>
              how to get honest feedback
            </Text>
            <View
              style={{
                paddingLeft: '5%',
                justifyContent: 'space-between',
                paddingVertical: '4%',
                borderBottomWidth: 1,
                borderBottomColor: '#efeff4'
              }}
            >
              <Text style={styles.instructionsText}>
                {' '}
                1 tap to <Text style={{ color: 'blue' }}>copy inbox link</Text>
              </Text>
              <Text style={styles.instructionsText}>
                {' '}
                2 share your personal link
              </Text>
              <Text style={styles.instructionsText}>
                {' '}
                3 recieve feedback and chat 1 on 1
              </Text>
            </View>
            <View
              style={{
                paddingLeft: '5%',
                justifyContent: 'space-between',
                paddingVertical: '4%',
                borderBottomWidth: 1,
                borderBottomColor: '#efeff4'
              }}
            >
              <Text style={styles.instructionsText}>
                {' '}
                read messges delete in{' '}
                <Text style={{ fontWeight: 'bold' }}>24:00</Text>
              </Text>
              <Text style={styles.instructionsText}>
                {' '}
                unread messages delete in{' '}
                <Text style={{ fontWeight: 'bold' }}>72:00</Text>
              </Text>
            </View>
            <View
              style={{
                paddingLeft: '5%',
                justifyContent: 'space-between',
                paddingVertical: '4%'
              }}
            >
              <Text style={{ fontSize: 17 }}>
                {' '}
                reset your personal link under the{' '}
                <Text style={{ color: 'blue' }}>me </Text>tab
              </Text>
            </View>
          </View>
        </ScrollView>
        <View style={styles.tabBarInfoContainer}>
          <View style={{ flexDirection: 'row' }}>
            <View>
              <Text
                onPress={() =>
                  Toast.show({
                    text: 'Copied!',
                    position: 'top',
                    buttonText: 'Okay'
                  })
                }
                style={styles.tabBarInfoText}
              >
                copy fanmail link
              </Text>
            </View>
            {/* <Text
              onPress={() =>
                Toast.show({
                  text: "New link generated!",
                  position: "top",
                  buttonText: "Okay"
                })
              }
              style={styles.tabBarInfoText}
            >
              Are you sure?
              reset
            </Text> */}
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  instructionsText: {
    fontSize: 17,
    color: '#000000',
    textAlign: 'left',
    paddingVertical: '2%'
  },
  buttonContainer: {
    borderColor: '#efeff4',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    alignContent: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3
      },
      android: {
        elevation: 20
      }
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 10
  },
  tabBarInfoText: {
    paddingHorizontal: '12%',
    color: '#0371FF'
  },
  topNavigationButtons: {
    fontSize: 15,
    color: '#0371FF'
  },
  topCenterNavButton: {
    flexDirection: 'row'
  },
  titleText: {
    justifyContent: 'center',
    paddingHorizontal: '25%',
    fontSize: 13
  },
  buttonDivider: {
    borderLeftWidth: 1,
    height: '100%',
    borderColor: '#efeff4'
  }
})
