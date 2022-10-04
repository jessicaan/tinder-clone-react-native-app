import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { LogBox } from "react-native";
LogBox.ignoreAllLogs(true);
import { NavigationContainer } from "@react-navigation/native";
import { TailwindProvider } from "tailwindcss-react-native";
import StackNavigator from "./StackNavigator";
import { AuthProvider } from "./hooks/useAuth";

export default function App() {
  return (
    <NavigationContainer>
      <TailwindProvider>
        <AuthProvider>
          <StackNavigator />
        </AuthProvider>
      </TailwindProvider>
    </NavigationContainer>
  );
}
