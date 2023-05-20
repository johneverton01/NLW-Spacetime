'use client'
import { Memory, MemoryProps } from '@/components/Memory'
import { api } from '@/lib/api'
import dayjs from 'dayjs'
import ptBr from 'dayjs/locale/pt-br'
import Cookies from 'js-cookie'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'

dayjs.locale(ptBr)

export default function SingleMemory() {
  const [memory, setMemory] = useState<MemoryProps>()
  const params = useParams()
  const { id } = params

  const token = Cookies.get('token')

  async function getMemory() {
    const response = await api.get(`/memories/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    setMemory(response.data)
  }

  useEffect(() => {
    getMemory()
  }, [])

  if (!memory) {
    return
  }

  return (
    <div className="flex flex-col gap-10 p-8">
      <Memory
        content={memory?.content}
        coverUrl={memory?.coverUrl}
        createdAt={memory?.createdAt}
        id={memory.id}
        isShowLink={false}
      />
    </div>
  )
}
