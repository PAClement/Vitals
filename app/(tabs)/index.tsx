import {FlatList, StyleSheet, View} from "react-native";
import {ThemedText} from "@/components/ThemedText";
import {useThemeColors} from "@/hooks/useThemeColors";
import {StatusCard} from "@/components/status/StatusCard";
import {Card} from "@/components/Card";

import FontAwesome from '@expo/vector-icons/FontAwesome';
import Entypo from '@expo/vector-icons/Entypo';
import RootView from "@/components/RootView";

export default function Index() {
    const colors = useThemeColors();

    const lists = Array.from({length: 9}, (_, k) => ({
        state: k % 2 === 0,
        id: k + 1
    }));

    return (
        <RootView>
            <View style={styles.header}>
                <FontAwesome name="hand-peace-o" size={24} color="black"/>
                <View>
                    <ThemedText variant="headlineBold" color="primary">Bonjour</ThemedText>
                    <ThemedText variant="body" color="primary">John Doe</ThemedText>
                </View>
            </View>
            <View style={[styles.body]}>
                {/*Ur information*/}
                <Card style={[styles.statusUserCard, {marginVertical: 20, paddingVertical: 20}]}>
                    <Entypo name="dot-single" size={24} color={colors.success}/>
                    <ThemedText variant='subtitle1'>Votre État</ThemedText>
                </Card>
                {/*Top 5 friends*/}
                <FlatList data={lists} numColumns={3} columnWrapperStyle={[styles.gridGap]}
                          contentContainerStyle={styles.gridGap} renderItem={({item}) =>
                    <StatusCard id={item.id} state={item.state} style={{flex: 1 / 3}}/>
                } keyExtractor={(item) => item.id.toString()}/>
            </View>
        </RootView>
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 16,
        gap: 16,
    },
    statusUserCard: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    body: {
        flex: 1,
    },
    gridGap: {
        gap: 8
    },
})
