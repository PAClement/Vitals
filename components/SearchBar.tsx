import {TextInput, StyleSheet} from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import Row from "@/components/Row";
import {useThemeColors} from "@/hooks/useThemeColors";
import Entypo from '@expo/vector-icons/Entypo';

type Props = {
    value: string;
    onChange: (s: string) => void;
}

export default function SearchBar({value, onChange}: Props) {
    const colors = useThemeColors();

    const deleteSearch = () => {
        onChange('');
    };

    return (
        <Row gap={8} style={[styles.wrapper, {backgroundColor: colors.grayWhite}]}>
            <AntDesign name="search1" size={12} color="black"/>
            <TextInput style={[styles.input]}
                       onChangeText={onChange} value={value}/>
            {value.length > 0 &&
                <Entypo name="cross" size={16} color={colors.text} onPress={deleteSearch}/>
            }
        </Row>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        borderRadius: 16,
        paddingHorizontal: 12,
    },
    input: {
        flex: 1,
        fontSize: 12,
        lineHeight: 16,
    }
});
