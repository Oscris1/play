import { SafeAreaView } from 'react-native-safe-area-context'
import { styled } from 'tamagui'
import { ViewProps } from 'react-native'


const SafeArea = styled(SafeAreaView as React.ComponentType<ViewProps>, {
  name: 'SafeArea',
  flex: 1,
  backgroundColor: 'white',
})

export default SafeArea
