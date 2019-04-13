/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  Alert,
  TouchableWithoutFeedback
} from "react-native";
import { black } from "ansi-colors";

type Props = {};
export default class App extends Component<Props> {
  constructor() {
    super();
    this.state = {
      color1: "",
      comments: [
        {
          key: 1,
          cmnt: "1st cmnt"
        },
        {
          key: 2,
          cmnt: "2nd cmnt"
        },
        {
          key: 3,
          cmnt: "3rd cmnt"
        },
        {
          key: 4,
          cmnt: "4th cmnt"
        },
        {
          key: 2,
          cmnt: "2nd cmnt"
        },
        {
          key: 3,
          cmnt: "3rd cmnt"
        },
        {
          key: 4,
          cmnt: "4th cmnt"
        },
        {
          key: 2,
          cmnt: "2nd cmnt"
        },
        {
          key: 3,
          cmnt: "3rd cmnt"
        },
        {
          key: 4,
          cmnt: "4th cmnt"
        },
        {
          key: 2,
          cmnt: "2nd cmnt"
        },
        {
          key: 3,
          cmnt: "3rd cmnt"
        },
        {
          key: 4,
          cmnt: "4th cmnt"
        },
        {
          key: 2,
          cmnt: "2nd cmnt"
        },
        {
          key: 3,
          cmnt: "3rd cmnt"
        },
        {
          key: 4,
          cmnt: "4th cmnt"
        },
        {
          key: 2,
          cmnt: "2nd cmnt"
        }
      ]
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.comments}
          renderItem={({ item }) => (
            <TouchableWithoutFeedback
              onPress={() => {
                this.actionOnRow();
              }}
            >
              <Text style={{ fontSize: 24, color: this.state.color1 }}>
                {item.cmnt}
              </Text>
            </TouchableWithoutFeedback>
          )}
        />
        <Text style={{ fontSize: 24, color: this.state.color1 }}>yoyo</Text>
        <TextInput style={styles.commentBox} placeholder={"Comment"} />
      </View>
    );
  }

  actionOnRow = () => {
    if (this.state.color1 == "black") {
      this.setState({ color1: "red" });
    } else {
      this.setState({ color1: "black" });
    }
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  commentBox: {
    fontSize: 18,
    marginVertical: 2,
    color: "black"
  }
});
