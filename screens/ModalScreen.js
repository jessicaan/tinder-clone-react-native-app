import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import useAuth from "../hooks/useAuth";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useNavigation } from "@react-navigation/native";

const ModalScreen = () => {
  const { user } = useAuth();
  const [image, setImage] = useState(null);
  const [occupation, setOccupation] = useState(null);
  const [age, setAge] = useState(null);
  const navigation = useNavigation();

  const incompleteForm = !image || !occupation || !age;
  const updateUserProfile = () => {
    setDoc(doc(db, "users", user.uid), {
      id: user.uid,
      displayName: user.displayName,
      photoURL: image,
      job: occupation,
      age: age,
      timestamp: serverTimestamp(),
    })
      .then(() => {
        navigation.navigate("Home");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <View className="flex-1 items-center pt-1">
      <Image
        className="h-20 w-full"
        resizeMode="contain"
        source={{ uri: "https://links.papareact.com/2pf" }}
      />
      <Text className="text-xl text-gray-500 p-2 mt-2 mb-7 font-bold">
        {" "}
        Oi {user.displayName} !
      </Text>

      <Text className="text-center p-4 font-bold text-red-400">
        Passo 1 : Foto do Perfil
      </Text>
      <TextInput
        value={image}
        onChangeText={(text) => setImage(text)}
        className="text-center text-xl pb-3"
        placeholder="Insira o link da foto desejada"
      />
      <Text className="text-center p-4 font-bold text-red-400">
        Passo 2 : Ocupação Profissional
      </Text>
      <TextInput
        value={occupation}
        onChangeText={(text) => setOccupation(text)}
        className="text-center text-xl pb-3"
        placeholder="Insira sua ocupação"
      />
      <Text className="text-center p-4 font-bold text-red-400">
        Passo 3 : Idade
      </Text>
      <TextInput
        value={age}
        onChangeText={(text) => setAge(text)}
        className="text-center text-xl pb-3"
        placeholder="Insira a sua idade"
        keyboardType="numeric"
      />

      <TouchableOpacity
        disabled={incompleteForm}
        className={`{" w-64 p-3 mt-20 rounded-xl bottom-0 "}, ${
          incompleteForm ? " bg-gray-400" : "bg-red-400"
        }`}
        onPress={updateUserProfile}
      >
        <Text className="text-center text-white text-xl ">
          Atualizar o Perfil
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ModalScreen;
