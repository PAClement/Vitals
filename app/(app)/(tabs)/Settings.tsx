import Row from "@/components/Row";
import {ThemedText} from "@/components/ThemedText";
import {useThemeColors} from "@/hooks/useThemeColors";
import RootView from "@/components/RootView";

export default function Settings() {
    const colors = useThemeColors();

    return (
        <RootView>
            <Row>
                <ThemedText>Settings</ThemedText>
            </Row>
        </RootView>
    );
}