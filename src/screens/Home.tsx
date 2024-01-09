import React from 'react'
import { SafeAreaView, Text } from 'react-native'
import { Header } from '../components/Header'
import { VStack } from 'native-base'
import { Stories } from '../components/Stories'

export function Home() {
  return (
    <VStack flex={1} bgColor="gray.700">
      <Header />
      <Stories />
      <Text>Olá mundo</Text>
    </VStack>
  )
}
