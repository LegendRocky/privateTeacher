'use strict';

var React = require('react-native');

var {
	View,
	Text,
	StyleSheet,
} = React;

var Message = React.createClass({
	render() {
		return (
			<View style={[styles.container,{marginTop:65,justifyContent:'center',alignItems:'center'}]}>
				<Text>应用升级中，敬请期待！</Text>
			</View>	
		)
	}
});

var styles = StyleSheet.create({
	container: {
		flex: 1,
	}
});

module.exports = Message;