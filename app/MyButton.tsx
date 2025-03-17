import React, { FC, useState } from 'react';
import { Image, StyleSheet, TouchableOpacity, View, Text } from 'react-native';

interface Props {
    path: string,
    property?: string,
    propertyValue?: number,
    propetryTarget?: number,
    flag?: boolean,
    altPath?: string,
    spec?: boolean,
    navigation: any
}

const MyButton: FC<Props> = ({ path, property, propertyValue, propetryTarget, flag, altPath, navigation, spec }) => {
    const [disable, setDisable] = useState(false);
    let img;

    // Determine the appropriate path based on conditions
    if (!Array.isArray(propertyValue)) {
        path = path; // Keep the original path
    } else {
        path = propertyValue.every((value, index) => value > propetryTarget[index]) ? path : altPath;
    }

    if (spec && !altPath) {
        setDisable(true);
    }

    switch (property) {
        case 'power':
            img = require('../assets/images/power.png');
            break;
        case 'agility':
            img = require('../assets/images/agility.png');
            break;
        case 'intellect':
            img = require('../assets/images/intellect.png');
            break;
        case 'stealth':
            img = require('../assets/images/stealth.png');
            break;
        case 'charisma':
            img = require('../assets/images/charisma.png');
            break;
        default:
            img = null;
    }

    const navig = () => {
        if (spec && !altPath) {
            setDisable(true);
            return;
        }

        if (path) {
            console.log("Navigating to:", path);
            navigation.replace(path);
        } else {
            console.error("Path is undefined. Cannot navigate.");
        }
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={navig} disabled={disable}>
                <Text style={styles.buttonText}>Нажми меня</Text>
            </TouchableOpacity>
            {img ? <Image source={img} style={styles.image} /> : <Image source={require('../assets/images/void.png')} style={styles.image} />}
        </View>
    );
};
//karp
export default MyButton;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 30,
        marginLeft: 30,
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        padding: 10,
        backgroundColor: '#800',
        borderRadius: 5,
        width: "80%",
        marginVertical: 10,
        alignSelf: 'center', // Центрируем кнопку
    
    },
    buttonText: {
        color: '#FFFFFF',
        textAlign: 'center',
        fontSize: 16,
    },
    image: {
        marginLeft: 10, // Отступ слева для расстояния между кнопкой и изображением
        height: 30,
        width: 30,
    },
});
