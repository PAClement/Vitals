import Row from "@/components/Row";
import {ThemedText} from "@/components/ThemedText";
import {useThemeColors} from "@/hooks/useThemeColors";
import RootView from "@/components/RootView";
import {Button} from "react-native";
import {useSession} from "@/ctx";

export default function Settings() {
    const colors = useThemeColors();
    const { signOut } = useSession();


    return (
        <RootView>
            <Row>
                <ThemedText>Settings</ThemedText>
            </Row>
            <Button onPress={signOut} title={'Disconnected'}></Button>
        </RootView>
    );
}