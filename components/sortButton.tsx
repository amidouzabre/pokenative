import { useThemeColors } from "@/hooks/useThemeColors";
import { useState } from "react";
import { Image, Modal, Pressable, StyleSheet, View } from "react-native";
import { Card } from "./Card";
import { Row } from "./Row";
import { ThemedText } from "./ThemedText";

type Props = {
    value: "id" | "name";
    onChange: (v: "id" | "name") => void;
}

const options = [
    {
        label: 'Number',
        value: 'id'
    },
    {
        label: 'Name',
        value: 'name'
    }
]

export function SortButton({value, onChange}: Props) {
    const colors = useThemeColors();
    const [isModalVisible, setIsModalVisible] = useState(false);

    const onButtonPress = () => {
       setIsModalVisible(true);
    }
    const onclose = () => {
        setIsModalVisible(false);
    }
    return (
        <>
            <Pressable onPress={onButtonPress}>
                <View style={[styles.button, {backgroundColor: colors.grayWhite}]}>
                    <Image 
                        source={
                            value === 'id' ?
                            require('@/assets/images/number.png') :
                            require('@/assets/images/alpha.png')
                        } width={16} height={16} />
                </View>
            </Pressable>
            <Modal
                transparent={true}
                visible={isModalVisible}
                onRequestClose={onclose}
            >
                <Pressable style={styles.backdrop} onPress={onclose}>
                    <View style={[styles.popup, {backgroundColor: colors.tint}]}>
                        <ThemedText style={styles.title} variant="subtitle2" color="grayLight">Sort by</ThemedText>
                    </View>
                    <Card style={styles.card}>
                        {options.map(o => <Row key={o.value}>
                            <View/>
                            <ThemedText>{o.label}</ThemedText>
                        </Row>)}
                    </Card>
                </Pressable>
            </Modal>
        </>
    )
}


const styles = StyleSheet.create({
    button: {
        width: 32,
        height: 32,
        borderRadius: 32,
        flex: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },
    backdrop: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    popup: {
        padding: 4,
        paddingTop: 16,
        gap: 16,
        borderRadius: 12,
    },
    title: {
        paddingLeft: 20,
    },
    card: {
        paddingVertical: 16,
        paddingHorizontal: 20,
        gap: 16,
    }
});