import React from 'react'
import { motion, useScroll } from 'motion/react'

function App () {
  const { scrollYProgress } = useScroll()
  return (
    <div className='bg-black text-white'>
      <motion.div
        style={{
          scaleX: scrollYProgress
        }}
        className='bg-orange-400 origin-left p-0.5 fixed w-full'
      ></motion.div>
      <div className='p-5 sm:p-20'>
        <h1 className='text-center font-semibold text-2xl sm:text-4xl m-4'>
          Framer Motion Scroll
        </h1>
        <p className='text-justify'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta fugiat
          ea voluptates iusto ad eaque libero, praesentium optio, eveniet illo
          consequatur maiores quis deleniti blanditiis? Quam eum dignissimos
          cupiditate obcaecati, ratione laudantium nam quia dolor ea quo sit
          corporis, necessitatibus nisi enim error vel, ullam eos architecto!
          Explicabo excepturi saepe accusantium alias nisi. Aspernatur rem
          consequuntur, magni qui ut vel fugit quidem, fugiat praesentium quae
          suscipit deleniti beatae illum quos nulla voluptatibus dolor aperiam
          eius cum ex eveniet! Nostrum quos fugit sequi tempore repellat
          officiis laboriosam inventore eligendi nemo labore molestias eos
          dicta, corrupti vero nulla illo repudiandae reiciendis, recusandae
          voluptatem ut vitae quam sed tempora perferendis? Cum eos magnam nobis
          natus illo a quis, perspiciatis at, repudiandae consectetur quod.
          Quisquam sequi delectus modi consectetur iste perferendis asperiores
          repudiandae tenetur esse. Exercitationem, sunt magni, ea dolores iusto
          est minima quis dolorum tenetur asperiores id? Quae voluptas inventore
          voluptatum error velit sint reiciendis odit, delectus laboriosam illo
          quidem assumenda aperiam sunt minus soluta in commodi, ad similique
          quis, magni deleniti recusandae ipsam! Modi ex, deserunt ipsa odio
          veniam eos assumenda qui beatae nulla architecto voluptate
          perspiciatis commodi explicabo adipisci nemo repellendus fugiat
          perferendis aspernatur corporis facilis quod nostrum quas eaque
          repudiandae!
        </p>
        <p className='text-justify mt-5'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta fugiat
          ea voluptates iusto ad eaque libero, praesentium optio, eveniet illo
          consequatur maiores quis deleniti blanditiis? Quam eum dignissimos
          cupiditate obcaecati, ratione laudantium nam quia dolor ea quo sit
          corporis, necessitatibus nisi enim error vel, ullam eos architecto!
          Explicabo excepturi saepe accusantium alias nisi. Aspernatur rem
          consequuntur, magni qui ut vel fugit quidem, fugiat praesentium quae
          suscipit deleniti beatae illum quos nulla voluptatibus dolor aperiam
          eius cum ex eveniet! Nostrum quos fugit sequi tempore repellat
          officiis laboriosam inventore eligendi nemo labore molestias eos
          dicta, corrupti vero nulla illo repudiandae reiciendis, recusandae
          voluptatem ut vitae quam sed tempora perferendis? Cum eos magnam nobis
          natus illo a quis, perspiciatis at, repudiandae consectetur quod.
          Quisquam sequi delectus modi consectetur iste perferendis asperiores
          repudiandae tenetur esse. Exercitationem, sunt magni, ea dolores iusto
          est minima quis dolorum tenetur asperiores id? Quae voluptas inventore
          voluptatum error velit sint reiciendis odit, delectus laboriosam illo
          quidem assumenda aperiam sunt minus soluta in commodi, ad similique
          quis, magni deleniti recusandae ipsam! Modi ex, deserunt ipsa odio
          veniam eos assumenda qui beatae nulla architecto voluptate
          perspiciatis commodi explicabo adipisci nemo repellendus fugiat
          perferendis aspernatur corporis facilis quod nostrum quas eaque
          repudiandae!
        </p>
        <p className='text-justify mt-5'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta fugiat
          ea voluptates iusto ad eaque libero, praesentium optio, eveniet illo
          consequatur maiores quis deleniti blanditiis? Quam eum dignissimos
          cupiditate obcaecati, ratione laudantium nam quia dolor ea quo sit
          corporis, necessitatibus nisi enim error vel, ullam eos architecto!
          Explicabo excepturi saepe accusantium alias nisi. Aspernatur rem
          consequuntur, magni qui ut vel fugit quidem, fugiat praesentium quae
          suscipit deleniti beatae illum quos nulla voluptatibus dolor aperiam
          eius cum ex eveniet! Nostrum quos fugit sequi tempore repellat
          officiis laboriosam inventore eligendi nemo labore molestias eos
          dicta, corrupti vero nulla illo repudiandae reiciendis, recusandae
          voluptatem ut vitae quam sed tempora perferendis? Cum eos magnam nobis
          natus illo a quis, perspiciatis at, repudiandae consectetur quod.
          Quisquam sequi delectus modi consectetur iste perferendis asperiores
          repudiandae tenetur esse. Exercitationem, sunt magni, ea dolores iusto
          est minima quis dolorum tenetur asperiores id? Quae voluptas inventore
          voluptatum error velit sint reiciendis odit, delectus laboriosam illo
          quidem assumenda aperiam sunt minus soluta in commodi, ad similique
          quis, magni deleniti recusandae ipsam! Modi ex, deserunt ipsa odio
          veniam eos assumenda qui beatae nulla architecto voluptate
          perspiciatis commodi explicabo adipisci nemo repellendus fugiat
          perferendis aspernatur corporis facilis quod nostrum quas eaque
          repudiandae!
        </p>
      </div>
    </div>
  )
}

export default App
