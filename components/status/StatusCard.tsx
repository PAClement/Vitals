import {Pressable, StyleSheet, View, ViewStyle} from "react-native";
import {Card} from "@/components/Card";
import {ThemedText} from "@/components/ThemedText";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import {useThemeColors} from "@/hooks/useThemeColors";
import {Link} from "expo-router";

type Props = {
    style: ViewStyle,
    id: number,
    state: boolean
}

export function StatusCard({style, id, state}: Props) {
    const colors = useThemeColors();
    return <Link href={{pathname: "/user/[id]", params: {id: id}}} asChild>
        <Pressable android_ripple={{color: colors.secondary, foreground: true}} style={style}>
            <Card style={{borderWidth: 0.5, borderColor: state ? colors.success : colors.danger}}>
                <View style={styles.header}>
                    <MaterialCommunityIcons name="account-circle-outline" size={20} color={colors.secondary}/>
                    <ThemedText variant='body'>User {id}
                    </ThemedText>
                </View>
            </Card>
        </Pressable>
    </Link>
}

const styles = StyleSheet.create({
    header: {
        paddingVertical: 8,
        alignItems: 'center',
        gap: 8
    },
})