import { HStack, Image, Stack, Text, VStack } from 'native-base'
import React from 'react'
import { Logo } from '../assets/logo-white.png'

export function Header() {
  return (
    <HStack pt={5}>
      <Image alt="logo" source={require('../assets/logo-white.png')} />
      <Text color="white">Name</Text>
    </HStack>
  )
}
