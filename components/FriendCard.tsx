import {Button, Pressable, StyleSheet, ViewStyle} from "react-native";
import Row from "@/components/Row";
import AntDesign from "@expo/vector-icons/AntDesign";
import {ThemedText} from "@/components/ThemedText";
import {Card} from "@/components/Card";
import React from "react";
import {useThemeColors} from "@/hooks/useThemeColors";
import ButtonManageFriends from "@/components/friend/ButtonManageFriends";

type Props = {
    id: number,
    state: string
}


export default function FriendCard({id, state}: Props) {
    const colors = useThemeColors();

    return <Card style={[styles.Card]}>
        <Row style={{justifyContent: 'space-between'}}>
            <Row gap={8}>
                <AntDesign name="user" size={24} color={colors.secondary}/>
                <ThemedText variant="subtitle1">Friend's name</ThemedText>
            </Row>
            {state === 'process' ? (
                <Row gap={8}>
                    <ButtonManageFriends id={1} state={'accepted'} title={'Accepter'} color={colors.success}
                                         accessibilityLabel={"Accepter la demande d'amis"}/>
                    <ButtonManageFriends id={48} state={'reject'} title={'Rejeter'} color={colors.warning}
                                         accessibilityLabel={"Rejeter la demande d'amis"}/>
                </Row>
            ) : (
                <Pressable>
                    <AntDesign name="eyeo" size={24} color={colors.primary}/>
                </Pressable>
            )}
        </Row>
    </Card>

}

const styles = StyleSheet.create({
    Card: {
        padding: 15,
        width: '100%'
    },
    actionButton: {
        fontSize: 12
    }
});