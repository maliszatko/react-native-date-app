import { View, StyleSheet, Image } from "react-native";
import StyledButton from "../components/StyledButton";

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        resizeMode="contain"
        source={require("../../assets/illus2.jpeg")}
      />
      <View style={{ width: "100%" }}>
        <View style={styles.container1}>
          <StyledButton
            onPress={() => navigation.navigate("LogIn")}
            title={"Login"}
          />
        </View>
        <View style={styles.container1}>
          <StyledButton
            onPress={() => navigation.navigate("SignUp")}
            title={"signUp"}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  container1: {
    width: "100%",
    paddingTop: "5%",
    paddingHorizontal: "10%",
  },
  image: {
    width: "90%",
    height: "40%",
  },
});

export default WelcomeScreen;
