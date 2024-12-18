import RootView from "@/components/RootView";
import Row from "@/components/Row";
import {ThemedText} from "@/components/ThemedText";
import {Pressable, StyleSheet} from "react-native";
import React, {useState} from "react";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import {useThemeColors} from "@/hooks/useThemeColors";
import Modal from "@/components/Modal";

export default function Groups() {
    const [createGroupModal, setCreateGroupModal] = useState(false);
    const colors = useThemeColors();

    return (
        <>
            <RootView>
                <Row style={[styles.header, {marginBottom: 15}]}>
                    <ThemedText variant="headline">Groupe</ThemedText>
                    <Pressable onPress={() => setCreateGroupModal(true)}
                               style={[styles.addGroupButton, {backgroundColor: colors.secondary}]}>
                        <MaterialCommunityIcons name="layers-plus" size={24} color={colors.white}/>
                    </Pressable>
                </Row>
            </RootView>
            <Modal isOpen={createGroupModal} onClose={() => setCreateGroupModal(false)} position="center">
                <ThemedText variant="subtitle1">Create groupe</ThemedText>
            </Modal>
        </>
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