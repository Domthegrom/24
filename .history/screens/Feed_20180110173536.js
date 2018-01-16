import React from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text
} from "react-native";
import {
  Button,
  Header,
  Left,
  Right,
  Body,
  Title,
  Icon
} from "native-base";
import Card from "../components/card";
import ImageCards from "../components/ImageCards";
import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDdZRfrGFvA7CikUJPzcPMQ2X33-Ja8MWw",
  databaseURL: "https://app-51890.firebaseio.com"
};

firebase.initializeApp(firebaseConfig);
import {getThoughts} from "../functions/fetches";

export default class Feed extends React.Component {

  componentDidMount() {
    // console.log(this.state.thoughts)
    // console.log("**************")
    getThoughts(firebase, (data) => {
      this.setState({
        thoughts: data
      }
      // , () => console.log(this.state.thoughts)
    )
    }, 3)

  }

  state = {
    thoughtIndex: 0,
    thoughts: [
      {
        id: "11408490526444331",
        thought: "So this will be an example of a 140 character count, this will determine the num" +
            "ber of characters per card is too much or too little. Cool!!"
      }, {
        id: "9124782621170115",
        thought: "So this will be an example of a 140 character count, this will determine the num" +
            "ber of characters per card is too much or too little. Cool!!"
      }, {
        id: "1735670627037965",
        thought: "So this will be an example of a 140 character count, this will determine the num" +
            "ber of characters per card is too much or too little. Cool!!"
      }
    ]
  };

  static navigationOptions = {
    header: null
  };
  nextCard = () => {
    () => this.setState({
      thoughtIndex: thoughtIndex + 1
    });
  };

  render() {
    const {thoughtIndex} = this.state;
    return (
      <View style={{
        flex: 1
      }}>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.navigate("Me")}>
              <Text style={{
                color: "#0371FF"
              }}>Me</Text>
            </Button>
          </Left>
          <Body style={{
            flexDirection: "row"
          }}>
            <Title
              style={{
              justifyContent: 'center',
              paddingHorizontal: '25%'
            }}>12:05</Title>
            <Icon
              name="ios-arrow-down"
              style={{
              fontSize: 15,
              color: "#0371ff"
            }}/>
          </Body>
          <Right>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("PostScreen")}>
              <Text style={{
                color: "#0371FF"
              }}>New</Text>
            </Button>
          </Right>
        </Header>
        {this
          .state
          .thoughts
          .map((thought, i) => {
            console.log(thought,i)
            return (<Card key={thought.id} thought={thought} onSwiperOff={this.nextCard}/>);
          })}
        {/* <ImageCards img={imageCard[0]} /> */}
        <View style={styles.tabBarInfoContainer}>
          <View style={{
            flexDirection: "row"
          }}>
            <Text
              onPress={() => this.props.navigation.navigate("PostScreen")}
              style={styles.tabBarInfoText}>
              Reply
            </Text>
            <Text style={styles.tabBarInfoText}>Share</Text>
            <Text style={styles.tabBarInfoText}>Next</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  tabBarInfoContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: {
          height: -3
        },
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
  }
});

const imageCard = [
  {
    id: "259389830744794",
    img: "https://www.petmd.com/sites/default/files/petmd-cat-happy-13.jpg"
  }
];
