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
        console.log('search')
        const keys = await AsyncStorage.getAllKeys()
        const exists = keys.indexOf('userToken')
        console.log(exists)
        const userToken = exists > 0 ? await AsyncStorage.getItem('userToken') : undefined
        console.log(userToken ? 'Existe' : 'No existe')
        // This will switch to the App screen or Auth screen and this loading
        // screen will be unmounted and thrown away.
        this.props.navigation.navigate(userToken ? 'App' : 'Auth')
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