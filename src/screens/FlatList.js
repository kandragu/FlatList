import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  FlatList
} from 'react-native';
import { Text, ListItem, Left, Body, Icon, Right, Title } from "native-base";


class FlatListWithData extends Component {
static navigationOptions = {
  headerTitle: 'Flat List',
}

state = {
  loading: false,
  data: [],
  page: 1,
  seed: 1,
  error: null,
  refreshing: false,
};

componentDidMount() {
  debugger;
  const { page, seed } = this.state;
  const url = `https://randomuser.me/api/?seed=${seed}&page=${page}&results=20`;

  fetch(url)
    .then(res => res.json())
    .then((res) => {
      this.setState({
        data: page === 1 ? res.results : [...this.state.data, ...res.results],
        error: res.error || null,
        loading: false,
        refreshing: false,
      });
    });
}

  _renderItem = ({ item }) => {
    return (
      <ListItem style={{ marginLeft: 0 }}>
        <Body>
          <Text>{item.name.first}</Text>
        </Body>
      </ListItem>
    );
  }

  render() {
    return (
      <FlatList
        data={this.state.data}
        renderItem={this._renderItem}
        keyExtractor={item => item.email}
      />
    );
  }
}

const styles = StyleSheet.create({
  container:{

  }
});


export default FlatListWithData;
