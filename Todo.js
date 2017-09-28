import React, { Component } from 'react';
import { Text, View } from 'react-native';

class Todo extends Component {
    render() {  
      return (
        <View style={{alignItems: 'center'}}>
          <Text>{`To do ${this.props.name}`} </Text>
        </View>
      );
      
    }
}
export default Todo

