export default function Learn() {
  return (
    <main className="max-w-6xl mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold text-green-800 mb-8">Learning Resources</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-700 mb-4">Videos</h2>
          <div className="space-y-4">
            <div className="aspect-w-16 aspect-h-9">
              <div className="bg-green-100 w-full h-48 flex items-center justify-center">
                Video Placeholder
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-700 mb-4">Articles</h2>
          <div className="space-y-4">
            <article className="border-b border-green-100 pb-4">
              <h3 className="text-xl font-semibold text-green-600">History of Al-Quds</h3>
              <p className="text-gray-600">Click to read more about the rich history...</p>
            </article>
          </div>
        </div>
      </div>
    </main>
  )
} 