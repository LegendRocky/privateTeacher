/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');

var {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} = React;

var TouchableHighlightt = React.createClass({
  render() {
    return (
      <View style={[styles.container,{marginTop:65}]}>
        <TouchableHighlight
          activeOpacity={0.4}
          onHideUnderlay={()=>{console.log('隐藏阴影背景')}}
          onShowUnderlay={()=>{console.log('出现阴影背景')}}
          onPressOut={()=>{console.log('press out once')}}
          onPress={()=>{console.log('press once')}}
          onPressIn={()=>{console.log('press in once')}}
          onLongPress={()=>{console.log('longpress once')}}
          style={{}}
          underlayColor='#fff'>
          <Text>touchablehightlight</Text>
        </TouchableHighlight>
      </View>
    );
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

module.exports = TouchableHighlightt;
