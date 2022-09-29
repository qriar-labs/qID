import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from '@expo/vector-icons'

import { Login } from '../screens/LogIn';
import { Dashboard } from "../screens/Dashboard";
import { ManageProfile } from "../screens/ManageProfile";
import { ProfileData } from '../components/ProfileData';
import { NavigationProp } from "@react-navigation/native";
import { IncreaseIdentity } from '../screens/IncreaseIdentity';
import { ShareLink } from '../screens/ShareLink';
import { ShowIdentity } from '../screens/ShowIdentity';
import { FakeQRCode } from '../screens/FakeQRCode';
import { VerifyIdentity } from '../screens/VerifyIdentity';
import { CredentialForm } from '../components/CredentialForm';
import { useTheme } from "styled-components";
import { Platform } from "react-native";

const {Navigator, Screen} = createBottomTabNavigator();

export function AppRoutes() {
    const theme = useTheme();

    return (
        <Navigator initialRouteName="Dashboard"
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: theme.colors.button,
                tabBarInactiveTintColor: theme.colors.text,
                tabBarLabelPosition: 'beside-icon',
                tabBarStyle: {
                    height: 60,
                    paddingVertical: Platform.OS === 'ios'? 20 : 0 ,
                }
                
            }}
        >
            <Screen
                name="Home"
                component={Dashboard}
                options={{
                    tabBarIcon: (({ size, color}) => 
                        <MaterialIcons 
                            name="home"
                            size={size}
                            color={color}
                        />
                    )
                }}
            />

            <Screen
                name="Credenciais"
                component={VerifyIdentity}
                options={{
                    tabBarIcon: (({ size, color}) => 
                        <MaterialIcons 
                            name="format-list-bulleted"
                            size={size}
                            color={color}
                        />
                    )
                }}
            />

            <Screen
                name="Configurações"
                component={Login}
                options={{
                    tabBarStyle: {
                        display: "none",
                      },
                    tabBarIcon: (({ size, color}) => 
                        <MaterialIcons 
                            name="settings"
                            size={size}
                            color={color}
                        />
                    )
                }}
            />

        </Navigator>
    )
}