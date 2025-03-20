import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  Details: undefined; // пример передачи параметров
  Scene1: undefined;
  OnFire: undefined;
};

export type RootStackNavigationProp = NativeStackNavigationProp<RootStackParamList>;
