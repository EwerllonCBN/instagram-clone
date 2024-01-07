import React from 'react'
import { SafeAreaView, Text } from 'react-native'
import { Header } from '../components/Header'

export function Home() {
  return (
    <SafeAreaView>
      <Header />
      <Text>Olá mundo</Text>
    </SafeAreaView>
  )
}
