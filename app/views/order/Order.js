'use strict';

var React = require('react-native');
var FindTeacher = require('./FindTeacher');
var MyOrderList = require('./MyOrderList');

var {
	View,
	Text,
	StyleSheet,
	TouchableHighlight
} = React;
//空列表
var ListViewEmpty = React.createClass({
	render() {
		return(
			<View style={[styles.container,styles.emptyList]}>
				<Text style={{fontSize:18,marginBottom:20}}>暂无订单,赶快去寻找老师吧!</Text>
				<TouchableHighlight
				  onPress={this._findteacher}
				  style={styles.btn}
				  underlayColor='#fff'>
				  <Text style={{color:'white',fontSize:16}}>找老师</Text>
				</TouchableHighlight>
			</View>
		)
	},
	_findteacher(){
		this.props.nav.push({
			title: '找老师',
			component: FindTeacher,
		})
	}
})

var Order = React.createClass({
	getInitialState() {
		return{
			orderEmpty: true,
		}
	},
	render() {
		return(
			<View style={[styles.container]}>
				{
					!this.state.orderEmpty ?
					<MyOrderList nav={this.props.navigator} />
					:
					<ListViewEmpty nav={this.props.navigator} />
				}
			</View>
		)
	}
})

var styles = StyleSheet.create({
	container: {
		flex: 1
	},
	emptyList: {
		justifyContent: 'center',
		alignItems: 'center'
	},
	btn: {
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor:'#3BC1FF',
		width:100,
		height:40,
		borderRadius: 5
	}
})

module.exports = Order;