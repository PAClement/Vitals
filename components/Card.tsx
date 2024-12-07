import {View, type ViewProps, ViewStyle} from "react-native";
import {Shadows} from "@/constants/Shadows";
import {useThemeColors} from "@/hooks/useThemeColors";

type Props = ViewProps & {
    shadowColor?: string
}

export function Card({style, ...rest}: Props) {
    const colors = useThemeColors();
    return <View
        style={[style, styles, {
            backgroundColor: colors.white
        }]} {...rest}/>
}

const styles = {
    borderRadius: 8,
    ...Shadows.dp2
} satisfies ViewStyle