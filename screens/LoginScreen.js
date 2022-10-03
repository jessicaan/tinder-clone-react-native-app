import {
  View,
  Text,
  Button,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React, { useLayoutEffect } from "react";
import useAuth from "../hooks/useAuth";

import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const { signInWithGoogle, loading } = useAuth();
  const navigation = useNavigation();

  return (
    <View className="flex-1">
      <ImageBackground
        resizeMode="cover"
        className="flex-1"
        source={{ uri: "https://tinder.com/static/tinder.png" }}
      >
        <TouchableOpacity
          className="absolute bottom-40 ml-40 bg-white p-4 rounded-2xl"
          onPress={signInWithGoogle}
        >
          <Text className="text-center font-bold"> Entrar </Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default LoginScreen;
