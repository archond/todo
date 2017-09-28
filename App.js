import React, { Component } from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';
import Todo from './Todo.js';

export default class App extends Component {
  state = {
    todos: [],
    result: 1 
  }

  renderTodos = () => {
    return this.state.todos.slice(0).reverse().map(todo => {
      return <Todo key={todo} name={todo} />
    })
  }

  addTodo = () => {
    this.setState({ 
      todos: [...this.state.todos, this.state.result++ ] 
    });
    console.log(this.renderTodos());
  }
 
  render() {
    return (
      <View style={{ marginTop: 20 }}>
        <Button title='+' onPress={this.addTodo} />
        {this.renderTodos()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    color: 'black',
    fontSize: 30,
    margin: 80
  }
});

