import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  Start: undefined;
  Details: undefined; // пример передачи параметров
  Scene1: undefined;
  OnFire: undefined;
};

export type RootStackNavigationProp = NativeStackNavigationProp<RootStackParamList>;

// Добавил что бы убрать прежупреждение о обязательном defult export
const dummyExport = {};
export default dummyExport;