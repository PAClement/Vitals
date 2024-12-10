import {ThemedText} from "@/components/ThemedText";
import RootView from "@/components/RootView";
import {Pressable, StyleSheet, View, Modal} from "react-native";
import {useThemeColors} from "@/hooks/useThemeColors";
import AntDesign from '@expo/vector-icons/AntDesign';
import {useState} from "react";
import React from "react";

export default function Friends() {
    const colors = useThemeColors();
    const [addFriendModal, setAddFriendModal] = useState(false);

    const openAddFriendModal = () => {
        setAddFriendModal(true);
    };

    const closeAddFriendModal = () => {
        setAddFriendModal(false);
    }

    return (
        <>
            <RootView>
                <View style={styles.header}>
                    <ThemedText variant="headline">Amis</ThemedText>
                    <Pressable onPress={openAddFriendModal}
                               style={[styles.addFriendButton, {backgroundColor: colors.secondary}]}>
                        <AntDesign name="adduser" size={24} color={colors.white}/>
                    </Pressable>
                </View>
            </RootView>
            <Modal transparent visible={addFriendModal} onRequestClose={closeAddFriendModal}>
                <Pressable style={styles.backdrop} onPress={closeAddFriendModal}></Pressable>
                <View style={[styles.popup, {backgroundColor: colors.white}]}>
                    <ThemedText variant="subtitle1">Hello world</ThemedText>
                </View>
            </Modal>
        </>

    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    addFriendButton: {
        padding: 8,
        borderRadius: 50,
    },
    popup: {
        padding: 4,
        paddingTop: 16,
        gap: 8,
        borderRadius: 12
    },
    backdrop: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
    }
});