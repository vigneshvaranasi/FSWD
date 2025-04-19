'use client'
import { useRouter } from 'next/navigation'
function Products () {
  const router = useRouter()
  return (
    <div className='bg-[#000] h-screen'>
      <h1 className='text-center text-white text-5xl pt-4'>
        This is Products Page
      </h1>
      <div className='flex justify-center mt-4 gap-2'>
        <button
          onClick={() => router.push('/products/1')}
          className='bg-[#333] text-white px-4 py-2 rounded-md'
        >
          Product 1
        </button>
        <button
          onClick={() => router.push('/products/2')}
          className='bg-[#333] text-white px-4 py-2 rounded-md'
        >
          Product 2
        </button>
        <button
          onClick={() => router.push('/products/100')}
          className='bg-[#333] text-white px-4 py-2 rounded-md'
        >
          Product 100
        </button>
      </div>
    </div>
  )
}

export default Products
