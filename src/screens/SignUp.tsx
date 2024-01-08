import React from "react";
import { View, TextInput, StyleSheet, Text, Alert } from "react-native";
import {
  auth,
  createUserWithEmailAndPassword,
} from "../firebase/firebase-utilities";
import { updateProfile } from "firebase/auth";
import StyledButton from "../components/StyledButton";
import { setLoading, setUser } from "../state-management/reducers";
import { useDispatch } from "react-redux";
import { db, collection, addDoc } from "../firebase/firebase-utilities";

const SignUp = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [RePassword, setRePassword] = React.useState("");
  const [name, setName] = React.useState("");
  const dispatch = useDispatch();

  const handleSignUp = () => {
    if (password != RePassword) {
      Alert.alert("Password Do not match, please try again");
    } else {
      dispatch(setLoading(true));
      try {
        createUserWithEmailAndPassword(auth, email, password)
          .then(async (userCredential) => {
            // Signed in
            const user = userCredential.user;
            const docRef = await addDoc(collection(db, "users"), {
              id: user.uid,
              name: name,
              email: email,
            });
            console.log("Document written with ID: ", docRef.id);
            await updateProfile(user, {
              displayName: name,
            });
            dispatch(setUser(user));
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
          });
      } catch (error) {
        console.error("Error", error);
        dispatch(setLoading(false));
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <Text style={styles.SignUpLabel}>SignUp</Text>
      </View>

      <View style={{ width: "100%" }}>
        <TextInput
          style={styles.input}
          placeholder="Name"
          placeholderTextColor={"#ffffff"}
          value={name}
          onChangeText={setName}
        />
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
        <TextInput
          autoCapitalize="none"
          style={styles.input}
          placeholder="Retype Password"
          placeholderTextColor={"#ffffff"}
          secureTextEntry
          value={RePassword}
          onChangeText={setRePassword}
        />
      </View>

      <View style={styles.container2}>
        <StyledButton title="SignUp" onPress={handleSignUp} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: "10%",
    backgroundColor: "#ffffff",
  },
  container1: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    top: "10%",
    // backgroundColor: "red",
  },
  container2: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    bottom: "5%",
  },
  SignUpLabel: {
    fontSize: 50,
    marginBottom: 24,
    fontFamily: "OpenSans_800ExtraBold",
    color: "#224957",
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

export default SignUp;
