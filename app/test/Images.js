'use strict';

var React = require('react-native');

var {
	View,
	Text,
	StyleSheet,
	Image,
	TouchableHighlight
} = React;

var Images = React.createClass({
	getInitialState() {
		var imgs = [
			'http://www.ituring.com.cn/bookcover/1442.796.jpg',
			'http://www.ituring.com.cn/bookcover/1668.553.jpg',
			'http://www.ituring.com.cn/bookcover/1521.260.jpg'
		];
		return{
			imgs: imgs,
			count: 0
		};
	},
	getPre() {
		var imgs = this.state.imgs;
		var count = this.state.count
		count--;
		if(count > -1 && count < imgs.length){
			this.setState({
				count: count
			})
		}else{
			count = imgs.length - 1;
			this.setState({
				count: count
			});
		}
	},
	getNext() {
		var imgs = this.state.imgs;
		var count = this.state.count;
		count++;
		console.log(count);
		if(count > -1 && count < imgs.length){
			this.setState({
				count: count
			})
		}else{
			count = 0;
			this.setState({
				count: count
			})
		}
	},
	render() {
		return(
			<View style={[styles.container,{marginTop:65}]}>
				<View style={{alignItems:'center'}}>
					<Image
						resizeMode="contain"
					  style={{width:300,height:200,margin:10,borderRadius:20,borderWidth:1,borderColor:'silver',padding:5}}
					  source={{uri: this.state.imgs[this.state.count]}} />
				</View>
				<View style={{flexDirection:'row'}}>
					<View style={[styles.container,{alignItems:'center'}]}>
						<TouchableHighlight
						  onPress={this.getPre}
						  style={styles.btn}
						  underlayColor='rgb(255,241,199)'>
							<Text style={{}}>上一张</Text>  
						</TouchableHighlight>
					</View>
					<View style={[styles.container,{alignItems:'center'}]}>
						<TouchableHighlight
						  onPress={this.getNext}
						  style={styles.btn}
						  underlayColor='rgb(255,241,199)'>  
							<Text style={{}}>下一张</Text>
						</TouchableHighlight>
					</View>
				</View>
			</View>
		)
	}
});

var styles = StyleSheet.create({
	container: {
		flex: 1
	},
	btn: {
		height: 35,
		width: 90,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#C3DAF9',
		borderRadius: 5,
	}
});

module.exports = Images;