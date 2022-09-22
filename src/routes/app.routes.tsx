import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Dashboard } from "../screens/Dashboard";
import { ManageProfile } from "../screens/ManageProfile";
import { useTheme } from "styled-components";
import { ProfileData } from "../components/ProfileData";

const {Navigator, Screen} = createBottomTabNavigator();

export function AppRoutes() {
    const theme = useTheme();

    return (
        <Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: theme.colors.secondary,
                tabBarInactiveTintColor: theme.colors.text,
                tabBarLabelPosition: 'beside-icon',
                
            }}
        >
            <Screen
                name="Home"
                component={Dashboard}
            />

            <Screen
                name="Cadastrar Perfil"
                component={ManageProfile}
            />

            <Screen
                name="Selecione"
                component={ProfileData}
            />

        </Navigator>
    )
}