import React, { FC, useState } from 'react';
import { Image, StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigTypes';

// Обобщённый тип для пропсов
interface MyButtonProps<RouteName extends keyof RootStackParamList> {
    path: RouteName | 'deadlock'; // Имя экрана, на который будет происходить навигация
    text: string;
    property?: string;
    propertyValue?: number;
    propetryTarget?: number;
    flag?: boolean;
    altPath?: RouteName; // Альтернативный экран
    spec?: boolean;
    navigation: NativeStackNavigationProp<RootStackParamList, RouteName>; // Типизация навигации
    callBack?: () => void;
}

// Обобщённый компонент
const MyButton = <RouteName extends keyof RootStackParamList>({ path, text, property,  navigation, callBack }: MyButtonProps<RouteName>) => {
    const [disable, setDisable] = useState(false);
    let img;


    switch (property) {
        case 'power':
            img = require('@assets/images/power.png');
            break;
        case 'agility':
            img = require('@assets/images/agility.png');
            break;
        case 'intellect':
            img = require('@assets/images/intellect.png');
            break;
        case 'stealth':
            img = require('@assets/images/stealth.png');
            break;
        case 'charisma':
            img = require('@assets/images/charisma.png');
            break;
        default:
            img = null;
    }

    const navig = () => {
        console.log(path)
        if (path !== 'deadlock') {
            console.log("Navigating to:", path);
            navigation.replace(path); // Используем navigate
        } else if (path === "deadlock" && callBack) {
            console.log('callBack')
            callBack();
            setDisable(true);
        }   else{
            console.error("Path is undefined. Cannot navigate.");
        }
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={[styles.button, { backgroundColor: disable ? '#444' : '#800' }]} onPress={navig} disabled={disable}>
                <Text style={styles.buttonText}>{text ? text :'Нажми меня'}</Text>
            </TouchableOpacity>
            {img ? <Image source={img} style={styles.image} /> : <Image source={require('@assets/images/void.png')} style={styles.image} />}
        </View>
    );
};

export default MyButton;
  const styles = StyleSheet.create({
      container: {
          marginLeft: 30,
          flexDirection: "row",
          justifyContent: 'center',
          alignItems: 'center',
      },
      button: {
          height: "auto",
          minHeight: 40,
          padding: 5,
          backgroundColor: '#800',
          borderRadius: 5,
          width: "80%",
          marginVertical: 10,
          alignSelf: 'center',
          justifyContent: 'center',
          alignItems: 'center',
      },
      buttonText: {
          color: '#FFFFFF',
          fontSize: 16,
          textAlign: 'center', // Add this to ensure text is centered regardless of line count
      },
      image: {
          marginLeft: 10,
          height: 30,
          width: 30,
      },
  });
