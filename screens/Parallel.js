import React, { useRef } from "react";
import { Button, StyleSheet, Text, View, Image, Animated } from "react-native";

const Parallel = (props) => {
  const springVal = useRef(new Animated.Value(0.3)).current;
  const springVal2 = useRef(new Animated.Value(0)).current;
  const slide = springVal2.interpolate({
    inputRange: [0, 0.25, 0.5, 1],
    outputRange: [0, -50, 50, 0],
  });
  const parallel = () => {
    Animated.parallel([
      Animated.spring(springVal, {
        toValue: 1,
        friction: 1,
        useNativeDriver: true,
      }),
      Animated.spring(springVal2, {
        toValue: 1,
        friction: 1,
        useNativeDriver: true,
      }),
    ]).start(() => {
      springVal.setValue(0.3);
      springVal2.setValue(0);
    });
  };
  return (
    <View style={styles.screen}>
      <Animated.View
        style={[{ transform: [{ scale: springVal }]}]}
      >
        <Image
          style={{ width: 180, height: 150 }}
          source={require("../assets/it.png")}
        />
      </Animated.View>
      <Animated.Text style={[{ transform: [{ translateX: slide }] }]}>
        Welcome To Faculty of IT!
      </Animated.Text>
      <Button title="RUN PARALLEL" onPress={parallel} />
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

export default Parallel;
