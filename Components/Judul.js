import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

class Judul extends React.Component {
	render(){
		return(
			<View>
			<Text style={salon.judul}> BIODATA </Text>
			</View>
		)
	}
}

const salon = {
	judul : {
		color: "red",
		fontSize: 50,
		fontWeight: 'bold',
		backgroundColor: "black",
		textAlign: 'center'

	}
}
export default Judul;