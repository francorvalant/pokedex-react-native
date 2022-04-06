import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import "react-native-gesture-hundler";
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Text>Pokemon!</Text>
        <StatusBar style="auto" />
      </View>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


// Tiene instalado React Navigation
// Tiene instalado Dependencias de Expo