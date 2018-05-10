import React, { Component } from 'react'
import { View, TextInput, Button, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

export class Login extends Component {
    static navigationOptions = {
        // tslint:disable-next-line:no-null-keyword
        header: null
    }

    onSubmit() {
        console.log('Submitted')
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput placeholder='Ingresa tu email'
                    onChangeText={(email) => this.setState({ email })} />
                <TextInput placeholder='Ingresa tu contraseña' secureTextEntry={true} />
                <Button onPress={this.onSubmit} title='Ingresar' accessibilityLabel='Ingresa a la plataforma' />
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

const mapStateToProps = (state) => ({
    state
})

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
