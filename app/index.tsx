import { Stack, useRouter } from 'expo-router'
import { Button, H1, YStack } from 'tamagui';
import  SafeArea  from '~/components/SafeArea';
import { FormInput, Antenna } from '@tamagui/lucide-icons';


export default function Home() {
  const router = useRouter();
  return (
    <>
      <Stack.Screen options={{ headerShown: false, title: 'Dom' }} />
      <SafeArea>
      <YStack flex={1}  alignItems="center" backgroundColor="white" gap={16} padding={16}>
          <H1>Play</H1>
          <Button width="100%" theme="blue" iconAfter={<FormInput />} onPress={() => router.push('/formScreen')}>Formularz</Button>
          <Button width="100%" theme="blue" iconAfter={<Antenna />} onPress={() => router.push('/apiScreen')}>Api</Button>
      </YStack>
      </SafeArea>
    </>
  );
}
