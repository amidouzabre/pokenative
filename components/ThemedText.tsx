import { Text, type TextProps } from "react-native";

type Props = TextProps & {
    variant?: string,
    color?: string
}

export function ThemedText({variant, color, ...rest}: Props) {
    return <Text {...rest}/>
}

const styles = {
    body3: {
        fontSize: 10,
        lineHeight: 16
    },
    headline: {
        fontSize: 24,
        lineHeight: 32,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 8,
        lineHeight: 12,
    },
    subtitle1: {
        fontSize: 14,
        lineHeight: 16,
        fontWeight: 'bold',
    },
    subtitle2: {
        fontSize: 12,
        lineHeight: 16,
        fontWeight: 'bold',
    },
    subtitle3: {
        fontSize: 10,
        lineHeight: 16,
        fontWeight: 'bold',
    },
};