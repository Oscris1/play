import { Stack } from "expo-router"
import { YStack } from "tamagui"
import * as Yup from 'yup'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

const validationSchema = Yup.object().shape({
  name: Yup.string().min(5, 'Imię musi mieć co najmniej 5 znaków').required('Imię jest wymagane'),
  email: Yup.string().email('Nieprawidłowy adres email').required('Email jest wymagany'),
})

const FormScreen = () => {
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(validationSchema),
  })

  return (
    <>
      <Stack.Screen options={{ title: 'Formularz' }} />
      <YStack flex={1} alignItems="center" backgroundColor="white" gap={16} padding={16} />
    </>
  )
}

export default FormScreen