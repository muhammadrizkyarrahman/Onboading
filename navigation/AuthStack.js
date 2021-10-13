import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "../screens/LoginScreen";
import OnboardingScreen from "../screens/OnboardingScreen";

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Onboarding"
        component={OnboardingScreen}
        options={{ headerShown: null }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: null }}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
