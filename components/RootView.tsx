import {SafeAreaView} from "react-native-safe-area-context";
import type {ViewProps, ViewStyle} from "react-native";
import {useThemeColors} from "@/hooks/useThemeColors";

type Props = ViewProps & {
    children?: React.ReactNode;
};

export default function RootView({style, children, ...rest}: Props) {
    const colors = useThemeColors();
    return (
        <SafeAreaView style={[rootStyle, {backgroundColor: colors.white}]}>
            {children}
        </SafeAreaView>
    );
}

const rootStyle = {
    flex: 1,
    padding: 10,
} satisfies ViewStyle
