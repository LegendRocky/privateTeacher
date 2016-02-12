'use strict';

var React = require('react-native');

var {
	StyleSheet,
	View,
	Text,
	WebView,
	AsyncStorage,
} = React;

var Map = React.createClass({
	getInitialState() {
		return{
			url: null
		}
	},
	render() {
		var webView = null;
		if(this.state.url){
			webView = <WebView url={this.state.url} />
		}
		return(
			<View style={styles.container}>
				{webView}
			</View>
		)
	},
	componentDidMount() {
		var that = this;
		
		AsyncStorage.multiGet(['_' + that.props.type, 'pos'], function(err, result){
			if(!err){
				var pos = result[1][1];
				var markers = result[0][1];
				var url = 'http://127.0.0.1:8000/index.html';
				/*if(_GEO_OPEN){
					url += 'pos=' + pos + '&markers=' + markers;
				}else{
					url += 'pos=' + _GEO_TEST_POS +'&markers=' + markers;
				}*/
				that.setState({
					url: url
				})
			}else{
				alert('定位失败');
			}
		})
	}
});

var styles = StyleSheet.create({
	container: {
		flex: 1
	}
})

module.exports = Map;