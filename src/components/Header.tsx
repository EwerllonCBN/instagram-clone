import { HStack, Image, Stack, Text } from 'native-base'
import React from 'react'
import { TouchableOpacity } from 'react-native'

export function Header() {
  return (
    <HStack
      pt={5}
      paddingX={5}
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
    >
      <TouchableOpacity>
        <Image
          alt="logo"
          resizeMode="contain"
          width={100}
          height={50}
          source={require('../assets/logo-white.png')}
        />
      </TouchableOpacity>

      <Stack flexDirection="row" style={{ gap: 10 }}>
        <TouchableOpacity>
          <Image
            alt="like"
            resizeMode="contain"
            width={30}
            height={30}
            source={require('../assets/like-white.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Stack
            bg="red.600"
            pl={1}
            pr={1}
            borderRadius={10}
            position="absolute"
            left={4}
            bottom={4}
            zIndex={10}
          >
            <Text color="white">11</Text>
          </Stack>
          <Image
            alt="messenger"
            resizeMode="contain"
            width={30}
            height={30}
            source={require('../assets/messenger-white.png')}
          />
        </TouchableOpacity>
      </Stack>
    </HStack>
  )
}
