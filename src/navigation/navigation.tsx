
import React , { useState , useEffect , useContext } from 'react';
import { StyleSheet, Text, Image ,View} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { auth , onAuthStateChanged   } from "../firebase/firebase-utilities";
import { useDispatch, useSelector } from 'react-redux';
import { setLoading } from '../state-management/reducers';

import LoadingScreen from '../screens/LoadingScreen';

import Login from "../screens/Login";
import SignUp from "../screens/SignUp";
import WelcomeScreen from '../screens/Welcome';



const Stack = createStackNavigator();


function AuthScreens() {
    return (

        <Stack.Navigator screenOptions={{ headerShown: false }} >
    <Stack.Screen name="welcome_screen" component={WelcomeScreen} />
    <Stack.Screen name="login" component={Login} />
    <Stack.Screen name="signUp" component={SignUp} />
    </Stack.Navigator>

);
}

function AppScreens() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
    {/*<Stack.Screen name="chatListScreen" component={ChatListScreen} />*/}
    {/*<Stack.Screen name="choice" component={Choice} />*/}
    {/*<Stack.Screen name="createChat" component={CreateChat} />*/}
    {/*<Stack.Screen name="createimage" component={CreateImage} />*/}
    {/*<Stack.Screen name="socketChat" component={SocketChat} />*/}
    </Stack.Navigator>
);
}



export default function Home() {

    // const dispatch = useDispatch();
    // const [user, isUser] = useState(false);
    // const isLoading = useSelector((state) => state.isLoading);
    //
    // useEffect(() => {
    //     const redirect = onAuthStateChanged(auth, (user) => {
    //         if (user) {
    //             console.log(user);
    //             isUser(true);
    //             dispatch(setLoading(false));
    //         } else {
    //             dispatch(isUser(null));
    //             isUser(false);
    //         }
    //     });
    //
    //     return redirect;
    // }, []);


    //  Comment Below stack for Development Mode /////
    //  UnComment Below stack for Production Mode /////

    return (
        <NavigationContainer>
            {/*{isLoading ? (*/}
                    <LoadingScreen />
                {/*) : user ? ( <AppScreens />) : ( <AuthScreens />)}*/}
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