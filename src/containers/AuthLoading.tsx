import { AsyncStorage, View, ActivityIndicator, StatusBar, StyleSheet, AppRegistry } from 'react-native'
import React, { Component } from 'react'
import { StackNavigation } from 'interfaces/NavigationProps'

interface Props { navigation: StackNavigation }
export default class AuthLoading extends Component<Props> {
    constructor(props) {
        super(props)
        this._bootstrapAsync()
    }

    // Fetch the token from storage then navigate to our appropriate place
    _bootstrapAsync = async () => {
        const userToken = await AsyncStorage.getItem('userToken')

        // This will switch to the App screen or Auth screen and this loading
        // screen will be unmounted and thrown away.
        setTimeout(() => {
            this.props.navigation.navigate(userToken ? 'App' : 'Auth')
        }, 1000)
    }

    // Render any loading content that you like here
    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator />
                <StatusBar barStyle='default' hidden={true} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

AppRegistry.registerComponent('AuthLoading', () => AuthLoading)