'use strict';
var React = require('react-native');
var Util = require('../util');
var width = Util.size.width;
console.log(width);
var offLeft = width / 6 - 16;

var {
	View,
	Text,
	StyleSheet,
	Image,
	TouchableHighlight,
	ActionSheetIOS
} = React;

var Me = React.createClass({
	render() {
		return(
			<View style={styles.container}>
				<View style={styles.header}>
					<TouchableHighlight
						onPress={this.phoneTip}
          	underlayColor="rgba(43,182,191,0.5)">
						<Image
							style={styles.phone}
						  source={require('image!phone')} />
					</TouchableHighlight>
					<View style={styles.portraitWrap}>
						<Image
						  style={[styles.portrait,{backgroundColor:'white'}]}
						  source={require('image!userpic')} />
					</View>
					<View style={styles.info}>
						<Text style={styles.name}>张小凡（男）</Text>
						<View style={styles.pro}>
							<Image
								style={{height:16,marginRight:5}}
							  source={require('image!littleuser')} />
							<Text style={{marginRight:20,color:'white'}}>大三学生</Text>
							<Image
								style={{height:16}}
							  source={require('image!littlenearby')} />
							<Text style={{color:'white'}}>xx学校</Text>
						</View>
					</View>
					<View style={styles.signatureWrap}>
						<Text style={[styles.signature]}>To make each day count</Text>
					</View>
				</View>
				<View style={styles.likeWhat}>
					<View style={[styles.container,{flexDirection:'row'}]}>
						<View style={[styles.container,styles.verticalCenter,{borderBottomWidth:2,borderColor:'silver',borderRightWidth:2}]}>
							<Image
							  style={styles.likeWhatImage}
							  source={require('image!yuwen')} />
							  <Text style={styles.imageTitle}>语文</Text>
						</View>
						<View style={[styles.container,styles.verticalCenter,{borderBottomWidth:2,borderColor:'silver',borderRightWidth:2}]}>
							<Image
							  style={styles.likeWhatImage}
							  source={require('image!shuxue')} />
							 	<Text style={styles.imageTitle}>数学</Text>
						</View>
						<View style={[styles.container,styles.verticalCenter,{borderBottomWidth:2,borderColor:'silver'}]}>
							<Image
							  style={styles.likeWhatImage}
							  source={require('image!yingyu')} />
							  <Text style={styles.imageTitle}>英语</Text>
						</View>
					</View>
					<View style={[styles.container,{flexDirection:'row'}]}>
						<View style={[styles.container,styles.verticalCenter,{borderRightWidth:2,borderColor:'silver'}]}>
							<Image
							  style={styles.likeWhatImage}
							  source={require('image!book')} />
						</View>
						<View style={[styles.container,styles.verticalCenter,{borderRightWidth:2,borderColor:'silver'}]}>
							<Image
							  style={styles.likeWhatImage}
							  source={require('image!book')} />
						</View>
						<View style={[styles.container,styles.verticalCenter]}>
							<Image
							  style={styles.likeWhatImage}
							  source={require('image!book')} />
						</View>
					</View>
				</View>
				<View style={styles.msg}>
					<Image
						style={{width:20,height:20,marginTop:9,marginRight:5}}
					  source={require('image!msg')} />
					<Text style={styles.msgFont}>21</Text>
					<Image
						style={{width:20,height:20,marginTop:9,marginRight:5}}
					  source={require('image!heart')} />
					<Text style={styles.msgFont}>2</Text>
				</View>
			</View>
		)
	},
	phoneTip() {
		ActionSheetIOS.showActionSheetWithOptions({
			options: [
				'拨打电话',
				'发送短信',
				'发送邮件',
				'取消'
			],
			cancelButtonIndex: 3,
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
	verticalCenter:{
		justifyContent:'center',
		alignItems:'center'
	},
	phone:{
		position: 'absolute',
		right:20,
		top:80,
	},
	header: {
		backgroundColor: 'rgb(43,182,191)',
	},
	portraitWrap:{
		marginTop: 120,
		alignItems: 'center',
	},
	portrait: {
		height: 80,
		width: 80,
		borderRadius: 40,
		borderWidth:2,
		borderColor:'white'
	},
	info: {
		alignItems: 'center'
	},
	name: {
		fontSize: 20,
		fontWeight: 'bold',
		color: 'white',
		marginTop:20,
		marginBottom: 20,
	},
	pro: {
		flexDirection: 'row',
		height:30,
		justifyContent: 'center',
	},
	signatureWrap:{
		borderTopWidth:1,
		borderTopColor:'white',
		alignItems:'center'
	},
	signature:{
		fontSize:18,
		color:'white',
		marginTop:15,
		marginBottom:15,
	},

	likeWhat:{
		height:240,
		backgroundColor:'rgb(249,252,253)'
	},
	likeWhatImage:{
		width:70,
		height:70,
		borderRadius:34,
		borderWidth:2,
		borderColor:'rgb(107,107,107)'
	},
	imageTitle: {
		position: 'absolute',
		left: offLeft,
		bottom: 6,
		fontSize:16,
		fontWeight:'bold'
	},
	msg:{
		paddingLeft:20,
		flexDirection:'row',
	},
	msgFont:{
		height:30,
		lineHeight:30,
		fontSize:18,
		marginRight:20
	}
});

module.exports = Me;