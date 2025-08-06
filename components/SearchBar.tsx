import { Row } from "@/components/Row";
import { useThemeColors } from "@/hooks/useThemeColors";
import { Image, StyleSheet, TextInput } from "react-native";

type Props = {
    value: string,
    onChangeText: (text: string) => void,
}

export function SearchBar({value, onChangeText}: Props) {
    const colors = useThemeColors();
    return (
        <Row 
            gap={8} 
            style={[styles.wrapper,{backgroundColor: colors.grayWhite}]}
        >
            <Image source={require('@/assets/images/search.png')} width={16} height={16} />
            <TextInput placeholder="Search" style={styles.input}  value={value} onChangeText={onChangeText} />
        </Row>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        borderRadius: 16,
        height: 32,
        paddingHorizontal: 12,
    },
    input: {
        flex: 1,
        height: 64,
        fontSize: 10,
        lineHeight: 10,
        letterSpacing: 0.1,
    }
})