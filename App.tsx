import React from 'react';
import { ThemeProvider } from 'styled-components';

import * as SplashScreen from 'expo-splash-screen';
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
} from '@expo-google-fonts/poppins'

import theme from './src/global/styles/theme'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import { Login } from './src/screens/LogIn';
import { Dashboard } from "./src/screens/Dashboard";
import { ManageProfile } from "./src/screens/ManageProfile";
import { ProfileData } from './src/components/ProfileData';
import { NavigationProp } from "@react-navigation/native";
import { IncreaseIdentity } from './src/screens/IncreaseIdentity';
import { ShareLink } from './src/screens/ShareLink';
import { ShowIdentity } from './src/screens/ShowIdentity';
import { FakeQRCode } from './src/screens/FakeQRCode';
import { VerifyIdentity } from './src/screens/VerifyIdentity';
import { CredentialForm } from './src/components/CredentialForm';

export interface RouterProps {
    navigation: NavigationProp<any, any>;
}

const Tab = createNativeStackNavigator();

export default function App() {
  SplashScreen.preventAutoHideAsync();
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  });

  if(!fontsLoaded) {
    return null;
  }

  SplashScreen.hideAsync();
  
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Tab.Navigator screenOptions={{ headerShown: false }}>
          <Tab.Screen name="Login" component={Login} />
          <Tab.Screen name="Home" component={Dashboard} />
          <Tab.Screen name="ManageProfile" component={ManageProfile} />
          <Tab.Screen name="Profile" component={ProfileData} />
          <Tab.Screen name="Increment" component={IncreaseIdentity} />
          <Tab.Screen name="ShowIdentity" component={ShowIdentity} />
          <Tab.Screen name="ShareLink" component={ShareLink} />
          <Tab.Screen name="FakeQRCode" component={FakeQRCode} />
          <Tab.Screen name="VerifyIdentity" component={VerifyIdentity} />
          <Tab.Screen name="CredentialForm" component={CredentialForm} />
        </Tab.Navigator>
        
      </NavigationContainer>
    </ThemeProvider>
  );
}

