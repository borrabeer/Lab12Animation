import React, { useRef } from "react";
import { Animated, Button, StyleSheet, Text, View } from "react-native";

const Spring = (props) => {
  const springVal = useRef(new Animated.Value(0.3)).current;
  const spring = () => {
    Animated.spring(springVal, {
      toValue: 1,
      friction: 1,
      useNativeDriver: true,
    }).start(() => {
      springVal.setValue(0.3);
    });
  };
  return (
    <View style={styles.screen}>
      <Animated.Image
        style={{ width: 180, height: 150, transform: [{ scale: springVal }] }}
        source={require("../assets/it.png")}
      />
      <Button title="Spring" onPress={spring} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Spring;
