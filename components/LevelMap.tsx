'use client'

import Link from 'next/link'

export default function LevelMap() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Link href="/learn" className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <h2 className="text-2xl font-bold text-green-800 mb-2">Level 1</h2>
        <p className="text-gray-600">Start your journey learning about Al-Quds</p>
      </Link>
    </div>
  )
} 