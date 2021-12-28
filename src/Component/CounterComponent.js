import React, {Component} from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';

class CounterComponent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log('value deee', this.props.increment);
    return (
      <View style={styles.container}>
        <Button
          title="Increase Count"
          onPress={this.props.increment}
          color="#841584"
        />

        <Text style={styles.text}>{this.props.count}</Text>
        <Button
          title="Decrement Count"
          onPress={this.props.decrement}
          color="#841584"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    borderRadius: 6,
    margin: 60,
  },
  text: {
    fontSize: 24,
    padding: 15,
    justifyContent: 'center',
    textAlign: 'center',
  },
});

export default CounterComponent;
