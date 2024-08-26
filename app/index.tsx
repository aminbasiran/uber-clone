import { Text, View } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { useGlobalStore } from "@/components/context/ContextProvider";
import { Redirect } from "expo-router";
import { useEffect } from "react";
import { useRouter } from "expo-router";

const index = () => {

  const {user} = useGlobalStore()

  if (user) {
    return <Redirect href={"/(home)/home"} />;
  }
  return <Redirect href="/(auth)/onboarding" />;
  // useEffect(() => {
  //   if (user) {
  //     router.push('/(home)/home');
  //   } else {
  //     router.push('/(auth)/onboarding');
  //   }
  // }, [user]);
  
  return null; 
  
}

export default index
