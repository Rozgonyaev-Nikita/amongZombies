import React, { FC } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/Fontisto';
import Icon3 from 'react-native-vector-icons/AntDesign';

interface IHeaderProps {

}

const Header: FC<IHeaderProps> = () => {

    const handlePress = () => {
        console.log('karp')
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={handlePress}>
            <Icon name="menu" size={30} color="#fff" />
            </TouchableOpacity>
            <View style={styles.controlPanel}>
            <TouchableOpacity style={styles.button} onPress={handlePress}>
                <Icon3 name="question" size={30} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handlePress}>
                <Icon2 name="player-settings" size={30} color="#fff" />
            </TouchableOpacity>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        flexDirection: 'row',
        backgroundColor: '#222',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingVertical: 10,
        height: 60,
    },
    button: {
        // width: 100
    },
    icons: {
        width: 100
    },
    controlPanel: {
        // flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 110
    },
});

export default Header