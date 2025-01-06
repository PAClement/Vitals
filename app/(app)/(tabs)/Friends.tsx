import {ThemedText} from "@/components/ThemedText";
import RootView from "@/components/RootView";
import {Pressable, StyleSheet, View} from "react-native";
import Modal from "@/components/Modal";
import {useThemeColors} from "@/hooks/useThemeColors";
import AntDesign from '@expo/vector-icons/AntDesign';
import {useState} from "react";
import Row from "@/components/Row";
import React from "react";
import SearchBar from "@/components/SearchBar";
import FriendCard from "@/components/FriendCard";

export default function Friends() {
    const [addFriendModal, setAddFriendModal] = useState(false);
    const [searchFriend, setSearchFriend] = useState('');
    const [searchAddFriend, setSearchAddFriend] = useState('');

    const colors = useThemeColors();

    return (
        <>
            <RootView>
                <View style={{marginBottom: 15}}>
                    <Row style={[styles.header, {marginBottom: 15}]}>
                        <ThemedText variant="headline">Vos proches</ThemedText>
                        <Pressable onPress={() => setAddFriendModal(true)}
                                   style={[styles.addFriendButton, {backgroundColor: colors.secondary}]}>
                            <AntDesign name="adduser" size={24} color={colors.white}/>
                        </Pressable>
                    </Row>
                    <Row>
                        <SearchBar value={searchFriend} onChange={setSearchFriend}></SearchBar>
                    </Row>
                </View>
                <View style={{gap: 30}}>
                    <View style={{gap: 10}}>
                        <ThemedText variant="subtitle1">Demande en attente</ThemedText>
                        <Row>
                            <FriendCard id={10} state={'process'}/>
                        </Row>
                    </View>
                    <View style={{gap: 10}}>
                        <ThemedText variant="subtitle1">Proches (10)</ThemedText>
                        <Row>
                            <FriendCard id={10} state={'accepted'}/>
                        </Row>
                    </View>
                </View>
            </RootView>
            <Modal isOpen={addFriendModal} onClose={() => setAddFriendModal(false)} position="center">
                <ThemedText variant="subtitle1">Ajouter</ThemedText>
                <Row>
                    <SearchBar value={searchAddFriend} onChange={setSearchAddFriend}></SearchBar>
                </Row>
            </Modal>
        </>

    );
}

const styles = StyleSheet.create({
    header: {
        padding: 1,
        justifyContent: 'space-between',
    },
    addFriendButton: {
        padding: 8,
        borderRadius: 50,
    },
});