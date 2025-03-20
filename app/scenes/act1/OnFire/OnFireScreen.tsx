import MyButton from '@components/MyButton';
import Header from '@components/Header';
import React, { useState } from 'react';
import { View, Text, Image, ScrollView, ImageBackground } from 'react-native';
import { stylesMainScreen as styles } from '@styles/screensStyles';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from 'app/types/navigTypes';
// import {base, alt} from '../scenes/DetailsScreenAlt';


type OnFireScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Details'>;

interface Props {
  navigation: OnFireScreenNavigationProp;
}

const OnFireScreen: React.FC<Props> = ({ navigation }) => {

  return (
    <ImageBackground 
      source={require('@assets/images/fon.jpg')} 
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <View style={[styles.page, { flex: 1, margin: 0, padding: 0 }]}>
        <Header navigation={navigation} />
        <Image
          style={styles.img}
          source={require('@assets/images/treesBlack.png')}
          resizeMode="stretch"
        />
        <ScrollView
          style={styles.scrollView}
          showsVerticalScrollIndicator={true} // Включаем полосу прокрутки
          indicatorStyle="white"
        >
          <Text style={styles.text}>
           {/* {!karp ? base : alt} */}
           Вы приходите в себя от резкого запаха дыма. Гул толпы, факелы, перекошенные от ненависти лица... Ваши запястья перетянуты колючей проволокой, а под ногами трещат хворост и солома.
— Он заражён! Сожжем его, пока не превратился! — кричит кто-то из толпы.
Вы пытаетесь крикнуть, что анализ ошибочен, что вы не один из них, но в груди сжимается ледяной ком. Внезапная вспышка боли — кто-то бросает факел. Огонь лижет ваши ноги, и...
          </Text>
        </ScrollView>
        <View style={styles.groupButton}>
          <MyButton path="Scene1" property='power' navigation={navigation} />
          <MyButton path="Scene1" property='agility' navigation={navigation}/>
          <MyButton path="Scene1" property='intellect' navigation={navigation} />
          <MyButton path="Scene1" property='charisma' navigation={navigation} />
          <MyButton path="karp"  navigation={navigation}/>
        </View>
      </View>
    </ImageBackground>
  );
};

export default OnFireScreen;