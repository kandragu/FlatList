'use strict';

import React, { Component } from 'react';
 import Redbox from '../components/Redbox.js';
import GreenBox from '../components/GreenBox.js';

import {
  StyleSheet,
  View,
  Text
} from 'react-native';

class Flexbox extends Component {
  render() {
    return (
      <View style={styles.container}>
      	<Text> Flexbox</Text>
      	<Redbox />
      	<GreenBox />

      </View>
    );
  }
}

const styles = StyleSheet.create({
	container:{
		flex:1,
		justifyContent:'center',
		alignItems:'center'
	}
});


export default Flexbox;