import React, { FC, useState } from 'react'
import { Image, StyleSheet, TouchableOpacity, View, Text } from 'react-native'

interface Props {
    path: string,
    property?: string,
    propertyValue?: number,
    propetryTarget?: number,
    flag?: boolean,
    altPath?: string,
    spec?: boolean
    navigation: any
}

const MyButton: FC<Props> = ({ path, property, propertyValue, propetryTarget, flag, altPath, navigation, spec }) => {
    const [disable, setDisable] = useState(false);
    let img;

    // Determine the appropriate path based on conditions
    if (!Array.isArray(propertyValue)) {
        // path = propertyValue >= propetryTarget ? path : altPath;
        path = path;
    } else {
        path = propertyValue.every((value, index) => value > propetryTarget[index]) ? path : altPath;
    }

    if (spec && !altPath) {
        setDisable(true);
    }

    switch (property) {
        case 'power':
            img = require('../assets/images/power.png'); // Use require to load images
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
        // Prevent navigating if path is not defined
        if (spec && !altPath) {
            setDisable(true);
            return;
        }

        if (path) {
            console.log("Navigating to:", path); // Debugging line
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
            {img && <Image source={img} style={styles.image} />}
        </View>
    );
};


export default MyButton;

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // height: 30,
        justifyContent: 'center', // Центрирование по вертикали
        alignItems: 'center', // Центрирование по горизонтали
    },
    button: {
        padding: 10,
        // backgroundColor: '#007BFF',
        backgroundColor: '#800',
        borderRadius: 5,
        width: "80%",
        marginVertical: 10, // Вертикальные отступы между кнопками
    },
    buttonText: {
        color: '#FFFFFF', // Цвет текста
        textAlign: 'center', // Центрирование текста
        fontSize: 16, // Размер шрифта
    },
    image: {
        marginTop: 20, // Отступ между кнопкой и изображением
        height: 30,
        width: 30
    },
});