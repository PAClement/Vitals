import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';
import {Tabs} from 'expo-router';
import {useThemeColors} from "@/hooks/useThemeColors";
import {View} from "react-native";

export default function TabLayout() {
    const colors = useThemeColors();

    return (
        <Tabs screenOptions={{tabBarActiveTintColor: 'blue', headerShown: false}}>
            <Tabs.Screen
                name="index"
                options={{
                    title: '',
                    tabBarIcon: ({focused}) =>
                        <View style={{alignItems: 'center', justifyContent: 'center'}}>
                            <Ionicons name="home" size={24} color={focused ? colors.primary : colors.text}/>
                        </View>,
                }}
            />
            <Tabs.Screen
                name="Account"
                options={{
                    title: '',
                    tabBarIcon: ({focused}) => <FontAwesome name="user-circle-o" size={24}
                                                            color={focused ? colors.primary : colors.text}/>,
                }}
            />
            <Tabs.Screen
                name="user/[id]"
                options={{
                    href: null,
                }}
            />
        </Tabs>
    );
}
