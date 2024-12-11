import {ThemedText} from "@/components/ThemedText";
import RootView from "@/components/RootView";
import {Pressable, StyleSheet} from "react-native";
import Modal from "@/components/Modal";
import {useThemeColors} from "@/hooks/useThemeColors";
import AntDesign from '@expo/vector-icons/AntDesign';
import {useState} from "react";
import Row from "@/components/Row";
import React from "react";

export default function Friends() {
    const [addFriendModal, setAddFriendModal] = useState(false);

    const colors = useThemeColors();

    const openAddFriendModal = () => {
        setAddFriendModal(true);
    };

    const closeAddFriendModal = () => {
        setAddFriendModal(false);
    }

    return (
        <>
            <RootView>
                <Row style={styles.header}>
                    <ThemedText variant="headline">Amis</ThemedText>
                    <Pressable onPress={openAddFriendModal}
                               style={[styles.addFriendButton, {backgroundColor: colors.secondary}]}>
                        <AntDesign name="adduser" size={24} color={colors.white}/>
                    </Pressable>
                </Row>
            </RootView>
            <Modal isOpen={addFriendModal} onClose={closeAddFriendModal}>
                <ThemedText variant="subtitle1">Hello world</ThemedText>
            </Modal>
        </>

    );
}

const styles = StyleSheet.create({
    header: {
        justifyContent: 'space-between',
    },
    addFriendButton: {
        padding: 8,
        borderRadius: 50,
    },
});