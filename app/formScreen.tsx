import { Stack } from "expo-router"
import { Button, Input, YStack, Text } from "tamagui"
import * as Yup from 'yup'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from "react"

const validationSchema = Yup.object().shape({
  name: Yup.string().min(5, 'Imię musi mieć co najmniej 5 znaków').required('Imię jest wymagane'),
  email: Yup.string().email('Nieprawidłowy adres email').required('Email jest wymagany'),
})

const FormScreen = () => {
  const { control, handleSubmit, formState: { errors }, clearErrors, reset } = useForm({
    resolver: yupResolver(validationSchema),
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
  })

  const [message, setMessage] = useState('')

  const onSubmit = (data: { name: string, email: string }) => {
    console.log(data)
    setMessage('Dziękujemy, dane zapisane!')
    reset()
  }

  return (
    <>
      <Stack.Screen options={{ title: 'Formularz' }} />
      <YStack flex={1} alignItems="center" w="100%" backgroundColor="white" gap={16} padding={16}>
        <Controller
          control={control}
          name="name"
          render={({ field: { onChange, onBlur, value } }) => (
            <YStack w="100%" gap={4}>
              <Input
                w="100%"
                onChangeText={(text) => {
                onChange(text)
                clearErrors('name')
              }}
              onBlur={onBlur}
              value={value}
              placeholder="Imię"
            />
            {errors.name && <Text color="red">{errors.name.message}</Text>}
            </YStack>
          )}
        />
        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, onBlur, value } }) => (
            <YStack w="100%" gap={4}>
            <Input
              w="100%"
              onChangeText={(text) => { 
                onChange(text)
                clearErrors('email')
              }}
              onBlur={onBlur}
              value={value}
              placeholder="Email"
            />
            {errors.email && <Text color="red">{errors.email.message}</Text>}
            </YStack>
          )}
        />
        <Button theme="blue" w="100%" onPress={handleSubmit(onSubmit)}>Wyslij</Button>
      </YStack>
    </>
  )
}

export default FormScreen