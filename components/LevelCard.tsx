'use client'

import { useRouter } from 'next/navigation'
import Image from 'next/image'

interface LevelCardProps {
  id: number
  title: string
  description: string
  isLocked: boolean
  imageUrl: string
}

export default function LevelCard({ id, title, description, isLocked, imageUrl }: LevelCardProps) {
  const router = useRouter()

  const handleClick = () => {
    if (!isLocked) {
      router.push(`/levels/${id}`)
    }
  }

  return (
    <div 
      onClick={handleClick}
      className={`
        relative rounded-lg p-4 
        ${isLocked ? 'bg-gray-300' : 'bg-green-100 hover:bg-green-200'} 
        transition-all duration-300 cursor-pointer
      `}
    >
      <div className="relative w-full h-48">
        <Image 
          src={imageUrl} 
          alt={title}
          fill
          className="object-cover rounded-md"
        />
      </div>
      <h3 className="mt-2 text-xl font-bold text-green-800">{title}</h3>
      <p className="text-green-700">{description}</p>
      
      {isLocked && (
        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex items-center justify-center">
          <span className="text-white text-2xl">🔒</span>
        </div>
      )}
    </div>
  )
} 