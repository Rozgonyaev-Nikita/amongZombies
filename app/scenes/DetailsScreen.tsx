import MyButton from '../MyButton';
import Header from '@components/Header';
import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { stylesMainScreen as styles } from '../styles/screensStyles';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from 'app/types/navigTypes';


type DetailsScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Details'>;

interface Props {
  navigation: DetailsScreenNavigationProp;
}

const DetailsScreen: React.FC<Props> = ({ navigation }) => {
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
        {/* <Text style={styles.text}>
          figfgofgjfgoВдруг наступила ночь, и мир, как я его знал, изменился. Я вышел на улицу, чтобы прогуляться, но вместо привычных звуков города меня окружили зомби. Их мертвенные лица и пустые взгляды наполняли улицы. Сердце колотилось в груди, когда я осознал, что нужно бежать. Я спрятался в заброшенном здании, стараясь не издавать ни звука. Снаружи раздавались шорохи и стоны, а я знал, что это только начало. С каждой минутой страх нарастал, и лишь одна мысль не покидала меня: как выжить в этом кошмаре?
        </Text> */}
        <Text style={styles.text}>
          Вдруг настивычных звуков города меня окружили зомби. Их мертвенСердце колотилось в груди, когда я осознал, что нужно бежать. Я спрятался в заброшенном здании, стараясь не издавать ни звука. Снаружи раздавались шорохи и стоны, а я знал, что это только начало. С каждой минутой страх нарастал, и лишь одна мысль не покидала меня: как выжить в этом кошмаре?
        </Text>
      </ScrollView>
      <View style={styles.groupButton}>
        <MyButton path="Scene1" property='power' navigation={navigation} />
        <MyButton path="Scene1" property='agility' navigation={navigation} />
        <MyButton path="Scene1" property='intellect' navigation={navigation} />
        <MyButton path="Scene1" property='charisma' navigation={navigation} />
        <MyButton path="Scene1"  navigation={navigation} />
      </View>
      {/* <Text style={styles.groupButton}>karp</Text> */}
    </View>
  );
};

export default DetailsScreen;

