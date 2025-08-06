import { TextInput, View } from "react-native";

type Props = {
    value: string,
    onChangeText: (text: string) => void,
}

export function SearchBar({value, onChangeText}: Props) {
    return (
        <View>
            <TextInput placeholder="Search" value={value} onChangeText={onChangeText} />
        </View>
    )
}