import React, { Component } from 'react'
import { View, TextInput, Button, StyleSheet, Image } from 'react-native'
import { connect } from 'react-redux'
import images from 'theme/Images'

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
            <View style={styles.viewContainer}>
                <View style={styles.loginImageContainer}>
                    <Image source={images.logo} style={styles.loginImage} />
                </View>
                <View style={styles.container}>
                    <TextInput style={styles.row} placeholder='Ingresa tu email'
                        keyboardType={'email-address'}
                        onChangeText={(email) => this.setState({ email })} />
                    <TextInput style={styles.row} placeholder='Ingresa tu contraseña' secureTextEntry={true} />
                    <Button onPress={this.onSubmit} title='Ingresar' accessibilityLabel='Ingresa a la plataforma' />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    viewContainer: {
        backgroundColor: '#f4f4f4',
        flex: 1,
        paddingHorizontal: '16.5%',
        height: '100%'
    },
    container: {
        flex: 2
    },
    row: {
        padding: 5,
        marginBottom: 15,
        alignItems: 'stretch'
    },
    loginImage: {
        opacity: 1,
        width: 200,
        height: 100,
        resizeMode: 'contain'
    },
    loginImageContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: 200
    }
})

const mapStateToProps = (state) => ({
    state
})

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
