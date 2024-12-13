import {Pressable, StyleSheet} from "react-native";
import Row from "@/components/Row";
import AntDesign from "@expo/vector-icons/AntDesign";
import {ThemedText} from "@/components/ThemedText";
import {Card} from "@/components/Card";
import React from "react";
import {useThemeColors} from "@/hooks/useThemeColors";
import ButtonManageFriends from "@/components/friend/ButtonManageFriends";
import {Link} from "expo-router";

type Props = {
    id: number,
    state: 'process' | 'accepted' | 'blocked'
}

export default function FriendCard({id, state}: Props) {
    const colors = useThemeColors();

    return <Link href={{pathname: "/user/[id]", params: {id: id}}} asChild>
        <Pressable android_ripple={{color: colors.secondary, foreground: true}} style={{width: '100%'}}>
            <Card style={[styles.Card, (state === 'process') && {borderWidth: 1, borderColor: colors.warning}]}>
                <Row style={{justifyContent: 'space-between'}}>
                    <Row gap={8}>
                        <AntDesign name="user" size={24} color={colors.secondary}/>
                        <ThemedText variant="subtitle1">Friend's name </ThemedText>
                    </Row>
                    {state === 'process' ? (
                        <Row gap={8}>
                            <ButtonManageFriends id={id} state={'accepted'} title={'Accepter'} color={colors.success}
                                                 accessibilityLabel={"Accepter la demande d'amis"}/>
                            <ButtonManageFriends id={id} state={'reject'} title={'Rejeter'} color={colors.warning}
                                                 accessibilityLabel={"Rejeter la demande d'amis"}/>
                        </Row>
                    ) : (
                        <Pressable>
                            <AntDesign name="eyeo" size={24} color={colors.primary}/>
                        </Pressable>
                    )}
                </Row>
            </Card>
        </Pressable>
    </Link>

}

const styles = StyleSheet.create({
    Card: {
        padding: 15,
    },
    actionButton: {
        fontSize: 12
    },
});