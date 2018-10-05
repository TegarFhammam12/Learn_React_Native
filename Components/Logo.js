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

export default class Logo extends Component<{}> {
	render(){
		return(
			<View style={styles.container}>
				<Image style={{width: 80, height: 90}}
          		source={require('../image/logo.jpg')}/>
				<Text style={styles.logoText}>Welcome to My app </Text>
			
			</View>
			)
	}
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent : "flex-end",
    alignItems: 'center',
  },
  
  logoText: {
  	marginVertical: 15,
  	fontSize: 18,
  	color:'#ffab91'
  }
});