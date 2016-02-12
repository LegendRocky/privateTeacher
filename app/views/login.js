'use strict';
var React = require('react-native');
var Util = require('./util');
var Reg = require('./reg');
var Service = require('./service');
var inputWidth = Util.size.width - 60;
var AdSupportIOS = require('AdSupportIOS');

var {
	View,
	Text,
	StyleSheet,
	Input,
	TextInput,
	TouchableHighlight,
	AlertIOS,
	Image,
	AsyncStorage,
} = React;

var Login = React.createClass({
	getInitialState() {
		return{
			isLoginShow: false,
			phoneNumber: '手机号码',
			password: '密码',
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
	_login() {
		var phoneNumber = this.state.phoneNumber;
		var password = this.state.password;
		var path = Service.host + Service.login;
		var that = this;

		AdSupportIOS.getAdvertisingTrackingEnabled(function(){
      AdSupportIOS.getAdvertisingId(function(deviceId){
        Util.post(path, {
          phoneNumber: phoneNumber,
          password: password,
          deviceId: deviceId,
        }, function(data){
        	console.log(data);
          if(data.status){
          	alert('登录成功');
            var user = data.data;
            //加入数据到本地
            AsyncStorage.multiSet([
              ['username', user.username],
              ['token', user.token],
              ['userid', user.userid],
              ['email', user.email],
              ['tel', user.tel],
              ['partment', user.partment],
              ['tag', user.tag],
            ], function(err){
              if(!err){
                that.setState({
                  showLogin: {
                    height:0,
                    width:0,
                    flex:0,
                  },
                  showIndex:{
                    flex:1,
                    opacity:1
                  },
                  isLoadingShow: false
                });
              }
            });

          }else{
            AlertIOS.alert('登录', '用户名或者密码错误');
            that.setState({
              showLogin: {
                flex:1,
                opacity:1
              },
              showIndex:{
                height:0,
                width:0,
                flex:0,
              },
              isLoadingShow: false
            });
          }
        });
      }, function(){
        AlertIOS.alert('设置','无法获取设备唯一标识');
      });
    }, function(){
      AlertIOS.alert('设置','无法获取设备唯一标识，请关闭设置->隐私->广告->限制广告跟踪');
    });
	},
	onChildChanged(newState) {
		this.setState(newState);
	},
	render() {
		return(
			<View style={[styles.container,{marginTop:70}]}>
				{!this.state.isLoginShow ?
				<View style={styles.container}>
				<View style={styles.header}>
					<Text style={styles.title}>绵阳家教</Text>
					<Text style={styles.subtitle}>－百分百家教－</Text>
				</View>
				<View>
					<TextInput
						clearBottonMode='while-editing'
						maxLength={11}
						autoFocus={true}
						placeholderTextColor='red'
						style={[styles.input,{width: inputWidth}]}
						onChangeText={this._getPhoneNumber}
						placeholder={this.state.phoneNumber}
						onFocus={()=>{console.log(1)}} />
					<Image
						style={{position:'absolute',left:40,top:25}}
					  source={require('image!user')} />
					<TextInput
						password="true"
						placeholderTextColor='red'
						style={[styles.input,{width: inputWidth}]}
						onChangeText={this._getPassword}
						placeholder={this.state.password === '密码' ? this.state.password : null}
						value={this.state.password === '密码' ? null : this.state.password} />
					<Image
						style={{position:'absolute',left:40,top:77}}
					  source={require('image!lock')} />
					<View>
	          <TouchableHighlight 
	          	underlayColor="#fff" 
	          	style={styles.btn} 
	          	onPress={this._login}>
	            <Text style={{color:'#fff',fontSize:24}}>登录</Text>
	          </TouchableHighlight>
        	</View>
        	<View style={{height:40,marginTop:10,flex:1,flexDirection:'row',marginLeft:30,width:inputWidth,height:40}}>
        		<TouchableHighlight
        			underlayColor="#fff"
        			onPress={this.forget}
        			style={{flex:1}}>
        		  <Text>忘记密码?</Text>
        		</TouchableHighlight>
        		<TouchableHighlight
        			onPress={this.reg}
        		  underlayColor='#fff'>
        		  <Text >立即注册></Text>
        		</TouchableHighlight>
        	</View>
        </View>
        <View style={[styles.container,{alignItems:'center',justifyContent:'center'}]}>
      		<Text style={{color:'red'}}>使用其他帐号登陆</Text>
      		<View style={{flexDirection:'row',alignItems:'center',marginTop:20}}>
      			<TouchableHighlight 
	          	underlayColor="#fff"	          	
	          	onPress={this._login}>
	            <Image
								style={[styles.iconBtn,{marginRight:30,marginLeft:30,borderWidth:2,borderColor:'rgb(107,107,107)'}]}
							  source={require('image!weixin')} />
	          </TouchableHighlight>
	          <TouchableHighlight 
	          	underlayColor="#fff"
	          	onPress={this._login}>
	            <Image
								style={styles.iconBtn}
							  source={require('image!sina')} />
	          </TouchableHighlight>
	          <TouchableHighlight 
	          	underlayColor="#fff"
	          	onPress={this._login}>
	            <Image
								style={[styles.iconBtn,{borderWidth:2,borderColor:'rgb(107,107,107)'}]}
							  source={require('image!qqq')} />
	          </TouchableHighlight>
      		</View>
      	</View>
      	</View>
      	:
      	<Reg 
      		callbackParent={this.onChildChanged} />
      	}
			</View>
		)
	},
	forget() {
		console.log(1);
	},
	reg() {
		this.setState({
			isLoginShow: true
		})
	}
})

var styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	center:{
		justifyContent: 'center',
		alignItems: 'center',
	},
	header: {
		height: 70,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 20
	},
	title: {
		fontSize: 40,
		color: 'green'
	},
	subtitle: {
		fontSize:20,
		marginTop:10,
		color: 'green'
	},
	input:{
		height: 40,
		borderColor: 'gray',
		borderWidth: 1,
		marginTop:15,
		marginLeft: 30,
		paddingLeft:40,
		borderRadius: 5
	},
	btn:{
		marginLeft:30,
    marginTop:20,
    width:inputWidth,
    height:40,
    backgroundColor:'#3BC1FF',
    justifyContent:'center',
    alignItems:'center',
    borderRadius: 5,
  },
  iconBtn:{
  	width:60,
  	height:60,
  	marginRight:30,
  	borderRadius:30,
  	backgroundColor:'rgb(238,238,238)'
  }
})

module.exports = Login;