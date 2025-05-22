import { Stack } from 'expo-router'
import { Button, H1, YStack } from 'tamagui';
import  SafeArea  from '~/components/SafeArea';
import { FormInput, Antenna } from '@tamagui/lucide-icons';


export default function Home() {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <SafeArea>
      <YStack flex={1}  alignItems="center" backgroundColor="white" gap={16} padding={16}>
          <H1>Play</H1>
          <Button width="100%" theme="blue" iconAfter={<FormInput />}>Formularz</Button>
          <Button width="100%" theme="blue" iconAfter={<Antenna />}>Api</Button>
      </YStack>
      </SafeArea>
    </>
  );
}
