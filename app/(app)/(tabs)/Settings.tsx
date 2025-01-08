import Row from "@/components/Row";
import {ThemedText} from "@/components/ThemedText";
import {useThemeColors} from "@/hooks/useThemeColors";
import RootView from "@/components/RootView";
import {Button, StyleSheet} from "react-native";
import {useSession} from "@/ctx";
import React from "react";

export default function Settings() {
    const colors = useThemeColors();
    const {signOut} = useSession();


    return (
        <RootView>
            <Row style={[styles.header, {marginBottom: 15}]}>
                <ThemedText variant="headline">Groupe</ThemedText>
            </Row>
            <Row>
                <ThemedText variant="body">Se déconnecter</ThemedText>
                <Button onPress={signOut} title={'Disconnected'} color={colors.danger}></Button>
            </Row>
        </RootView>
    );
}

const styles = StyleSheet.create({
    header: {
        padding: 1,
        justifyContent: 'space-between',
    },
});