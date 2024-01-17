import { Center, Image, ScrollView, Text, VStack } from 'native-base'
import React from 'react'
import { USERS } from '../data/users'
import { LinearGradient } from 'expo-linear-gradient'
import { TouchableOpacity } from 'react-native'

export function Stories() {
  return (
    <VStack p={2}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {USERS.map((stories, index) => (
          <Center key={index.toString()}>
            <TouchableOpacity>
              <LinearGradient
                colors={['#ffb629', '#ff3300', '#e92323', '#d32191']}
                start={{ x: 0.5, y: 1.3 }}
                end={{ x: 1, y: 1.1 }}
                style={{
                  width: 75,
                  height: 75,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 50,
                  marginLeft: 10
                }}
              >
                <Image
                  alt="stories"
                  w={70}
                  h={70}
                  borderRadius={50}
                  borderWidth={4}
                  borderColor="gray.700"
                  source={{ uri: stories.image }}
                />
              </LinearGradient>
            </TouchableOpacity>

            <Text color="white" ml={4}>
              {stories.username.length > 10
                ? stories.username.slice(0, 7) + '...'
                : stories.username}
            </Text>
          </Center>
        ))}
      </ScrollView>
    </VStack>
  )
}
