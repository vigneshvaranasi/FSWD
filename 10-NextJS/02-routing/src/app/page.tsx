'use client'
import { useRouter } from 'next/navigation'
function Home () {
  const router = useRouter();
  return (
    <div className='bg-[#000] h-screen'>
      <h1 className='text-center text-white text-5xl pt-4'>
        This is Home Page
      </h1>
      <div className='flex justify-center mt-4 gap-2'>
        <button
          onClick={() => router.push('/about')}
          className='bg-[#333] text-white px-4 py-2 rounded-md'
        >
          About Page
        </button>
        <button
          onClick={() => router.push('/profile')}
          className='bg-[#333] text-white px-4 py-2 rounded-md'
        >
          Profile Page
        </button>
        <button
          onClick={() => router.push('/blog')}
          className='bg-[#333] text-white px-4 py-2 rounded-md'
        >
          Blog Page
        </button>
        <button
          onClick={() => router.push('/products')}
          className='bg-[#333] text-white px-4 py-2 rounded-md'
        >
          Products Page
        </button>
        <button
          onClick={() => router.push('/docs')}
          className='bg-[#333] text-white px-4 py-2 rounded-md'
        >
          Docs Page
        </button>
      </div>
    </div>
  )
}

export default Home
