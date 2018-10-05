import React, {Component} from 'react';
import { 
	Platform, 
	StyleSheet, 
	Text, 
	View, 
	Image, 
	pic,
	TextInput,
	TouchableOpacity,
}
from 'react-native';

export default class Form extends Component<{}> {
	render(){
		return(
			<View style={styles.container}>
			
			<TextInput style={styles.inputBox} 
			underlineColorAndroid='rgba(0,0,0,0)' 
			placeholder="Email" />

			<TextInput style={styles.inputBox} 
			underlineColorAndroid='rgba(0,0,0,0)' 
			placeholder="Password" 
			secureTextEntry={true}
			/>

			<TouchableOpacity style={styles.button}>
				<Text style={styles.buttonText}>Login</Text>
			</TouchableOpacity>
			</View>
			)
	}
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent : "center",
    alignItems: 'center',
  },
  inputBox: {
  	width : 300,
  	backgroundColor:'#ff7043',
  	borderRadius: 25,
  	paddingHorizontal: 16,
  	marginVertical: 10
  },
  button: {
  	width : 300,
  	backgroundColor:'#ac0800',
  	borderRadius: 25,
  	marginVertical: 10,
  	paddingVertical: 12
  },
  buttonText: {
  	fontSize: 16,
  	fontWeight: '500',
  	color: '#ff5722',
  	textAlign:'center'
  }
});