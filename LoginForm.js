import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import firebase from 'firebase';
import { TitledInput } from './TitledInput';
import Spinner from './Spinner';
import Tasker from './Tasker';

export default class LoginForm extends Component {
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
    renderButtonOrSpinner() {
        if (this.state.isLoggedIn) {
            return <Tasker />;    
        }
        else
            return <Button onPress={this.onLoginPress.bind(this)} title="Вход" />;
    }
    render() {
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
                    
                  
                    {this.renderButtonOrSpinner()}
            </View>
        );
    }
}
const styles = {
    errorTextStyle: {
        color: '#E64A19',
        alignSelf: 'center',
        paddingTop: 10,
        paddingBottom: 10
    }
};
