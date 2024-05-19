import React from 'react';
import { View, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';

const styles = StyleSheet.create({
  sectionContainer: {
    paddingTop: 45,
    backgroundColor: '#EE9972',
  } as ViewStyle,
  text: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 28,
  } as TextStyle,
});

const Header: React.FC = () => {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.text}>Little Lemon</Text>
    </View>
  );
};

export default Header;
