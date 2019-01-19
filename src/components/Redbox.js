'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
} from 'react-native';

class Redbox extends Component {
	
  render() {
  	let {container} = styles;
    return (
      <View style={container}/>
    );
  }
}

const styles = StyleSheet.create({
	container:{
		width: 100,
		height:100,
		backgroundColor: 'red'
	}

});


export default Redbox;