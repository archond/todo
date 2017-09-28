import 'react-native';
import React, { Component } from 'react';
import App from './App.js';
import Todo from './Todo.js';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(
    <App />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});