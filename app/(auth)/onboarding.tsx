import { View, Text, SafeAreaView} from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { router } from 'expo-router'

const Onboarding = () => {
  return (
    <SafeAreaView className='h-full w-full items-center flex flex-col justify-center'>
       <Text className='text-md'>You see this screen because you are not authenticated.</Text>
      <View>
        <TouchableOpacity onPress={()=>router.push("/(auth)/register")}>
            <Text>Sign-up</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>router.push("/(auth)/login")}>
            <Text>Sign-in</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default Onboarding