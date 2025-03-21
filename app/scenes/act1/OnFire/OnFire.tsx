import MyButton from '@components/MyButton';
import Header from '@components/Header';
import React, { useState } from 'react';
import { View, Text, Image, ScrollView, ImageBackground, StyleSheet } from 'react-native';
import { stylesMainScreen as styles } from '@styles/screensStyles';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from 'app/types/navigTypes';

type OnFireNavigationProp = NativeStackNavigationProp<RootStackParamList, 'OnFire'>;

interface Props {
  navigation: OnFireNavigationProp;
}

const OnFire: React.FC<Props> = ({ navigation }) => {

  const [karp, setKarp] = useState(false);
  
  const changeText = () => {
    setKarp(true)
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
          Я почувствовал, как адреналин врывается в мою кровь, отгоняя головную боль. «Нет, стойте. Отпустите меня» — хотел я закричать, но горло пересохло, язык едва двигался. Связки отказывались произносить слова. Я только и смог издать слабый хрип.
          Вращая головой в панике, я заметил её — женщину на соседем костре. По её выражению лица мне стало ясно, что она уже сдалась. И лишь ждала своей жалеой участи.
          </Text>
        </ScrollView>
      <View style={styles.groupButton}>
        <MyButton path="Scene1" property='power' navigation={navigation} />
        <MyButton path="Scene1" property='agility' navigation={navigation}/>
        <MyButton path="Scene1" property='intellect' navigation={navigation} />
        <MyButton path="Scene1" property='charisma' navigation={navigation} />
        <MyButton path="karp"  navigation={navigation} callBack={changeText}/>
      </View>
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

export default OnFire;
