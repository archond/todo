import React, { Component } from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';
import Todo from './Todo.js';
import { TitledInput } from './TitledInput.js';

export default class Tasker extends Component {
  state = {
    todos: [''],
    task: '',
    result: 1 
  }

  renderTodos = () => {
    return this.state.todos.slice(0).reverse().map(todo => {
      return <Todo key={todo} name={todo} />
    })
  }

  addTodo = () => {
    this.setState({ 
      todos: [...this.state.todos, this.state.task ] 
    });
  }
  render() {
    return (
      <View style={{ marginTop: 20 }}>
        <Button title='Добавить задачу' onPress={this.addTodo} />
        <TitledInput
          label='Задача'
          placeholder=''
          value={this.state.task}
          onChangeText={task => this.setState({ task })}
        />
        {this.renderTodos()}
        <Button title='Назад' onPress={this.props.onLogoutPress.bind(this)} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    color: 'black',
    fontSize: 30,
    margin: 30
  }
});
