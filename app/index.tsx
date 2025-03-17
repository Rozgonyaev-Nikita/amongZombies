import { Text, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailsScreen from "./scenes/DetailsScreen";
import Scene1 from "./scenes/DetailsScreen";
import HomeScreen from "./scenes/HomeScreen";
import { Provider } from 'react-redux';
import store from './store/index'; // Импортируйте ваш storeimport Scene1 from "./scenes/Scene1";

export default function Index() {

  const Stack = createNativeStackNavigator();

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
