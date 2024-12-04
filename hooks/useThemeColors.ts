import {useColorScheme} from "react-native";
import {Colors} from "@/constants/Colors";

export function useThemeColors() {
    const theme: 'light' | 'dark' = useColorScheme() ?? "light";
    return Colors[theme];
}