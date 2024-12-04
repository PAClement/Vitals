import {SafeAreaView} from "react-native-safe-area-context";
import {StyleSheet, View} from "react-native";
import {ThemedText} from "@/components/ThemedText";
import {useThemeColors} from "@/hooks/useThemeColors";
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function Index() {
    const colors = useThemeColors();
    return (
        <SafeAreaView style={[styles.container, {backgroundColor: colors.secondary}]}>
        <View>
            <FontAwesome name="hand-peace-o" size={24} color="black" />
            <ThemedText variant="headline" color="primary">Hello, world!</ThemedText>
        </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})
