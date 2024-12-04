import {SafeAreaView} from "react-native-safe-area-context";
import {FlatList, StyleSheet, View, Text} from "react-native";
import {ThemedText} from "@/components/ThemedText";
import {useThemeColors} from "@/hooks/useThemeColors";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import {Card} from "@/components/Card";
import {StatusCard} from "@/components/status/StatusCard";

export default function Index() {
    const colors = useThemeColors();

    const lists = Array.from({length: 9}, (_, k) => ({
        name: 'List ' + (k + 1),
        id: k + 1
    }));

    return (
        <SafeAreaView style={[styles.container]}>
            <View style={styles.header}>
                <FontAwesome name="hand-peace-o" size={24} color="black"/>
                <ThemedText variant="headline" color="primary">Bonjour !</ThemedText>
            </View>
            <View style={[styles.body]}>
                <FlatList data={lists} numColumns={3} columnWrapperStyle={[styles.gridGap, styles.list]}
                          contentContainerStyle={styles.gridGap} renderItem={({item}) =>
                    <StatusCard id={item.id} name={item.name} style={{flex: 1 / 3}} />
                } keyExtractor={(item) => item.id.toString()}/>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 16,
        gap: 16,
    },
    body: {
        flex: 1,
    },
    gridGap: {
        gap: 8
    },
    list: {
        padding:12
    }
})
