import { Text } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Start, DetailsScreen, HomeScreen, OnFire, Scene1Screen} from "./scenes/export";
import { Provider } from 'react-redux';
import store from './store/index';
import * as Font from 'expo-font';
import { useEffect, useState } from "react";
import { RootStackParamList } from "./types/navigTypes";

export default function Index() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  

  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        'sm-r': require('@assets/fonts/SpaceMono-Regular.ttf'),
      });
      setFontsLoaded(true);
    };

    loadFonts();
  }, []);

  const Stack = createNativeStackNavigator<RootStackParamList>();
  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }
  
  return (
    <Provider store={store}>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="OnFire" component={OnFire} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Scene1" component={Scene1Screen} />
        <Stack.Screen name="Start" component={Start} />
      </Stack.Navigator>
    </Provider>
  );
}
