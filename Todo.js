import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Todo extends Component {
    render() {  
      return (
        <View style={{alignItems: 'center'}}>
          <Text>{`${this.props.name}
                `} </Text>
        </View>
      );
    }
}
