import React from "react";
import { ScrollView, StyleSheet, Text, Platform, View } from "react-native";
import { ExpoLinksView } from "@expo/samples";
import {
  Container,
  Content,
  Card,
  CardItem,
  Button,
  Icon,
  Body,
  Item,
  Input,
  Toast
} from "native-base";

export default class inbox extends React.Component {
  static navigationOptions = {
    title: "inbox"
  };

  constructor(props) {
    super(props);
    this.state = {
      showToast: false
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Container>
            <Content>
              <Card>
                <CardItem
                  onPress={() => this.props.navigation.navigate("PostScreen")}
                >
                  <Body>
                    <Text style={{ fontWeight: "700" }}>
                      This will be the title of the thought (Non Private)
                    </Text>
                  </Body>
                </CardItem>
                <CardItem
                  onPress={() => this.props.navigation.navigate("PostScreen")}
                  style={{ alignContent: "center" }}
                >
                  <Text>
                    Message goes here message goes here message goes here
                  </Text>
                </CardItem>
                <CardItem style={styles.buttonContainer}>
                  <Button transparent>
                    <Text>favorite</Text>
                  </Button>
                  <View style={styles.buttonDivider} />
                  <Button transparent>
                    <Text>extend</Text>
                  </Button>
                </CardItem>
              </Card>
              <Card>
                <CardItem style={{ alignContent: "center" }}>
                  <Text>
                    Message goes here message goes here message goes here,
                    Private
                  </Text>
                </CardItem>
                <CardItem style={styles.buttonContainer}>
                  <Button transparent>
                    <Text>Favorite</Text>
                  </Button>
                  <View style={styles.buttonDivider} />
                  <Button transparent>
                    <Text>Extend</Text>
                  </Button>
                </CardItem>
              </Card>
            </Content>
          </Container>
        </ScrollView>
        <View style={styles.tabBarInfoContainer}>
          <View style={{ flexDirection: "row" }}>
            <View>
              <Text
                onPress={() =>
                  Toast.show({
                    text: "Copied!",
                    position: "top",
                    buttonText: "Okay"
                  })
                }
                style={styles.tabBarInfoText}
              >
                copy fanmail link
              </Text>
            </View>
            <Text
              onPress={() =>
                Toast.show({
                  text: "New link generated!",
                  position: "top",
                  buttonText: "Okay"
                })
              }
              style={styles.tabBarInfoText}
            >
              {/* Are you sure? */}
              reset
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  },
  buttonContainer: {
    borderColor: "#bfbfc3",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    alignContent: "center",
    flexDirection: "row",
    justifyContent: "space-around"
  },
  tabBarInfoContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3
      },
      android: {
        elevation: 20
      }
    }),
    alignItems: "center",
    backgroundColor: "#fbfbfb",
    paddingVertical: 10
  },
  tabBarInfoText: {
    paddingHorizontal: "12%",
    color: "#0371FF"
  },
  buttonDivider: {
    borderLeftWidth: 1,
    height: "100%",
    borderColor: "#bfbfc3"
  }
});
