import { StyleSheet } from "react-native";

export const stylesMainScreen = StyleSheet.create({
  backgroundImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
    page: {
      flex: 1,
      // backgroundColor: '#222',
    },
    img: {
      height: 200,
      width: '100%',
    },
    scrollView: {
      flex: 1,
      // maxHeight: 200, // Ограничение высоты
      minHeight: 150,
      borderWidth: 0.5, // Уменьшение ширины границы
      borderColor: 'rgba(255, 255, 255, 0.5)', // Полупрозрачный цвет границы 
    },
    text: {
      paddingHorizontal: 10,
      fontSize: 16,
      color: '#aaa',
      // fontFamily: "bar-r"
    },
    groupButton: {
      flex: 1,
      justifyContent: 'center',
      // paddingBottom: 30,
      // maxHeight: 300,
      minHeight: 250
    }
  });