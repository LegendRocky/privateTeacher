'use strict';

var React = require('react-native');
var OrderListDetail = require('./OrderListDetail');
var Util = require('../util');
var Service = require('../service');
var TeacherItem = require('./TeacherItem');
var ControlledRefreshableListView = require('react-native-refreshable-listview');
 
var {
	View,
	Text,
	StyleSheet,
	TouchableHighlight,
	Image,
	ListView,
	ScrollView
} = React;


//找老师的页面的信息是从服务器上获取的老师信息
//位置由远到近排列，并提供多条件筛选。
//信息包括：科目，时间段，收费标准，以及学生评价，留言
var FindTeacher = React.createClass({
	getInitialState() {
		var ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 != r2
		});
		return {
			dataSource: ds.cloneWithRows([]),
			endReached: false,
			loaded: false
		}
	},
	render() {
		if(!this.state.loaded){
			return this.renderLoadingView();
		};

		return (
			<ScrollView style={[styles.container,{marginTop:65}]}>
				<ListView
				  dataSource={this.state.dataSource}
				  renderRow={this._renderRow}
					onEndReached={this._endReached} />
			</ScrollView>
		);
	},
	_endReached() {
		
	},
	renderLoadingView() {
    return (
      <View style={[styles.container,{marginTop:65}]}>
        <Text>
         	努力加载中...
        </Text>
      </View>
    );
  },
	componentDidMount() {
		this.getData();
	},
	getData() {
		var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2});
		var _that = this;
		var url = Service.host + Service.findTeacher;
		//var url = 'https://api.douban.com/v2/book/search?count=10&q=互联网';
		Util.getJSON (url, function (data){
			var users = data.user;
			_that.setState({
				dataSource: ds.cloneWithRows(users),
				loaded: true,
				endReached: true,
			})
		})
	},
	_renderRow(row) {
		return(
			<TeacherItem row={row} nav={this.props.navigator} onPress={this._loadPage.bind(this, row._id)} />
		)
	},
	//加载详情页面，并通过props将id传递给子元素，这样详情页就可以根据id去数据库查找相关详情
	_loadPage(id) {
		this.props.navigator.push({
			title: '订单详情',
			component: OrderListDetail,
			passProps:{
				id: id
			}
		});
	},
	_press() {
		this.props.navigator.push({
			title: '订单详情',
			component: OrderListDetail
		});
	},
})

var styles = StyleSheet.create({
	container: {
		flex: 1
	},
})

module.exports = FindTeacher;