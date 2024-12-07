import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';
import {Tabs} from 'expo-router';
import {useThemeColors} from "@/hooks/useThemeColors";

export default function TabLayout() {
    const colors = useThemeColors();

    return (
        <Tabs screenOptions={{tabBarActiveTintColor: 'blue', headerShown: false}}>
            <Tabs.Screen
                name="index"
                options={{
                    title: '',
                    tabBarIcon: ({color}) => <Ionicons name="home" size={24} color={colors.primary}/>,
                }}
            />
            <Tabs.Screen
                name="Account"
                options={{
                    title: '',
                    tabBarIcon: ({color}) => <FontAwesome name="user-circle-o" size={24} color={colors.primary}/>,
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
