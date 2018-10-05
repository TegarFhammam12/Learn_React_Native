import React, {Component} from 'react';
import { Platform, StyleSheet, Text, View, Image, pic, StatusBar}from 'react-native';

import Login from'./pages/Login';

export default class App extends Component{
  render() {
    return (
      <View style={styles.container}>
      <StatusBar 
          backgroundColor="#9f0000"
          barStyle="light-content" 
      />
      <Login/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#870000",
    alignItems: "center",
    justifyContent : "center"
  }
});