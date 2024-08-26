import { Stack } from "expo-router";
import GlobalProvider from "@/components/context/ContextProvider";

export default function RootLayout() {
  return (
    <GlobalProvider>
        <Stack screenOptions={{headerShown:false}}>
          <Stack.Screen name="index" options={{headerShown:false}}/>
          <Stack.Screen name="(auth)" options={{headerShown:false}}/>
          <Stack.Screen name="(home)" options={{headerShown:false}}/>
        </Stack>
    </GlobalProvider>
  );
}
