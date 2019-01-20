import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';

import Redbox from '../components/Redbox';
import GreenBox from '../components/GreenBox';


class Flexbox extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text> Flexbox</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Intro')} >
        <Text>Press here</Text>
        </TouchableOpacity>
        <Redbox />
        <GreenBox />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});


export default Flexbox;
