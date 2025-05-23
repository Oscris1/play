import { Stack } from "expo-router"
import { Input, YStack } from "tamagui"
import * as Yup from 'yup'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

const validationSchema = Yup.object().shape({
  name: Yup.string().min(5, 'Imię musi mieć co najmniej 5 znaków').required('Imię jest wymagane'),
  email: Yup.string().email('Nieprawidłowy adres email').required('Email jest wymagany'),
})

const FormScreen = () => {
  const { control, handleSubmit, formState: { errors }, clearErrors } = useForm({
    resolver: yupResolver(validationSchema),
  })

  return (
    <>
      <Stack.Screen options={{ title: 'Formularz' }} />
      <YStack flex={1} alignItems="center" w="100%" backgroundColor="white" gap={16} padding={16}>
        <Controller
          control={control}
          name="name"
          render={({ field: { onChange, onBlur, value } }) => (
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
          )}
        />
        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, onBlur, value } }) => (
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
          )}
        />
      </YStack>
    </>
  )
}

export default FormScreen