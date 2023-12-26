import React, { useState, useEffect, useContext } from "react";
import { StyleSheet, Text, Image, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { auth, onAuthStateChanged } from "../firebase/firebase-utilities";
import { setLoading, setUser } from "../state-management/reducers";

import LoadingScreen from "../screens/LoadingScreen";

import Login from "../screens/Login";
import SignUp from "../screens/SignUp";
import WelcomeScreen from "../screens/Welcome";
import HomeScreen from "../screens/HomeScreen";
import { useAppDispatch, useAppSelector } from "../hooks";

type RootStackParamList = {
  WelcomeScreen: undefined;
  LogIn: undefined;
  SignUp: undefined;
  Welcome: undefined;
};
const Stack = createStackNavigator<RootStackParamList>();

function AuthScreens() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <Stack.Screen name="LogIn" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
}

function AppScreens() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Welcome" component={HomeScreen} />
    </Stack.Navigator>
  );
}

export default function Home() {
  const dispatch = useAppDispatch();
  const [isUser, setIsUser] = useState(false);
  const user = useAppSelector((state) => state.user);
  const isLoading = useAppSelector((state) => state.isLoading);

  useEffect(() => {
    const redirect = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("user", user);
        setIsUser(true);
        dispatch(setLoading(false));
      } else {
        dispatch(setUser(null));
        setIsUser(false);
      }
    });

    return redirect;
  }, []);

  //  Comment Below stack for Development Mode /////
  //  UnComment Below stack for Production Mode /////

  return (
    <NavigationContainer>
      {isLoading ? <LoadingScreen /> : user ? <AppScreens /> : <AuthScreens />}
    </NavigationContainer>
  );

  //   ///  {/* Developent Mode  */}  ///
  //   ///  {/* UnComment below Stack for App */}  ///
  // return (
  //   <NavigationContainer>
  //      <AppScreens />
  //   </NavigationContainer>
  // );
}
