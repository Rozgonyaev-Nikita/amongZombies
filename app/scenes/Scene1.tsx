import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity, ImageBackground, Image, Dimensions } from 'react-native'

type Props = {}

const Scene1 = (props: Props) => {
  return (
    <ImageBackground 
      source={require('@assets/images/fon.jpg')}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Image source={require('../../assets/images/zombie.png')} style={styles.logo} />
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
      </View>
    </ImageBackground>
  )
}

export default Scene1

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  backgroundImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  logo: {
    width: 220,
    height: 220,
    alignSelf: 'center',
    marginBottom: 20,
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