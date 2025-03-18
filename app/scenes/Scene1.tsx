import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native'

type Props = {}

const Scene1 = (props: Props) => {
  return (
    <ImageBackground 
    source={require('../../assets/images/fon.jpg')}
      // source={{ uri: '' }} // Замените URL на URL вашего изображения
      style={styles.container}
    >
      <View style={styles.groupButtons}>
        <TouchableOpacity style={styles.button} onPress={() => console.log('karp')}>
          <Text style={styles.buttonText}>Продолжить</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => console.log('karp')}>
          <Text style={styles.buttonText}>Новая игра</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => console.log('karp')}>
          <Text style={styles.buttonText}>Помощь</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => console.log('karp')}>
          <Text style={styles.buttonText}>Выход</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  )
}

export default Scene1

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  groupButtons: {
    flex: 1,
    maxHeight: 450,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  button: {
    padding: 10,
    backgroundColor: '#800',
    height: 60,
    borderRadius: 5,
    width: "80%",
    marginVertical: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});
