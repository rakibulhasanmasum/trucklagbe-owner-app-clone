import { StyleSheet, Text, View } from 'react-native';
import AddGPS from './components/owner_gps_add'

export default function App() {
  return (
    <View style={styles.container}>
      <AddGPS></AddGPS>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
