import {FlatList, StyleSheet, View} from "react-native";
import {ThemedText} from "@/components/ThemedText";
import {useThemeColors} from "@/hooks/useThemeColors";
import {StatusCard} from "@/components/status/StatusCard";
import {Card} from "@/components/Card";

import FontAwesome from '@expo/vector-icons/FontAwesome';
import Entypo from '@expo/vector-icons/Entypo';
import RootView from "@/components/RootView";
import Row from "@/components/Row";

import Ionicons from '@expo/vector-icons/Ionicons';

export default function Index() {
    const colors = useThemeColors();

    const urgenceInfo = [{
        title: 'Police Secours',
        number: '17'
    }, {
        title: 'Pompier',
        number: '18'
    }, {
        title: 'Samu',
        number: '15'
    }, {
        title: 'Urgences',
        number: '112'
    }]

    const lists = Array.from({length: 9}, (_, k) => ({
        state: k % 2 === 0,
        id: k + 1
    }));

    return (
        <RootView>
            <Row style={{justifyContent: 'space-between'}}>
                <Row style={styles.header} gap={16}>
                    <FontAwesome name="hand-peace-o" size={24} color="black"/>
                    <View>
                        <ThemedText variant="headline" color="primary">Bonjour</ThemedText>
                        <ThemedText variant="body" color="primary">John Doe</ThemedText>
                    </View>
                </Row>
                <Ionicons name="notifications" size={24} color={colors.secondary}/>
            </Row>
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
                        {urgenceInfo.map((item, index) => (
                            <View key={index} style={styles.urgentInfo}>
                                <ThemedText variant='subtitle1' style={{fontWeight: 'bold'}}>{item.title}</ThemedText>
                                <ThemedText variant='subtitle1'>{item.number}</ThemedText>
                            </View>
                        ))}
                    </Card>
                </View>
            </View>
        </RootView>
    );
}

const styles = StyleSheet.create({
    header: {
        marginTop: 16,
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
