import dayjs from 'dayjs'
import ptBr from 'dayjs/locale/pt-br'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
dayjs.locale(ptBr)

export interface MemoryProps {
  id: string
  createdAt: string
  coverUrl: string
  content: string
  isShowLink: boolean
}

export function Memory({
  id,
  createdAt,
  coverUrl,
  content,
  isShowLink,
}: MemoryProps) {
  return (
    <div key={id} className="space-y-4">
      <time className="-ml-6 flex items-center gap-2 text-sm text-gray-100 before:h-px before:w-5 before:bg-gray-50">
        {dayjs(createdAt).format('D [de] MMMM[,] YYYY')}
      </time>
      <Image
        src={coverUrl}
        alt=""
        width={592}
        height={280}
        className="aspect-video w-full rounded-lg object-contain"
      />
      <p className="text-lg leading-relaxed text-gray-100">{content}</p>
      {isShowLink ? (
        <Link
          href={`memories/${id}`}
          className="flex items-center gap-2 text-gray-100 transition-colors hover:text-gray-50"
        >
          Ler mais
          <ArrowRight className="h-4 w-4" />
        </Link>
      ) : (
        <Link
          href="/"
          className="flex items-center gap-2 text-gray-100 transition-colors hover:text-gray-50"
        >
          <ArrowLeft className="h-4 w-4" />
          Voltar
        </Link>
      )}
    </div>
  )
}
