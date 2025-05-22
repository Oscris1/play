import { Stack } from 'expo-router'
import { Button, H1, YStack } from 'tamagui';
import  SafeArea  from '~/components/SafeArea';



export default function Home() {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <SafeArea>
      <YStack flex={1}  alignItems="center" backgroundColor="white" gap={16} padding={16}>
          <H1>Play</H1>
          <Button width="100%" theme="blue">Formularz</Button>
          <Button width="100%" theme="blue">Api</Button>
      </YStack>
      </SafeArea>
    </>
  );
}
