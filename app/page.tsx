import LevelMap from '@/components/LevelMap'
import OccupationCounter from '@/components/OccupationCounter'

export default function Home() {
  return (
    <main className="min-h-screen bg-green-50">
      <OccupationCounter />
      
      <div className="max-w-6xl mx-auto py-8 px-4">
        <h1 className="text-4xl font-bold text-green-800 mb-8 text-center">
          Welcome to Aksana!
        </h1>
        
        <LevelMap />
      </div>
    </main>
  )
}