import {TextInput, StyleSheet} from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import Row from "@/components/Row";
import {useThemeColors} from "@/hooks/useThemeColors";

type Props = {
    value: string;
    onChange: (s: string) => void;
}

//Todo Problem text type in input is invisible on application

export default function SearchBar({value, onChange}: Props) {
    const colors = useThemeColors();

    return (
        <Row gap={8} style={[styles.wrapper, {backgroundColor: colors.grayWhite}]}>
            <AntDesign name="search1" size={12} color="black"/>
            <TextInput style={styles.input} onChangeText={onChange} value={value}/>
        </Row>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        borderRadius: 16,
        height: 32,
        paddingHorizontal: 12,
    },
    input: {
        flex: 1,
        height: 16,
        fontSize: 10,
        lineHeight: 16,
    }
});
