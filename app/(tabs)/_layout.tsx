import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import {Tabs} from 'expo-router';
import {useThemeColors} from "@/hooks/useThemeColors";
import {View, Platform} from "react-native";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export default function TabLayout() {
    const colors = useThemeColors();

    return (
        <Tabs screenOptions={{
            headerShown: false, animation: 'none',
            tabBarShowLabel: false,
            tabBarLabelPosition: 'beside-icon',
        }}>
            <Tabs.Screen
                name="index"
                options={{
                    title: '',
                    tabBarIcon: ({focused}) =>
                        <View style={{alignItems: 'center', justifyContent: 'center'}}>
                            <Ionicons name="home" size={24} color={focused ? colors.secondary : colors.text}/>
                        </View>
                }}
            />

            <Tabs.Screen
                name="Triggers"
                options={{
                    title: '',
                    tabBarIcon: ({focused}) => <Feather name="alert-circle" size={24}
                                                        color={focused ? colors.secondary : colors.text}/>,
                }}
            />

            <Tabs.Screen
                name="Friends"
                options={{
                    title: '',
                    tabBarIcon: ({focused}) =>
                        <View style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: colors.secondary,
                            width: Platform.OS === 'ios' ? 50 : 60,
                            height: Platform.OS === 'ios' ? 50 : 60,
                            top: Platform.OS === 'ios' ? -10 : -20,
                            borderRadius: Platform.OS === 'ios' ? 25 : 30,
                        }}>
                            <FontAwesome5 name="user-friends" size={24} color="white"/>
                        </View>
                }}
            />
            <Tabs.Screen
                name="Account"
                options={{
                    title: '',
                    tabBarIcon: ({focused}) => <FontAwesome name="user-circle-o" size={24}
                                                            color={focused ? colors.secondary : colors.text}/>,
                }}
            />

            <Tabs.Screen
                name="Settings"
                options={{
                    title: '',
                    tabBarIcon: ({focused}) => <AntDesign name="setting" size={24}
                                                          color={focused ? colors.secondary : colors.text}/>,
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
