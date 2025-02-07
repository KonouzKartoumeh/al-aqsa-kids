'use client'

import { useEffect, useState } from 'react'

export default function OccupationCounter() {
  const [years, setYears] = useState<number>(0)

  useEffect(() => {
    const startYear = 1967
    const currentYear = new Date().getFullYear()
    setYears(currentYear - startYear)
  }, [])

  return (
    <div className="bg-green-400 p-2 text-center text-white">
      <p className="text-lg">
        Years since occupation: <span className="font-bold">{years}</span>
      </p>
    </div>
  )
} 