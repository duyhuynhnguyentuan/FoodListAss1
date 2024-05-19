import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextStyle,
  ViewStyle,
} from "react-native";

const styles = StyleSheet.create({
  sectionContainer: {
    padding: 14,
    backgroundColor: "#EE9972",
  } as ViewStyle,
  text: {
    fontSize: 15,
    textAlign: "center",
  } as TextStyle,
});

const Footer: React.FC = () => {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.text}>All rights reserved by SE160557, 2024</Text>
    </View>
  );
};

export default Footer;
