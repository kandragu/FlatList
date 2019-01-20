import React from 'react';

import {
  View,
  Text,
  ScrollView,
  Dimensions,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

const Walkthrough = (props) => {
  const { container } = styles;
  const { navigation } = props;
  return (
    <ScrollView
      horizontal
      pagingEnabled
      style={styles.container}
    >

      <View style={styles.outer}>
        <Text style={styles.innerText}>Welcome to LCO app</Text>
      </View>
      <View style={[styles.outer, styles.red]}>
        <Text style={styles.innerText}>Best quality vidoes</Text>
      </View>
      <View style={[styles.outer, styles.green]}>
        <Text style={styles.innerText}>Available on iOS and Android</Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
          <Text>SignIn</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {


  },
  outer: {
    backgroundColor: '#007bb6',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  innerText: {
    color: '#fff',
    fontSize: 23,
    fontWeight: 'bold',
  },
  red: {
    backgroundColor: '#dd4b39',
  },
  green: {
    backgroundColor: '#27ae60',
  }
});

export default Walkthrough;
