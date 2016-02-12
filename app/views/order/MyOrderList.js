'use strict';

var React = require('react-native');
var Util = require('../util');
var borderWidth = Util.pixel;

var {
	View,
	Text,
	StyleSheet,
	TouchableHighlight,
	ScrollView
} = React;

var MyOrderList = React.createClass({
	render() {
		return (
			<ScrollView style={styles.container}>
			<View style={[styles.container,styles.listWrap]}>
				<View style={styles.listItem}>
					<View style={styles.listItemHeader}>
						<View style={styles.itemHeaderLeft}>
							<Text>订单号：GXK21321</Text>
						</View>
						<View style={styles.itemHeaderRight}>
							<Text style={{color:'rgb(128,128,128)'}}>订单状态：待付款</Text>
						</View>
					</View>
					<View style={styles.listContent}>
						<Text>您好，您本次缴费账单信息：</Text>
						<Text>用户姓名：xxx</Text>
						<Text>订单号: 223289839283</Text>
					</View>
					<View style={styles.listConsume}>
						<View style={[styles.container,{height:30,justifyContent:'center'}]}>
							<Text style={{fontSize:16,justifyContent:'center'}}>金额：¥60.0</Text>
						</View>
						<TouchableHighlight
						  onPress={()=>{alert(1)}}
						  style={styles.listBtn}
						  underlayColor='#fff'>
						  <Text style={{color:'white'}}>立即支付</Text>
						</TouchableHighlight>
					</View>
				</View>

				<View style={styles.listItem}>
					<View style={styles.listItemHeader}>
						<View style={styles.itemHeaderLeft}>
							<Text>订单号：GXK21321</Text>
						</View>
						<View style={styles.itemHeaderRight}>
							<Text style={{color:'rgb(128,128,128)'}}>订单状态：待付款</Text>
						</View>
					</View>
					<View style={styles.listContent}>
						<Text>您好，您本次缴费账单信息：</Text>
						<Text>用户姓名：xxx</Text>
						<Text>订单号: 223289839283</Text>
					</View>
					<View style={styles.listConsume}>
						<View style={[styles.container,{height:30,justifyContent:'center'}]}>
							<Text style={{fontSize:16,justifyContent:'center'}}>金额：¥60.0</Text>
						</View>
						<TouchableHighlight
						  onPress={()=>{alert(1)}}
						  style={styles.listBtn}
						  underlayColor='#fff'>
						  <Text style={{color:'white'}}>立即支付</Text>
						</TouchableHighlight>
					</View>
				</View>

				<View style={styles.listItem}>
					<View style={styles.listItemHeader}>
						<View style={styles.itemHeaderLeft}>
							<Text>订单号：GXK21321</Text>
						</View>
						<View style={styles.itemHeaderRight}>
							<Text style={{color:'rgb(128,128,128)'}}>订单状态：待付款</Text>
						</View>
					</View>
					<View style={styles.listContent}>
						<Text>您好，您本次缴费账单信息：</Text>
						<Text>用户姓名：xxx</Text>
						<Text>订单号: 223289839283</Text>
					</View>
					<View style={styles.listConsume}>
						<View style={[styles.container,{height:30,justifyContent:'center'}]}>
							<Text style={{fontSize:16,justifyContent:'center'}}>金额：¥60.0</Text>
						</View>
						<TouchableHighlight
						  onPress={()=>{alert(1)}}
						  style={styles.listBtn}
						  underlayColor='#fff'>
						  <Text style={{color:'white'}}>立即支付</Text>
						</TouchableHighlight>
					</View>
				</View>
			</View>
			</ScrollView>
		)
	}
})

var styles = StyleSheet.create({
	container: {
		flex:1
	},
	listWrap: {
		backgroundColor: 'rgb(237,237,237)',
		padding: 5,
	},
	listItem: {
		backgroundColor: 'white',
		borderRadius: 5,
		marginBottom: 8,
	},
	listItemHeader: {
		flexDirection: 'row',
		height: 50,
		paddingLeft: 10,
		paddingRight: 10,
		borderBottomWidth: 1,
		borderBottomColor: 'silver',
		borderRadius: 8
	},
	itemHeaderLeft: {
		flex: 1,
		justifyContent: 'center',
	},
	itemHeaderRight: {
		justifyContent: 'center'
	},
	listContent: {
		paddingLeft: 10,
		paddingRight: 10,
		paddingTop: 20,
		paddingBottom: 20,
		borderBottomWidth: 1,
		borderBottomColor: 'silver',
	},
	listConsume: {
		flexDirection: 'row',
		paddingLeft: 10,
		paddingRight: 10,
		paddingTop: 20,
		paddingBottom: 20,
		justifyContent: 'center',
		borderRadius: 5
	},
	listBtn: {
		backgroundColor: 'rgb(239,130,35)',
		height: 30,
		paddingLeft: 20,
		paddingRight: 20,
		justifyContent: 'center',
		borderRadius: 8
	},
})

module.exports = MyOrderList;