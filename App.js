import React, {Component} from 'react';
import { Platform, StyleSheet, Text, View, Image, pic}from 'react-native';
import Judul from './Components/Judul';


export default class App extends Component{
  render() {
    return (
      <View style={styles.container}>
      <Judul/>
      <Image source={pic} style={{width:100, height: 100}}></Image>
      <Text style={styles.welcome}>Nama : Tegar Faiqul Hammam Basuki</Text>
      <Text style={styles.instruction}>Kelas : XI RPL 2</Text>
      <Text style={styles.instruction}>Absen : 34</Text>
      <Image style={{width: 400, height: 300}} 
      source={require('./content/gambar/karepe.jpg')} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"red",
    alignItems: "center",
    justifyContent : "center"
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    margin: 10,
    color:'black',
  },
  instruction: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
    marginBottom: 5,
  }
});