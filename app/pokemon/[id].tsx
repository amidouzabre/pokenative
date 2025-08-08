import { RootView } from "@/components/RootView";
import { Row } from "@/components/Row";
import { ThemedText } from "@/components/ThemedText";
import { useLocalSearchParams } from "expo-router";
import { Image, StyleSheet } from "react-native";

export default function Pokemon() {

    const params = useLocalSearchParams() as {id: string};

    return (
        <RootView>
            <Row>
                <Row>
                    <Image 
                        source={require('@/assets/images/back.png')} 
                        width={32} 
                        height={32} 
                    />
                    <ThemedText color="grayWhite" variant="headline">
                        name
                    </ThemedText>
                </Row>
                <Row>
                    <ThemedText color="grayWhite" variant="subtitle2">
                        #{params.id.padStart(3, '0')}
                    </ThemedText>
                </Row>
            </Row>
        </RootView>
    );
}


const styles = StyleSheet.create({
  header: {
    margin: 20,
    justifyContent: 'space-between',
  },
  body: {
    paddingHorizontal: 12,
    paddingTop: 8,
  },
})