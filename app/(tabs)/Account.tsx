import {ThemedText} from "@/components/ThemedText";
import RootView from "@/components/RootView";
import AntDesign from '@expo/vector-icons/AntDesign';
import {Pressable, StyleSheet, View} from "react-native";

export default function Index() {
    return (
        <RootView>
            <View style={styles.header}>
                <ThemedText variant="headline">Votre Compte</ThemedText>
                <Pressable>
                    <AntDesign name="setting" size={24} color="black"/>
                </Pressable>
            </View>
        </RootView>
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    }
})