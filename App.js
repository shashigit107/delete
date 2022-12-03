import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
     <Text>hello</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
     backgroundColor:'pink',
     marginHorizontal:20,
     marginVertical:20,
     paddingHorizontal:20
  },
});
