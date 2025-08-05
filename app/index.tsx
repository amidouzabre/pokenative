import { ThemedText } from "@/components/ThemedText";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <ThemedText variant="headline">Pokédex</ThemedText>
    </SafeAreaView>
  );
}


const styles = {
  container: {
    backgroundColor: 'red',
  }
};