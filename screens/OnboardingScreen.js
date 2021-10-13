import React from "react";
import { StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { withTheme } from "react-native-elements";
import Onboarding from "react-native-onboarding-swiper";

const OnboardingScreen = ({ navigation }) => {
  const Done = ({ ...props }) => {
    return (
      <TouchableOpacity style={styles.button} {...props}>
        <Text style={styles.buttonText}>Done</Text>
      </TouchableOpacity>
    );
  };

  return (
    <Onboarding
      bottomBarHighlight={false}
      DoneButtonComponent={Done}
      onSkip={() => navigation.replace("Login")}
      onDone={() => navigation.navigate("Login")}
      pages={[
        {
          backgroundColor: "#fff59d",
          image: (
            <Image
              source={require("../assets/onboard-img/onboarding-img1.png")}
              style={styles.onboardingImage}
            />
          ),
          title: "One",
          subtitle: "First page",
        },
        {
          backgroundColor: "#ce93d8",
          image: (
            <Image
              source={require("../assets/onboard-img/onboarding-img2.png")}
              style={styles.onboardingImage}
            />
          ),
          title: "Two",
          subtitle: "Seccond page",
        },
        {
          backgroundColor: "#ef9a9a",
          image: (
            <Image
              source={require("../assets/onboard-img/onboarding-img3.png")}
              style={styles.onboardingImage}
            />
          ),
          title: "Three",
          subtitle: "Third page",
        },
      ]}
    />
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  onboardingImage: {
    width: 150,
    height: 150,
  },
  button: {
    marginHorizontal: 15,
    paddingVertical: 3,
    paddingHorizontal: 5,
  },
  buttonText: {
    fontSize: 16,
    color: "#fff",
  },
});
