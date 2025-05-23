import { Stack } from "expo-router"
import { YStack } from "tamagui"

const FormScreen = () => {
  return (
    <>
      <Stack.Screen options={{ title: 'Formularz' }} />
      <YStack flex={1} alignItems="center" backgroundColor="white" gap={16} padding={16} />
    </>
  )
}

export default FormScreen