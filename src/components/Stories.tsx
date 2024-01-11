import { Text, VStack, Image, ScrollView, Center, Divider } from 'native-base'
import React from 'react'
import { USERS } from '../data/users'
import { LinearGradient } from 'expo-linear-gradient'
import { TouchableOpacity } from 'react-native'

export function Stories() {
  return (
    <VStack p={2}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {USERS.map((story, index) => (
          <Center key={index.toString()}>
            <TouchableOpacity>
              <LinearGradient
                colors={['#ffb629', '#e92323', '#d32191']}
                start={{ x: 0.5, y: 1.3 }}
                end={{ x: 1, y: 1.1 }}
                style={{
                  width: 75,
                  height: 75,
                  borderRadius: 50,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginLeft: 10
                }}
              >
                <Image
                  w={70}
                  h={70}
                  alt="storys"
                  source={{ uri: story.image }}
                  borderRadius={50}
                  borderWidth={4}
                  borderColor="gray.700"
                />
              </LinearGradient>
            </TouchableOpacity>
            <Text ml={4} color="white">
              {story.username.length > 10
                ? story.username.slice(0, 8).toLowerCase() + '...'
                : story.username}
            </Text>
          </Center>
        ))}
        <Divider />
        <Text> Esse é meu primeiro stories</Text>
      </ScrollView>
    </VStack>
  )
}
