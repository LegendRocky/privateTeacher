//入口文件
'use strict';

var React = require('react-native');
var Map = require('./views/map');
var Login = require('./views/login');
var Me = require('./views/aboutme/Me');
var Order = require('./views/order/Order');
var AdSupportIOS = require('AdSupportIOS');
var OrderListDetail = require('./views/order/OrderListDetail');
var Message = require('./views/message/Message');
var EditMe = require('./views/aboutme/EditMe');

var TouchableHighlightt = require('./test/TouchableHighlight');
var Images = require('./test/Images');

var Test = require('./views/test');

var {
	View,
	Text,
	TabBarIOS,
	StyleSheet,
	NavigatorIOS
} = React;

var App = React.createClass({
	getInitialState() {
		return{
			selected: '附近'
		}
	},
	render() {
		return(
			<View style={styles.container}>
				<TabBarIOS>
					<TabBarIOS.Item
						selected={this.state.selected === '附近'}
						title="附近"
						icon={require('image!nearby')}
						onPress={()=>{this.setState({selected: '附近'})}}>
						<NavigatorIOS
							ref="nav_food"
						  style={styles.container}
						  initialRoute={{
						    title: '登录',
						    component: Login,
						    rightButtonTitle: '地图',
						    passProps: {
						    	nav: this.refs.nav_food
						    },
						    onRightButtonPress: ()=>{
						    	console.log(this.refs);
						    	this.refs.nav_food.navigator.push({
						    		title: '地图',
						    		component: Map,
						    		passProps:{
						    			type: '餐饮'
						    		}
						    	})
						    }
						  }} />
					</TabBarIOS.Item>

					<TabBarIOS.Item
						selected={this.state.selected === '订单'}
						icon={require('image!dingdan')}
						color="white"
					  title="订单"
					  onPress={()=>{this.setState({selected: '订单'})}}>
					  <NavigatorIOS
							ref="nav_food"
						  style={styles.container}
						  initialRoute={{
						    title: '订单',
						    component: Order,
						    rightButtonTitle: '地图',
						    passProps: {
						    	nav: this.navigator
						    },
						    onRightButtonPress: ()=>{
						    	console.log(this.refs);
						    	this.refs.nav_food.navigator.push({
						    		title: '地图',
						    		component: Map,
						    		passProps:{
						    			type: '餐饮'
						    		}
						    	})
						    }
						  }} />
					</TabBarIOS.Item>

					<TabBarIOS.Item
					  title="消息"
					  selected={this.state.selected === '消息'}
					  onPress={()=>{this.setState({selected:'消息'})}}
					  icon={require('image!message')}>
					  <NavigatorIOS
							ref="nav_food"
						  style={styles.container}
						  initialRoute={{
						    title: '消息中心',
						    component: Message,
						    rightButtonTitle: '地图',
						    passProps: {
						    	nav: this.refs.nav_food
						    },
						    onRightButtonPress: ()=>{
						    	console.log(this.refs);
						    	this.refs.nav_food.navigator.push({
						    		title: '地图',
						    		component: Map,
						    		passProps:{
						    			type: '餐饮'
						    		}
						    	})
						    }
						  }} />
					</TabBarIOS.Item>

					<TabBarIOS.Item
						selected={this.state.selected === '我'}
					  title="我"
					  icon={require('image!user')}
					  onPress={()=>{this.setState({selected:'我'})}}>
					  <NavigatorIOS
							ref="nav_me"
						  style={styles.container}
						  initialRoute={{
						    title: '个人信息',
						    component: Me,
						    rightButtonTitle: '编辑',
						    passProps: {
						    	nav: this.refs.nav_food
						    },
						    onRightButtonPress: ()=>{
						    	console.log(this.refs);
						    	this.refs.nav_me.navigator.push({
						    		title: '编辑',
						    		component: EditMe,
						    		passProps:{
						    			type: '餐饮'
						    		}
						    	})
						    }
						  }} />
					</TabBarIOS.Item>
				</TabBarIOS>
			</View>
		)
	},
	componentDidMount() {
		this.setState({
			nav:this.refs
		})
	}
});

var styles = StyleSheet.create({
	container: {
		flex: 1,
	}
})

module.exports = App;