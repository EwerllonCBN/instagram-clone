import { HStack, Image, Stack, Text, VStack } from 'native-base'
import React from 'react'
import { Logo } from '../assets/logo-white.png'

export function Header() {
  return (
    <HStack pt={5}>
      <Image
        alt="logo"
        resizeMode="contain"
        width={100}
        height={50}
        source={require('../assets/logo-white.png')}
      />
    </HStack>
  )
}
