import {ThemedText} from "@/components/ThemedText";
import RootView from "@/components/RootView";
import AntDesign from '@expo/vector-icons/AntDesign';
import {Pressable, StyleSheet, Image, View} from "react-native";
import Row from "@/components/Row";
import {useThemeColors} from "@/hooks/useThemeColors";
import {Card} from "@/components/Card";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function Index() {
    const colors = useThemeColors();

    const userInfo = [
        {name: "address", data: "la bas"},
        {name: "phone", data: "123-456-7890"},
        {name: "email", data: "doe.john@example.com"},
    ];

    return (
        <RootView isPadding={false}>
            <View style={{paddingHorizontal: 12, paddingTop: 12, backgroundColor: colors.grayWhite}}>
                <Row style={styles.header}>
                    <Pressable>
                        <AntDesign name="setting" size={24} color="black"/>
                    </Pressable>
                </Row>
                <Row style={styles.accountImg}>
                    <View style={{
                        paddingHorizontal: 10,
                        borderRadius: 100,
                        gap: 10,
                    }}>
                        <View style={styles.addPhotoIcon}>
                            <MaterialIcons name="add-a-photo" size={16} color={colors.secondary}/>
                        </View>
                        <Image source={require("@/assets/images/user-account.png")} style={{
                            height: 100,
                            width: 100,
                            borderRadius: 100,
                            resizeMode: 'contain',
                        }}/>
                        <ThemedText variant="headline" style={{textAlign: 'center'}}>Doe John </ThemedText>
                    </View>
                </Row>
            </View>
            <Row style={{padding: 15}}>
                <View style={{width: '100%', gap: 15}}>
                    <ThemedText variant="headline">Vos informations</ThemedText>
                    <Card style={{padding: 15, gap: 5}}>
                        {userInfo.map((item, index) => (
                            <View key={index} style={styles.userInfo}>
                                <ThemedText variant='subtitle1' style={{fontWeight: 'bold'}}>{item.name}</ThemedText>
                                <ThemedText variant='subtitle1'>{item.data}</ThemedText>
                            </View>
                        ))}
                    </Card>
                </View>
            </Row>
        </RootView>

    );
}

const styles = StyleSheet.create({
    header: {
        justifyContent: 'flex-end',
    },
    accountImg: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30,
    },
    userInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
    addPhotoIcon: {
        position: 'absolute',
        width: 30,
        right: 0,
    }
})