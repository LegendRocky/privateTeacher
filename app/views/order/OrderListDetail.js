'use strict';

var React = require('react-native');
var Util = require('../util');
var Service = require('../service');

var listWidth = Util.size.width;

var {
	View,
	Text,
	StyleSheet,
	TouchableHighlight
} = React;

var OrderListDetail = React.createClass({
	getInitialState() {
		return{
			data: null
		}
	},
	render() {
		return(
			<View style={[styles.container,{marginTop:65}]}>
				<View style={styles.title}>
					<Text style={{color:'rgb(128,128,128)'}}>订单信息{this.props.id}</Text>
				</View>
				<View style={styles.container}>
					<View style={styles.list}><Text>姓名：张小凡（男）</Text></View>
					<View style={styles.list}><Text>职位：xx大学，大三学生</Text></View>
					<View style={styles.list}><Text>科目：数学</Text></View>
					<View style={styles.list}><Text>授课时间：2016-01-28</Text></View>
					<View style={styles.list}><Text>授课时段：下午</Text></View>
					<View style={styles.list}><Text>课时费：50元（45分钟为一课时）</Text></View>
					<View style={[{height:80,justifyContent:'center',alignItems:'center'}]}>
						<TouchableHighlight
						  onPress={()=>{alert(1)}}
						  style={styles.btn}
						  underlayColor='#fff'>
						  <Text style={{color:'white'}}>我要请他</Text>
						</TouchableHighlight>
					</View>
				</View>
			</View>
		)
	},
	componentDidMount() {
		var id = {id:this.props.id};
		this.getData(id)
	},
	getData(id) {
		var _that = this;
		var url = Service.host + Service.findTeacherDetail;
		//var url = 'https://api.douban.com/v2/book/search?count=10&q=互联网';
		Util.post(url, id, function (data){
			console.log('老师姓名：'+data.user.name);
		})
	}
});

var styles = StyleSheet.create({
	container: {
		flex: 1
	},
	title: {
		height: 40,
		justifyContent: 'center',
		backgroundColor: 'rgb(245,245,245)',
		paddingLeft: 10,
	},
	list: {
		height: 45,
		borderBottomWidth: 1,
		borderColor: 'rgb(222,222,222)',
		justifyContent: 'center',
		paddingLeft: 20,
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

module.exports = OrderListDetail;