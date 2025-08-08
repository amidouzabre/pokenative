import { Image, type ImageSourcePropType, StyleSheet, View, type ViewProps } from "react-native";
import { Row } from "../Row";
import { ThemedText } from "../ThemedText";

type Props = ViewProps & {
    title: string,
    description: string,
    image?: ImageSourcePropType,
}

export function PokemonSpec({style, title, description, image, ...rest}: Props) {
    return (
        <View style={[style, styles.root]} {...rest}>
            <Row>
                { image && <Image source={image} width={16} height={16} /> }
                <ThemedText>{title}</ThemedText>
            </Row>
            <ThemedText variant="caption" color="grayMedium"/>
        </View>
    );
}

const styles = StyleSheet.create({
    root: {}
})