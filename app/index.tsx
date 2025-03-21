import { Text, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailsScreen from "./scenes/DetailsScreen";
import Scene1 from "./scenes/Scene1";
import HomeScreen from "./scenes/HomeScreen";
import { Provider } from 'react-redux';
import store from './store/index'; // Импортируйте ваш storeimport Scene1 from "./scenes/Scene1";
import * as Font from 'expo-font';
import { useEffect, useState } from "react";
import { RootStackParamList } from "./types/navigTypes";

export default function Index() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  

  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        'sm-r': require('@assets/fonts/SpaceMono-Regular.ttf'),
        // 'bar-r': require('@assets/fonts/Barriecito-Regular.ttf'),
        // 'oi-r': require('@assets/fonts/Oi-Regular.ttf'),
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
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Scene1" component={Scene1} />
      </Stack.Navigator>
    </Provider>
  );
}
