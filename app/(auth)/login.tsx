import { View, Text,SafeAreaView } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { useGlobalStore } from '@/components/context/ContextProvider'

const Login = () => {

  const {user,handleSetData} = useGlobalStore()

  React.useEffect(() => {
    console.log("User state changed login:", user);
  }, [user]);

  return (
    <SafeAreaView className='h-full w-full items-center flex flex-col justify-center' >
      <Text className='font-bold text-4xl'>Login page</Text>
      <TouchableOpacity onPress={handleSetData}>
        <Text>Log me in</Text>
      </TouchableOpacity>
      <Text className='text-center'>Click the log in button above to simulate authentication. Under the hood, this is just simply a boolean value that dictates which screen is shown.</Text>
    </SafeAreaView>
  )
}

export default Login