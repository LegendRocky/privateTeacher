'use strict';

var React = require('react-native');

var {
	View,
	Text,
	StyleSheet,
	TouchableHighlight,
	Image,
	ActionSheetIOS
} = React;

var EditMe = React.createClass({
	render() {
		return(
			<View style={[styles.container,{marginTop:65}]}>
				<View style={styles.userpicWrap}>
					<TouchableHighlight
					  onPress={this._editUserpic}
					  style={{}}
					  underlayColor='rgb(242,242,242)'>
					  <Image
						  style={[styles.portrait,{backgroundColor:'white'}]}
						  source={require('image!userpic')} />
					</TouchableHighlight>
				</View>
				<View style={styles.listItem}>
					<View style={[styles.container,styles.justifyContent]}>
						<Text style={{justifyContent:'center'}}>姓名：</Text>
					</View>
					<View style={styles.justifyContent}>
						<TouchableHighlight
						  onPress={()=>{alert(1)}}
						  style={{}}
						  underlayColor='#fff'>
							<Text>编辑您的姓名></Text>						  
						</TouchableHighlight>
					</View>
				</View>
				<View style={styles.listItem}>
					<View style={[styles.container,styles.justifyContent]}>
						<Text>手机号码：</Text>
					</View>
					<View style={styles.justifyContent}>
						<TouchableHighlight
						  onPress={()=>{alert(1)}}
						  style={{}}
						  underlayColor='#fff'>
							<Text>15208322401</Text>						  
						</TouchableHighlight>
					</View>
				</View>
				<View style={styles.listItem}>
					<View style={[styles.container,styles.justifyContent]}>
						<Text>家庭地址：</Text>
					</View>
					<View style={styles.justifyContent}>
						<TouchableHighlight
						  onPress={()=>{alert(1)}}
						  style={{}}
						  underlayColor='#fff'>
							<Text>四川省广安市武胜县乐善场镇</Text>					  
						</TouchableHighlight>
					</View>
					<View style={styles.justifyContent}>
						<Image
						  style={{}}
						  source={require('image!littlenearby')} />
					</View>
				</View>
				<View style={styles.listItem}>
					<View style={[styles.container,styles.justifyContent]}>
						<Text>职业／学段：</Text>
					</View>
					<View style={styles.justifyContent}>
						<TouchableHighlight
						  onPress={()=>{alert(1)}}
						  style={{}}
						  underlayColor='#fff'>
							<Text>xx小学，小学三年级</Text>					  
						</TouchableHighlight>
					</View>
				</View>
				<View style={styles.listItem}>
					<View style={[styles.container,styles.justifyContent]}>
						<Text>性别：</Text>
					</View>
					<View style={styles.justifyContent}>
						<TouchableHighlight
						  onPress={()=>{alert(1)}}
						  style={{}}
						  underlayColor='#fff'>
							<Text>男</Text>					  
						</TouchableHighlight>
					</View>
				</View>
				<TouchableHighlight
				  onPress={()=>{alert(1)}}
				  style={styles.btn}
				  underlayColor='#fff'>
				  <Text style={{color:'white'}}>确定</Text>
				</TouchableHighlight>
			</View>
		)
	},
	_editUserpic() {
		ActionSheetIOS.showActionSheetWithOptions({
			options: [
				'拍摄新照片',
				'从照片库选取',
				'取消'
			],
			cancelButtonIndex: 2,
			destructiveButtonIndex: 0,
		},function(index){
			if(index === 1){
				alert('您点击的是拨打电话')
			}
		});
	}
});

var styles = StyleSheet.create({
	container: {
		flex: 1
	},
	userpicWrap: {
		backgroundColor: 'rgb(242,242,242)',
		padding: 10,
		alignItems: 'center'
	},
	portrait: {
		height: 80,
		width: 80,
		borderRadius: 40,
		borderWidth:2,
		borderColor:'white'
	},
	listItem: {
		flexDirection: 'row',
		paddingLeft: 10,
		paddingRight: 10,
		height: 45,
		borderBottomWidth:1,
		borderBottomColor: 'silver',
		justifyContent: 'center'
	},
	justifyContent: {
		justifyContent: 'center',
	},
	btn:{
		marginLeft:20,
		marginRight:20,
		marginTop:20,
		height:40,
		justifyContent:'center',
		alignItems: 'center',
		backgroundColor:'#3BC1FF',
		borderRadius: 5,
	}
});

module.exports = EditMe;