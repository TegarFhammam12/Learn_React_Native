import React, {Component} from 'react';
import { 
	Platform, 
	StyleSheet, 
	Text, 
	View, 
	Image, 
	pic,
	StatusBar
}
from 'react-native';

import Logo from'../Components/Logo';
import Form from'../Components/Form';

export default class Login extends Component<{}> {
	render() {
		return(
			<View style={styles.container}>
				<Logo/>
				<Form/>
			</View>
			)
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