import {SafeAreaView} from "react-native-safe-area-context";
import type {ViewProps, ViewStyle} from "react-native";
import {useThemeColors} from "@/hooks/useThemeColors";
import {StatusBar} from "expo-status-bar";
import React from "react";

type Props = ViewProps & {
    children?: React.ReactNode;
};

export default function RootView({style, children, ...rest}: Props) {
    const colors = useThemeColors();
    return (
        <>
            <StatusBar style="dark"/>
            <SafeAreaView style={[rootStyle, {backgroundColor: colors.white, padding: 12}, style]}>
                {children}
            </SafeAreaView>
        </>
    );
}

const rootStyle = {
    flex: 1,
    padding: 10,
} satisfies ViewStyle
