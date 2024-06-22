import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { HomepageProps } from "../navigation/RootStack";

const Home = ({ navigation }: HomepageProps) => {
  return (
    <View>
      <Text>Home</Text>
      <Button
        title="home"
        onPress={() => navigation.navigate("Details", { item: null })}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
