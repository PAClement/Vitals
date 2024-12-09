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
                    <ThemedText variant="headline" color="primary">Bonjour</ThemedText>
                    <ThemedText variant="body" color="primary">John Doe</ThemedText>
                </View>
            </View>
            <View style={[styles.body]}>
                {/*Ur information*/}
                <View style={{marginVertical: 20}}>
                    <Card style={[styles.statusUserCard, {paddingVertical: 20}]}>
                        <Entypo name="dot-single" size={24} color={colors.success}/>
                        <ThemedText variant='subtitle1'>Votre État</ThemedText>
                    </Card>
                </View>
                {/*Top 5 friends*/}
                <View style={{marginVertical: 5}}>
                    <ThemedText variant="headline">Vos proches</ThemedText>
                    <View style={{paddingVertical: 10}}>
                        <FlatList data={lists} numColumns={3} columnWrapperStyle={[styles.gridGap]}
                                  contentContainerStyle={styles.gridGap} renderItem={({item}) =>
                            <StatusCard id={item.id} state={item.state} style={{flex: 1 / 3}}/>
                        } keyExtractor={(item) => item.id.toString()}/>
                    </View>
                </View>
                {/*Urgence information*/}
                <View style={{marginVertical: 5}}>
                    <ThemedText variant="headline">Information d'urgence</ThemedText>
                    <Card style={{paddingVertical: 20, paddingHorizontal: 10, gap: 10}}>
                        <View style={styles.urgentInfo}>
                            <ThemedText variant='subtitle1' style={{fontWeight: 'bold'}}>Police Secours</ThemedText>
                            <ThemedText variant='subtitle1'>17</ThemedText>
                        </View>
                        <View style={styles.urgentInfo}>
                            <ThemedText variant='subtitle1' style={{fontWeight: 'bold'}}>Pompier</ThemedText>
                            <ThemedText variant='subtitle1'>18</ThemedText>
                        </View>
                        <View style={styles.urgentInfo}>
                            <ThemedText variant='subtitle1' style={{fontWeight: 'bold'}}>Samu</ThemedText>
                            <ThemedText variant='subtitle1'>15</ThemedText>
                        </View>
                        <View style={styles.urgentInfo}>
                            <ThemedText variant='subtitle1' style={{fontWeight: 'bold'}}>Urgences</ThemedText>
                            <ThemedText variant='subtitle1'>112</ThemedText>
                        </View>
                    </Card>
                </View>
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
    urgentInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    }
})
