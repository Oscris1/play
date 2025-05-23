import { Stack } from "expo-router"
import { YStack, Text, Spinner, Button, H4, Paragraph } from "tamagui"
import useGetQuote from "~/api/hooks/useQuotes"

const ApiScreen = () => {
  const { data, isFetching, error, refetch } = useGetQuote()
  return (
    <>
      <Stack.Screen options={{ title: 'Api' }} />
      
      <YStack 
        flex={1} 
        alignItems="center" 
        justifyContent="center" 
        backgroundColor="white" 
        gap={16} 
        padding={16}
        width="100%"
        >
          {error && <Text>Błąd: {error.message}</Text>}
          {isFetching && <Spinner size="large" color="blue" />}
          {data && !isFetching && !error && 
          <YStack width="100%" gap={16}>
            <H4 textAlign="center" color="blue" >"{data.quote}"</H4>
            <Paragraph textAlign="center">{data.author}</Paragraph>
            <Button 
              theme="blue" 
              width="100%" 
              onPress={() => refetch()} 
              disabled={isFetching}>
                Wygeneruj nowy
            </Button>
          </YStack>
          }
      </YStack>
    </>
  )
}

export default ApiScreen