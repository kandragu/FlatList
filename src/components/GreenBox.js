'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
} from 'react-native';

class GreenBox extends Component {
  render() {
    return (
      <View style={styles.container}/>
    );
  }
}

const styles = StyleSheet.create({
	container:{
		width: 100,
		height:100,
		backgroundColor:'green'
	}
});


export default GreenBox;