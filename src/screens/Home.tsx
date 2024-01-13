import React from 'react'
import { Divider, Text } from 'native-base'
import { Header } from '../components/Header'
import { VStack } from 'native-base'
import { Stories } from '../components/Stories'

export function Home() {
  return (
    <VStack flex={1} bgColor="gray.700">
      <Header />
      <Stories />
      <Divider mt={3} h={0.3} />
      <Text mt={2} color="white">
        Parte 2 em breve
      </Text>
    </VStack>
  )
}
