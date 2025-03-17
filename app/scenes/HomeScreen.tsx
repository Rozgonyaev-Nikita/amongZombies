import Header from '../components/Header'
import MyButton from '../app/MyButton'
import React from 'react'
import { View, Text, Button, SafeAreaView } from 'react-native'


type Props = {}

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Header/>
        <Text>Home</Text>
        <Button
        title="Перейти на экран деталей"
        onPress={() => navigation.navigate('Details')}
      />
      {/* <MyButton path = 'karp'/> */}
    </View>
  )
}

export default HomeScreen