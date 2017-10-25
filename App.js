/**
 * @flow
 */

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// const add = (a: string, b: string) => a + b;

// add('hi', 'fly');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function app() {
  return (
    <View style={styles.container}>
      <Text>Hello World</Text>
    </View>
  );
}
/* export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
} */
