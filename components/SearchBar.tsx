import { Row } from "@/components/Row";
import { TextInput } from "react-native";

type Props = {
    value: string,
    onChangeText: (text: string) => void,
}

export function SearchBar({value, onChangeText}: Props) {
    return (
        <Row>
            <TextInput placeholder="Search" value={value} onChangeText={onChangeText} />
        </Row>
    )
}