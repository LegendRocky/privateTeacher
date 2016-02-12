'use strict';

var React = require('react-native');
var OrderListDetail = require('./OrderListDetail');

var {
	View,
	Text,
	StyleSheet,
	TouchableHighlight,
	Image
} = React;

var TeacherItem = React.createClass({
	render() {
		return(
			<TouchableHighlight
				//父元素向子元素传递数据，this.props.row接收
			  {...this.props}
			  style={{}}
			  underlayColor='#fff'>
				<View style={styles.item}>
					<View style={{}}>
						<Image
						  style={{height:60,width:60,margin:10}}
						  source={require('image!book')} />
					</View>
					<View style={[styles.container,styles.itemInfo]}>
						<Text style={{color:'blue',fontSize:16,marginLeft:10}}>{this.props.row.name}</Text>
						<View style={styles.address}>
							<Image
							  style={{}}
							  source={require('image!littlenearby')} />
							<View style={{height:25,justifyContent:'center'}}><Text>距离此处11KM</Text></View>
						</View>
						<View style={[styles.container,{justifyContent:'center'}]}>
							<Text numberOfLines={1}>授课时间：{this.props.row.date},授课费用：{this.props.row.cust}</Text>
						</View>
					</View>
				</View>
			</TouchableHighlight>
		)
	}
})

var styles = StyleSheet.create({
	container: {
		flex: 1
	},
	item: {
		flexDirection: 'row',
		borderBottomWidth:1,
		borderColor: 'silver',
		height:80
	},
	itemInfo: {
		padding: 5,
		flexDirection: 'column',
	},
	address: {
		flexDirection:'row'
	},
	btnwrap: {
		height:79,
		width:40,
		justifyContent: 'center',
		alignItems: 'center'
	}
})

module.exports = TeacherItem;