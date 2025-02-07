import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-sky-100 to-white p-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-emerald-600 mb-6">
          Welcome to Al-Aqsa Learning Adventure! 🕌
        </h1>
        
        <div className="relative mb-8">
          <Image
            src="/al-aqsa-mosque.jpg"
            alt="Al-Aqsa Mosque"
            width={672}
            height={448}
            className="rounded-lg shadow-lg w-full max-w-2xl mx-auto"
            priority
          />
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md mb-8">
          <p className="text-xl text-gray-700 mb-4">
            Hey Kids! Ready for an exciting journey to learn about one of the most amazing places on Earth? 
          </p>
          <p className="text-lg text-gray-600 mb-6">
            Join us on a fun adventure to discover the beautiful Al-Aqsa Mosque and its incredible history! 
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-emerald-50 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-emerald-700 mb-3">🎮 Play & Learn</h2>
            <p className="text-gray-600">Test your knowledge with fun quizzes and games!</p>
          </div>
          <div className="bg-sky-50 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-sky-700 mb-3">🌟 Earn Rewards</h2>
            <p className="text-gray-600">Collect stars and badges as you learn!</p>
          </div>
        </div>

        <button className="bg-emerald-500 hover:bg-emerald-600 text-white text-xl font-bold py-4 px-8 rounded-full shadow-lg transform transition hover:scale-105">
          Start Your Adventure!
        </button>
      </div>
    </main>
  );
}