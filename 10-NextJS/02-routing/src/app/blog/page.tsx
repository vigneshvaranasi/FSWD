'use client'
import { useRouter } from 'next/navigation'
function Blog () {
  const router = useRouter()
  return (
    <div className='bg-[#000] h-screen'>
      <h1 className='text-center text-white text-5xl pt-4'>
        This is Blog Page
      </h1>
      <div className='flex justify-center mt-4 gap-2'>
        <button
          onClick={() => router.push('/blog/first')}
          className='bg-[#333] text-white px-4 py-2 rounded-md'
        >
          First Blog Page
        </button>
        <button
          onClick={() => router.push('/blog/second')}
          className='bg-[#333] text-white px-4 py-2 rounded-md'
        >
          Second Blog Page
        </button>
      </div>
    </div>
  )
}

export default Blog
