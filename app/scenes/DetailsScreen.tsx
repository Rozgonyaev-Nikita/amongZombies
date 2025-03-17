import MyButton from '../MyButton';
import Header from '@components/Header';
import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const DetailsScreen = ({ navigation }) => {
  return (
    <View style={[styles.page, { flex: 1, margin: 0, padding: 0 }]}>
      <Header />
      <Image
        style={styles.img}
        source={require('@assets/images/treesBlack.png')}
        resizeMode="stretch"
      />
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={true} // Включаем полосу прокрутки

        // contentContainerStyle={{ flexGrow: 1 }} // Растягиваем контент
        indicatorStyle="white"
      >
        <Text style={styles.text}>
          Вдруг наступила ночь, и мир, как я его знал, изменился. Я вышел на улицу, чтобы прогуляться, но вместо привычных звуков города меня окружили зомби. Их мертвенные лица и пустые взгляды наполняли улицы. Сердце колотилось в груди, когда я осознал, что нужно бежать. Я спрятался в заброшенном здании, стараясь не издавать ни звука. Снаружи раздавались шорохи и стоны, а я знал, что это только начало. С каждой минутой страх нарастал, и лишь одна мысль не покидала меня: как выжить в этом кошмаре?
        </Text>
      </ScrollView>
      <View style={styles.groupButton}>
        <MyButton path="Scene1" property='power' navigation={navigation} />
        <MyButton path="Scene1" property='agility' navigation={navigation} />
        <MyButton path="Scene1" property='intellect' navigation={navigation} />
        <MyButton path="Scene1" property='charisma' navigation={navigation} />
        <MyButton path="Scene1"  navigation={navigation} />
      </View>
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#222',
  },
  img: {
    height: 200,
    width: '100%',
  },
  scrollView: {
    flex: 1,
    maxHeight: 200, // Ограничение высоты
    minHeight: 150,
    borderWidth: 0.5, // Уменьшение ширины границы
    borderColor: 'rgba(255, 255, 255, 0.5)', // Полупрозрачный цвет границы
  },
  text: {
    paddingHorizontal: 10,
    fontSize: 16,
    color: '#aaa',
  },
  groupButton: {
    flex: 1,
    maxHeight: 300,
  }
});