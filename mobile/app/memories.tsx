import Icon from '@expo/vector-icons/Feather'
import { Link, useRouter } from 'expo-router'
import * as SecureStore from 'expo-secure-store'
import React, { useEffect, useState } from 'react'
import { FlatList, TouchableOpacity, View } from 'react-native'
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context'
import NLWLogo from '../src/assets/nwl-spacetime-logo.svg'
import { api } from '../src/lib/api'
import { ViewMemories, ViewMemoriesProps } from './components/ViewMemories'

export default function Memories() {
  const { bottom, top } = useSafeAreaInsets()
  const [memories, setMemories] = useState<ViewMemoriesProps[]>([])
  const router = useRouter()
  const handleSignOut = async () => {
    await SecureStore.deleteItemAsync('token')
    router.push('/')
  }
  const loadMemories = async () => {
    const token = await SecureStore.getItemAsync('token')

    const responseMemories = await api.get('/memories', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    const memoriesData: ViewMemoriesProps[] = responseMemories.data
    setMemories(memoriesData)
  }

  useEffect(() => {
    loadMemories()
  }, [])

  return (
    <View
      className="flex-1 px-8"
      style={{ paddingBottom: bottom, paddingTop: top }}
    >
      <View className="mt-4 flex-row items-center justify-between">
        <NLWLogo />
        <View className="flex-row gap-2">
          <TouchableOpacity
            onPress={handleSignOut}
            className="h-10 w-10 items-center justify-center rounded-full bg-red-500"
          >
            <Icon name="log-out" size={16} color="#000" />
          </TouchableOpacity>

          <Link href="/new" asChild>
            <TouchableOpacity className="h-10 w-10 items-center justify-center rounded-full bg-green-500">
              <Icon name="plus" size={16} color="#000" />
            </TouchableOpacity>
          </Link>
        </View>
      </View>
      <SafeAreaView style={{ paddingBottom: bottom, paddingTop: 0 }}>
        <FlatList
          data={memories}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <ViewMemories
              excerpt={item.excerpt}
              coverUrl={item.coverUrl}
              id={item.id}
              createdAt={item.createdAt}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    </View>
  )
}
