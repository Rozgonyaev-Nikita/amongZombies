import MyButton from '@components/MyButton';
import Header from '@components/Header';
import React from 'react';
import { View, Text, Image, ScrollView, ImageBackground, StyleSheet } from 'react-native';
import { stylesMainScreen as styles } from '@styles/screensStyles';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from 'app/types/navigTypes';

type StartNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Start'>;

interface Props {
  navigation: StartNavigationProp;
}

const Start: React.FC<Props> = ({ navigation }) => {
  return (
    <ImageBackground
      source={require('@assets/images/fon.jpg')}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <View style={[styles.page, { flex: 1 }]}>
        <Header navigation={navigation} />
        <Image
          style={styles.img}
          source={require('@assets/images/treesBlack.png')}
          resizeMode="stretch"
        />
        <ScrollView
          style={localStyles.scrollView}
          showsVerticalScrollIndicator={true}
          indicatorStyle="white"
        >
          <Text style={styles.text}>
            {/* Ваш текст здесь */}
            Когда3 я открыл глаза, передо мной закружились неясные тени. Голова раскалывалась, словно в неё вонзили тысячи игл. Глухой, будто издалека, доносился шум: крики, вопли, хриплый смех и какой-то пронзительный скрежет. Я попытался шевельнуться, но сразу понял, что рукам и ногам некуда деваться – холод и жёсткость дерева резались об кожу.{'\n'} Паника начала поднимать голову.
Я опустил взгляд и понял, что нахожусь на костре –  толстые верёвки впиваются в запястья и щиколотки. При каждом движении они словно вгрызались в плоть.
Постепенно слух начал возвращаться ко мне яснее, и я разобрал, о чём кричат люди. Они столпились вокруг, их лица в неверном свете огня факелов и сгущающихся сумерек выглядели зловеще: исказившиеся маски ненависти, перекошенные рты, выкрикивающие одно и то же слово: «Зомби!»
Они считали, что я был укушен. Я вспомнил… Что я вспомнил? Головная боль становилась невыносимее, угрожая затянуть сознание обратно в темноту. Нет, они ошибаются! Они должны ошибаться. Я не мог быть укушен! Или мог?
Я замешкался в своих мыслях. Тем временем кто-то старательно складывал хворост у подножия креста. Я почувствовал, как мои босые ноги коснулись первых острых веточек, а запах смолы и древесины пробился сквозь солёную вонь пота толпы. 
Ноги задёргались инстинктивно, но это только вызвало насмешки и гневные выкрики.{'\n'}
— Ведь это правда! Я видел, как он бился с одним из них! — закричал мужчина, размахивая факелом. — Я видел, как он укусил его за руку!{'\n'}

Моя рука… Я рванулся, насколько позволяли верёвки, отчего шест заскрипел. Посмотрев на руку, мое сердце пропустило удар. Люди были правы. На руке были язвы, похожие на укусы. Я был укушен.{'\n'}

— Он один из них! Жгите! Не доверяйте! — голос женщины был истеричным, надрывным, и она подстрекала толпу, словно вовсе не человек кричал, а бешеная собака. — Лучше сжечь его и спасти поселение, пока он не превратился!{'\n'}
Я почувствовал, как адреналин врывается в мою кровь, отгоняя головную боль. «Нет, стойте. Отпустите меня» — хотел я закричать, но горло пересохло, язык едва двигался. Связки отказывались произносить слова. Я только и смог издать слабый хрип.
Вращая головой в панике, я заметил её — женщину на соседем костре. По её выражению лица мне стало ясно, что она уже сдалась. И лишь ждала своей жалеой участи.
          </Text>
        </ScrollView>
        <MyButton path='OnFire' text='Продолжить' navigation={navigation} />
      </View>
    </ImageBackground>
  );
};

const localStyles = StyleSheet.create({
  scrollView: {
    flex: 1, // Убедитесь, что ScrollView занимает все доступное пространство
    minHeight: 300, // Установите минимальную высоту ScrollView
    borderWidth: 0.5,
    borderColor: 'rgba(255, 255, 255, 0.5)',
  },
});

export default Start;