'use strict';

var React = require('react-native');
var Camera = require('react-native-camera');

var {
	View,
	Text,
	StyleSheet,
	Image
} = React;

var Test = React.createClass({
	getInitialState() {
		return{
			cameraType: Camera.constants.Type.back
		}
	},
	render() {
		var imgURL = 'http://vczero.github.io/lvtu/img/3.jpeg';
		return(
			<Camera
				ref="cam"
				style={styles.container}
				onBarCodeRead={this._onBarCodeRead}
				type={this.state.cameraType}>
				<Text style={styles.welcome}>
					Welcome to React Native
				</Text>
				<Text>
					to get started, edit index.ios.js{'\n'}
					Press Cmd + R to reload
				</Text>
			</Camera>
		)
	}
});

var styles = StyleSheet.create({
	container: {
		flex: 1,
	}
});

module.exports = Test;