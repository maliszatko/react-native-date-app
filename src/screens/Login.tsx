import { useState } from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";
import { useDispatch } from "react-redux";
import {
  auth,
  signInWithEmailAndPassword,
} from "../firebase/firebase-utilities";
import { setLoading, setUser } from "../state-management/reducers";
import StyledButton from "../components/StyledButton";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleSignIn = () => {
    // Dispatch setLoading action with true to show the loading screen
    dispatch(setLoading(true));

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        // Dispatch setUser action with the user data to update the user state
        dispatch(setUser(user));
      })
      .catch((error) => {
        // Handle error
        console.log(error.message);
        dispatch(setLoading(false));
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <Text style={styles.SignInLabel}>SignIn</Text>
      </View>

      <View style={{ width: "100%" }}>
        <TextInput
          autoCapitalize="none"
          style={styles.input}
          placeholder="Email"
          placeholderTextColor={"#ffffff"}
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          autoCapitalize="none"
          style={styles.input}
          placeholder="Password"
          placeholderTextColor={"#ffffff"}
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      </View>

      <View style={styles.container2}>
        <StyledButton title="SignIn" onPress={handleSignIn} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: "10%",
    backgroundColor: "#ffffff",
  },
  container1: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    paddingBottom: "20%",
    bottom: "10%",
  },
  container2: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    top: "6%",
  },
  SignInLabel: {
    fontSize: 50,
    color: "#224957",
    fontFamily: "OpenSans_800ExtraBold",
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 16,
    borderRadius: 12,
    backgroundColor: "#224957",
    fontSize: 18,
    fontFamily: "OpenSans_400Regular",
    color: "#ffffff",
  },
  forgotPassword: {
    marginTop: 16,
    color: "#555",
    textDecorationLine: "underline",
  },
  Button: {
    width: "100%",
    height: 48,
    borderRadius: 8,
    backgroundColor: "#007AFF",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Login;
