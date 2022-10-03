import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

const MatchScreen = () => {
  const navigation = useNavigation();
  const { params } = useRoute();

  const { loggedInProfile, userSwiped } = params;

  return (
    <View className="h-full bg-red-500 pt-20 opacity-90">
      <View className="justify-center px-10 pt-20">
        <Image
          className="h-20 w-full mb-5 mt-5"
          source={{ uri: "https://links.papareact.com/mg9" }}
        />
      </View>
      <Text className="text-white text-center mt-5 font-semibold mb-4">
        Você e {userSwiped.displayName} gostaram um do outro!
      </Text>
      <View className="flex-row justify-evenly mt-5">
        <Image
          className="h-32 w-32 rounded-full"
          source={{ uri: loggedInProfile.photoURL }}
        />
        <Image
          className="h-32 w-32 rounded-full"
          source={{ uri: userSwiped.photoURL }}
        />
      </View>

      <TouchableOpacity
        className="bg-white m-5 px-10 mx-20 py-8 rounded-full mt-20"
        onPress={() => {
          navigation.goBack();
          navigation.navigate("Chat");
        }}
      >
        <Text className="text-center">Envie uma mensagem...</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MatchScreen;
