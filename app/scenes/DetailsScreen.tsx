import MyButton from '../components/MyButton';
import Header from '@components/Header';
import React, { useState } from 'react';
import { View, Text, Image, ScrollView, ImageBackground } from 'react-native';
import { stylesMainScreen as styles } from '../styles/screensStyles';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from 'app/types/navigTypes';
import {base, alt} from '../scenes/DetailsScreenAlt';


type DetailsScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Details'>;

interface Props {
  navigation: DetailsScreenNavigationProp;
}

const DetailsScreen: React.FC<Props> = ({ navigation }) => {

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
           {!karp ? base : alt}
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

export default DetailsScreen;

