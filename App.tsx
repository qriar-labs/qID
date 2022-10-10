import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';

import * as SplashScreen from 'expo-splash-screen';
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
} from '@expo-google-fonts/poppins'

import theme from './src/global/styles/theme'

import { getFocusedRouteNameFromRoute, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//import {AppRoutes} from './src/routes/app.routes'


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
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AppRoutes } from './src/routes/app.routes';
import { AccountForm } from './src/screens/AccountForm';

export interface RouterProps {
    navigation: NavigationProp<any, any>;
}

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

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
        {/* <AppRoutes /> */}
        <Stack.Navigator screenOptions={{ headerShown: false }}>      
              <Stack.Screen name="BottomTab" component={AppRoutes} />
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="Home" component={Dashboard} /> 
              <Stack.Screen name="ManageProfile" component={ManageProfile} />
              <Stack.Screen name="Profile" component={ProfileData} />
              <Stack.Screen name="Increment" component={IncreaseIdentity} />
              <Stack.Screen name="ShowIdentity" component={ShowIdentity} />
              <Stack.Screen name="ShareLink" component={ShareLink} />
              <Stack.Screen name="FakeQRCode" component={FakeQRCode} />
              <Stack.Screen name="VerifyIdentity" component={VerifyIdentity} />
              <Stack.Screen name="CredentialForm" component={CredentialForm} />
              <Stack.Screen name="AccountForm" component={AccountForm} />
      </Stack.Navigator>    
      </NavigationContainer>
    </ThemeProvider>
  );
}

// function BottomTab() {
//   return (
//     <Tab.Navigator>
//           <Tab.Screen 
//             name='Inicio'
//             component={Dashboard}
//             options={{ headerShown: false}}
//           />

//           <Tab.Screen 
//             name='Credenciais'
//             component={VerifyIdentity}
//             options={{ headerShown: false}}
//           />

//           <Tab.Screen 
//             name='Configurações'
//             component={Login}
//             options={{ headerShown: false}}
//           />

//         </Tab.Navigator>

//   )
// }