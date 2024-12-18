import RootView from "@/components/RootView";
import Row from "@/components/Row";
import {ThemedText} from "@/components/ThemedText";
import {Pressable, StyleSheet} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import React from "react";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import {useThemeColors} from "@/hooks/useThemeColors";

export default function Groups() {
    const colors = useThemeColors();

    return (
        <RootView>
            <Row style={[styles.header, {marginBottom: 15}]}>
                <ThemedText variant="headline">Groupe</ThemedText>
                <Pressable style={[styles.addGroupButton, {backgroundColor: colors.secondary}]}>
                    <MaterialCommunityIcons name="layers-plus" size={24} color={colors.white} />
                </Pressable>
            </Row>
        </RootView>
    )
}

const styles = StyleSheet.create({
    header: {
        padding: 1,
        justifyContent: 'space-between',
    },
    addGroupButton: {
        padding: 8,
        borderRadius: 50,
    },
});