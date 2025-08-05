import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Link href="/about">A propos</Link>
      <Link href={{pathname: '/pokemon/[id]', params: {id: 3}}}>Pokemon 3</Link>
    </View>
  );
}


const styles = {
  container: {
    backgroundColor: 'red',
    padding: 24,
  }
};