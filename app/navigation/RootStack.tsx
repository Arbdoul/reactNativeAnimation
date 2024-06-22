import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet } from "react-native";
import { Product } from "../../assets/fake";
import Details from "../screens/details";
import Home from "../screens/home";

type RootStackParamList = {
  Home: undefined;
  Details: { item: Product | null };
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

export type HomepageProps = NativeStackScreenProps<RootStackParamList, "Home">;
export type DetailspageProps = NativeStackScreenProps<
  RootStackParamList,
  "Details"
>;

export const RootStackNavigation = () => {
  return (
    <RootStack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "1C357F" },
        headerTintColor: "#fff",
      }}
    >
      <RootStack.Group>
        <RootStack.Screen name="Home" component={Home} />
        <RootStack.Screen name="Details" component={Details} />
      </RootStack.Group>
    </RootStack.Navigator>
  );
};

const styles = StyleSheet.create({});
