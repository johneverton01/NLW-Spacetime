import Icon from '@expo/vector-icons/Feather'
import dayjs from 'dayjs'
import ptBr from 'dayjs/locale/pt-br'
import { Link } from 'expo-router'
import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'

dayjs.locale(ptBr)

export interface ViewMemoriesProps {
  excerpt: string
  coverUrl: string
  id: string
  createdAt: string
}

export function ViewMemories({
  excerpt,
  coverUrl,
  id,
  createdAt,
}: ViewMemoriesProps) {
  return (
    <>
      <View className="my-4">
        <View className="flex-row items-center gap-2">
          <View className="h-px w-5 bg-gray-50" />
          <Text className="font-body text-xs text-gray-100">
            {dayjs(createdAt).format('D [de] MMMM[,] YYYY')}
          </Text>
        </View>
      </View>
      <View className="space-y-4">
        <Image
          source={{
            url: coverUrl,
          }}
          className="aspect-video w-full rounded-lg"
          alt=""
        />
        <Text className="font-body text-base leading-relaxed text-gray-100">
          {excerpt}
        </Text>
        <Link href={`/memories/${id}`} asChild>
          <TouchableOpacity className="flex-row items-center gap-2">
            <Text className="font-body text-sm text-gray-200">
              Ler mais
              <Icon name="arrow-right" color="#9e9ea0" />
            </Text>
          </TouchableOpacity>
        </Link>
      </View>
    </>
  )
}
