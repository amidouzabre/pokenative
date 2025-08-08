import { RootView } from "@/components/RootView";
import { Row } from "@/components/Row";
import { ThemedText } from "@/components/ThemedText";
import { useFetchQuery } from "@/hooks/useFetchQuery";
import { router, useLocalSearchParams } from "expo-router";
import { Image, Pressable, StyleSheet, View } from "react-native";

export default function Pokemon() {

    const params = useLocalSearchParams() as {id: string};
    const {data:pokemon} = useFetchQuery("/pokemon/[id]", {id: params.id})

    return (
        <RootView>
            <View>
                <Image 
                    style={styles.pokeball}
                    source={require('@/assets/images/pokeball_big.png')}
                    width={208}
                    height={208}
                />

                <Row style={styles.header}>
                    <Pressable onPress={router.back}>
                        <Row gap={8}>
                            <Image 
                                source={require('@/assets/images/back.png')} 
                                width={32} 
                                height={32} 
                            />
                            <ThemedText color="grayWhite" variant="headline">
                                {pokemon?.name}
                            </ThemedText>
                        </Row>
                    </Pressable>
                    <Row>
                        <ThemedText color="grayWhite" variant="subtitle2">
                            #{params.id.padStart(3, '0')}
                        </ThemedText>
                    </Row>
                </Row>
            </View>
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
  pokeball: {
    opacity: 0.9,
    position: 'absolute',
    right: 8,
    top: 8,
  }
})