import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

export class Home extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text>Home</Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(Home)
