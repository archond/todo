import * as firebase from 'firebase';
import Tasker from './Tasker.js';
import fireConf from './firebaseconfig';
import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { TitledInput } from './TitledInput';

export default class App extends fireConf {
    state = { 
      email: '', 
      password: '',
      error: '', 
      loading: false,
      isLoggedIn: false
    };
    registration () {
        this.setState({ error: '', loading: false});

        const { email, password } = this.state;
        firebase.auth().createUserWithEmailAndPassword(email, password)
              .then(() => { this.setState({ error: '', loading: false }); })
              .catch(() => { 
                this.setState({ error: 'Аккаунт уже используется', loading: false });
              });
    }
    onLoginPress() {
        this.setState({ error: '', loading: false });

        const { email, password } = this.state;
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => { this.setState({ error: '', loading: false, isLoggedIn: true }); })
            .catch(() => {
              this.setState({ error: 'Неверный email или пароль', loading: false });
            });
    }
   
    render() {
      if (this.state.isLoggedIn)
        return (<Tasker
            onLogoutPress={() => this.setState({isLoggedIn: false})}
        />);
      else
        return (
          <View>
                    <TitledInput 
                        label='Email Address'
                        placeholder='@mail'
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}
                    />
                    <TitledInput 
                        label='Password'
                        autoCorrect={false}
                        placeholder='*******'
                        secureTextEntry
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}
                    />
                    <Text style={styles.errorTextStyle}>{this.state.error}</Text>
                    <Button onPress={this.onLoginPress.bind(this)} title="Вход" />
                    <Button onPress={this.registration.bind(this)} title="Регистрация" />
            </View>
        );}
}
const styles = {
    errorTextStyle: {
        color: '#E64A19',
        alignSelf: 'center',
        paddingTop: 10,
        paddingBottom: 10
    }
};
