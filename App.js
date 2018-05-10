import React, { Component } from 'react';
import { StackNavigator, SwitchNavigator } from 'react-navigation';
import { Provider } from 'react-redux'

import { store } from './artifacts/redux/store'
import { Login } from './artifacts/containers/Login'
import { Home } from './artifacts/containers/Home'
import AuthLoading from './artifacts/containers/AuthLoading'

console.log(AuthLoading)
const AppStack = StackNavigator({ Home: Home });
const AuthStack = StackNavigator({ login: Login });

const MainNavigator = SwitchNavigator(
  {
    AuthLoading: AuthLoading,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
);


export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    );
  }
}

