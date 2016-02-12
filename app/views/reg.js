'use strict';
var React = require('react-native');
var Util = require('./util');
var AdSupportIOS = require('AdSupportIOS');
var Service = require('./service');

var inputWidth = Util.size.width - 60;

var{
	View,
	Text,
	StyleSheet,
	TextInput,
	TouchableHighlight,
	AlertIOS,
	AsyncStorage
} = React;

var Reg = React.createClass({
	getInitialState() {
		return{
			btnValue: '获取验证码',
			btnState: false,
		}
	},
	_getPhoneNumber(val) {
		var phoneNumber = val;
		this.setState({
			phoneNumber: phoneNumber
		})
	},
	_getPassword(val) {
		var password = val;
		this.setState({
			password: password
		})
	},
	_getrPassword(val) {
		var rpassword = val;
		this.setState({
			rpassword: rpassword
		})
	},
	
	render() {
		return(
			<View style={[styles.container,{marginTop:20}]}>
				<TextInput
					maxLength={11}
					style={[styles.input,{width:inputWidth}]}
					onChangeText={this._getPhoneNumber}
					placeholder="请输入您的手机号码" />
				<View style={{flexDirection:'row'}}>
					<TextInput
					style={[styles.input,{flex:1}]}
					placeholder="请输入验证码" />
					<TouchableHighlight 
          	underlayColor="rgba(59,193,255,0.7)" 
          	style={[styles.btn,{width:120,marginRight:30}]} 
          	onPress={this.getCaptcha}>
            <Text style={{color:'#fff',fontSize:16}}>{this.state.btnValue}</Text>
          </TouchableHighlight>
				</View>
				<TextInput
					style={[styles.input,{width:inputWidth}]}
					onChangeText={this._getPassword}
					placeholder="请设置登录密码"
					password={true} />
				<TextInput
					style={[styles.input,{width:inputWidth}]}
					onChangeText={this._getrPassword}
					placeholder="请确认密码"
					password={true} />
				<View>
					<TouchableHighlight
						onPress={this._createUser}
          	underlayColor="rgba(59,193,255,0.7)"
          	style={[styles.btn,{width:inputWidth,marginLeft:30}]}>
            <Text style={{color:'#fff',fontSize:16}}>提交</Text>
          </TouchableHighlight>
				</View>
			</View>
		)
	},
	_createUser() {
		var phoneNumber = this.state.phoneNumber;
		var password = this.state.password;
		var rpassword = this.state.rpassword;
		var path = Service.host + Service.reg;
		var that = this;

		//手机号码验证
		var tel = this.state.phoneNumber;
		
		//^表达式开始的位置，$表达式结束的位置?匹配零次或者一次
		var reg = /^0?1[3|4|5|8][0-9]\d{8}$/;

		if(reg.test(tel)) {
			Util.post(path, {
		    phoneNumber: phoneNumber,
		    password: password,
		    rpassword: rpassword
		  }, function(data){
		  	console.log('注册返回信息如下');
		  	console.log(data.user);
		  	if(data.user){
		  		console.log('注册成功，返回的用户信息如下');
		  		var user = (data.user.ops)[0];
		  		console.log(user.phoneNumber);
		  		console.log('并将用户信息保存在state中，以备后用');
		  		//注册成功，返回到登录页面，并且将手机号码和密码自动填充到登录页面
		  		var newState = {
		  			phoneNumber: user.phoneNumber,
		  			password: user.password,
		  			isLoginShow: false,
		  		}
		  		that.props.callbackParent(newState);
		  	}else{
		  		console.log('注册失败，请重新注册');
		  	}
		  });
		}else{
		  alert("请输入有效的11位手机号码");
		};
	},
	getCaptcha() {
		let clock = '';
		let nums = 60;
		if(this.state.btnState){
			alert('请稍后再点击');
		}
		var _that = this
		function int(){
			nums--;
			if(nums>0){
				_that.setState({
					btnValue: nums
				})
			}else{
				clearInterval(clock);
				_that.setState({
					btnValue: '重新获取'
				})
				nums = 60;
			}
		}
		clock = setInterval(int,1000);
	}
});

var styles = StyleSheet.create({
	container: {
		flex:1
	},
	input: {
		height: 40,
		borderColor: 'gray',
		borderWidth: 1,
		marginTop:15,
		marginLeft: 30,
		paddingLeft:20,
		borderRadius: 5
	},
	btn:{
		marginTop:15,
		marginLeft:10,
    height:40,
    backgroundColor:'#3BC1FF',
    justifyContent:'center',
    alignItems:'center',
    borderRadius: 5,
  }
})

module.exports = Reg;