import React from 'react';

import {
  StyleSheet,
  View,
} from 'react-native';

const GreenBox = () => {
  const { container } = styles;
  return (
    <View style={container} />
  );
};

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    backgroundColor: 'green'
  }
});


export default GreenBox;
