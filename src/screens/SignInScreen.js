import React from 'react';

import {
  View,
  Button,
  StyleSheet,
  AsyncStorage
} from 'react-native';

class SignInScreen extends React.Component {
  static navigationOptions = {
    title: 'Please sign in',
  };

  _signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('App');
  };

  render() {
    return (
      <View style={styles.container}>
        <Button title="Sign in!" onPress={this._signInAsync} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});


export default SignInScreen;
