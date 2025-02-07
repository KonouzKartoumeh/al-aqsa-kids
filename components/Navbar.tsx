import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-green-600 text-white p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Aksana
        </Link>
        <div className="space-x-4">
          <Link href="/learn" className="hover:text-green-200">
            Learn
          </Link>
        </div>
      </div>
    </nav>
  )
} 