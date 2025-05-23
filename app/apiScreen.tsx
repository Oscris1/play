import { Stack } from "expo-router"
import { YStack } from "tamagui"

const ApiScreen = () => {
  return (
    <>
      <Stack.Screen options={{ title: 'Api' }} />
      <YStack flex={1} alignItems="center" backgroundColor="white" gap={16} padding={16} />
    </>
  )
}

export default ApiScreen