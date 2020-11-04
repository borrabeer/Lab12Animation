import React, { useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Animated,
  Easing,
} from "react-native";

const Sequence = (props) => {
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const fadeAnim2 = useRef(new Animated.Value(1)).current;
  const spin = fadeAnim2.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });
  const fadeOutIn = () => {
    Animated.sequence([
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim2, {
        toValue: 1,
        duration: 1000,
        easing: Easing.ease,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim2, {
        toValue: 0,
        duration: 1000,
        easing: Easing.ease,
        useNativeDriver: true,
      }),
    ]).start(() => {
      fadeAnim.setValue(1);
      fadeAnim2.setValue(0);
    });
  };
  return (
    <View style={styles.screen}>
      <Animated.View
        style={[{ opacity: fadeAnim, transform: [{ rotate: spin }] }]}
      >
        <Image
          style={{ width: 180, height: 150 }}
          source={require("../assets/it.png")}
        />
      </Animated.View>
      <Button title="RUN SEQUENCE" onPress={fadeOutIn} />
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

export default Sequence;
