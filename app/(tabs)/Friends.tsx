import {ThemedText} from "@/components/ThemedText";
import RootView from "@/components/RootView";
import {Pressable, StyleSheet, View} from "react-native";
import {useThemeColors} from "@/hooks/useThemeColors";
import AntDesign from '@expo/vector-icons/AntDesign';
import Modal from "@/components/Modal";
import {useState} from "react";

export default function Friends() {
    const colors = useThemeColors();
    const [addFriendModal, setAddFriendModal] = useState(false);

    return (
        <RootView>
            <View style={styles.header}>
                <ThemedText variant="headline">Amis</ThemedText>
                <Pressable onPress={() => setAddFriendModal(true)}
                           style={[styles.addFriendButton, {backgroundColor: colors.secondary}]}>
                    <AntDesign name="adduser" size={24} color={colors.white}/>
                </Pressable>
            </View>
            <Modal id="test" isOpen={addFriendModal}>
                <ThemedText variant="body">Hello</ThemedText>
                <Pressable onPress={() => setAddFriendModal(false)}>

                </Pressable>
            </Modal>
        </RootView>
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
    }
});