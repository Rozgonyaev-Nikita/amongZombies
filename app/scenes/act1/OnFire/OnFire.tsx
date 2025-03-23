import MyButton from '@components/MyButton';
import Header from '@components/Header';
import React, { useState } from 'react';
import { View, Text, Image, ScrollView, ImageBackground, StyleSheet } from 'react-native';
import { stylesMainScreen as styles } from '@styles/screensStyles';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from 'app/types/navigTypes';
import { base, var1, var2, var3, var4, result } from './OnFireText'

type OnFireNavigationProp = NativeStackNavigationProp<RootStackParamList, 'OnFire'>;

interface Props {
  navigation: OnFireNavigationProp;
}

const OnFire: React.FC<Props> = ({ navigation }) => {

  const [text, setText] = useState(base);
  
  const changeText = (txt: string) => {
    if (txt === 'var1') {
        setText(var1)
    } else if (txt === 'var2') {
        setText(var2)
    } else if (txt === 'var3') {
        setText(var3)
    // console.log('karpik')
    } else if (txt === 'var4') {
        setText(var4)
  }
}
  return (
    <ImageBackground 
    source={require('@assets/images/fon.jpg')} 
    style={styles.backgroundImage}
    resizeMode="cover"
  >
    <View style={styles.page}>
      <Header navigation={navigation} />
      <Image
        style={styles.img}
        source={require('@assets/images/treesBlack.png')}
        resizeMode="stretch"
      />
      <ScrollView
          style={styles.scrollView}
          showsVerticalScrollIndicator={true}
          indicatorStyle="white"
        >
          <Text style={styles.text}>
          {text}
          {text !== base && result }
          </Text>
        </ScrollView>
      {text === base ? <View style={styles.groupButton}>
        <MyButton path="deadlock"  navigation={navigation} callBack={() => changeText('var1')} text='Расшатать шест'/>
        <MyButton path="deadlock" property='power' navigation={navigation} callBack={() => changeText('var2')} text='Попытаться вырваться силой'/>
        <MyButton path="deadlock" property='agility' navigation={navigation} callBack={() => changeText('var3')} text='Освободиться с помощью гибких суставов'/>
        <MyButton path="deadlock" property='charisma' navigation={navigation} callBack={() => changeText('var4')} text='Вести переговоры'/>
        {/* <MyButton path="karp"  navigation={navigation} callBack={changeText}/>
        <MyButton path="karp"  navigation={navigation} callBack={changeText}/> */}
      </View> : <MyButton path='OnFire' text='Продолжить' navigation={navigation} />}
    </View>
  </ImageBackground>
  );
};

// const localStyles = StyleSheet.create({
//   scrollView: {
//     flex: 1, // Убедитесь, что ScrollView занимает все доступное пространство
//     minHeight: 300, // Установите минимальную высоту ScrollView
//     borderWidth: 0.5,
//     borderColor: 'rgba(255, 255, 255, 0.5)',
//   },
// });

export default OnFire
