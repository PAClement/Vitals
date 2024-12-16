import {SafeAreaView} from "react-native-safe-area-context";
import type {ViewProps, ViewStyle} from "react-native";
import {useThemeColors} from "@/hooks/useThemeColors";
import {StatusBar} from "expo-status-bar";
import React from "react";

type Props = ViewProps & {
    children?: React.ReactNode;
    isPadding?: boolean;
};

export default function RootView({style, children, isPadding = true, ...rest}: Props) {
    const colors = useThemeColors();
    return (
        <>
            <StatusBar style="dark"/>
            <SafeAreaView style={[rootStyle, {backgroundColor: colors.white, padding: isPadding ? 15 : 0}, style]}>
                {children}
            </SafeAreaView>
        </>
    );
}

const rootStyle = {
    flex: 1,
} satisfies ViewStyle
