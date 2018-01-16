import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Container, Header, Content, List, ListItem, Text } from "native-base";

export default class Me extends Component {
  static navigationOptions = {
    title: 'me',
  };
  render() {
    return (
      <Container style={{ backgroundColor: "white" }}>
        <Header style={{height: 100, backgroundColor: '#0371FF'}}>
          <Text style={{ fontSize: 20, justifyContent: 'center', alignItems: 'center', paddingVertical: 15 }}>561-827-5414</Text>
        </Header>
        <Content>
          <List>
            <ListItem style={styles.listItems}>
              <Text>Verify email address</Text>
            </ListItem>
            <ListItem style={styles.listItems}>
              <Text>VIP settings</Text>
            </ListItem>
            <ListItem style={styles.listItems}>
              <Text>Notifications</Text>
            </ListItem>
            <ListItem style={styles.listItems}>
              <Text>Account</Text>
            </ListItem>
            <ListItem>
              <Text>Support</Text>
            </ListItem>
            <ListItem>
              <Text>Get more gems</Text>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  listItems: {
    marginTop: 5
  }
});