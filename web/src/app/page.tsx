import { EmptyMemories } from '@/components/EmptyMemories'
import { Memory } from '@/components/Memory'
import { api } from '@/lib/api'

import { cookies } from 'next/headers'

interface IMemory {
  id: string
  coverUrl: string
  excerpt: string
  createdAt: string
}

export default async function Home() {
  const isAuthenticated = cookies().has('token')
  if (!isAuthenticated) {
    return <EmptyMemories />
  }

  const token = cookies().get('token')?.value

  const response = await api.get('/memories', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  const memories: IMemory[] = response.data

  if (memories.length === 0) {
    return <EmptyMemories />
  }

  return (
    <div className="flex flex-col gap-10 p-8">
      {memories.map((memory) => {
        return (
          <Memory
            key={memory.id}
            content={memory.excerpt}
            createdAt={memory.createdAt}
            id={memory.id}
            coverUrl={memory.coverUrl}
            isShowLink
          />
        )
      })}
    </div>
  )
}
