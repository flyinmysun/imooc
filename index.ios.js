/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import App from './app/App'

export default class jd extends Component {
  render() {
    return (
      <App/>
    );
  }
}

const styles = StyleSheet.create({

});

AppRegistry.registerComponent('jd', () => jd);
