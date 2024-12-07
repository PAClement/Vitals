import React from 'react';
import {View, Text} from 'react-native';
import RootView from "@/components/RootView";
import {useLocalSearchParams} from "expo-router";

export default function user() {
    const params = useLocalSearchParams();
    return (
        <RootView>
            <Text>user {params.id}</Text>
        </RootView>
    );
};
