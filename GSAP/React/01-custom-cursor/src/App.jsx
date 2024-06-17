import React, { useEffect } from 'react'
import './App.css'
import gsap from 'gsap'
import Card from './Card'

function App() {

  function customCursor(e) {
    gsap.to('#cursor', {
      x: e.clientX,
      y: e.clientY - 50,
      duration: 0.8,
      ease: 'power4.out'
    })
  }

  useEffect(() => {
    const cursor = document.getElementById('cursor');
    const images = document.querySelectorAll('.hoverCur img');

    function handleMouseEnter(e) {
      cursor.innerHTML = e.target.getAttribute('data-scale-emoji');
      gsap.to(cursor, {
        scale: 4,
      });
    }

    function handleMouseLeave() {
      cursor.innerHTML = "";
      gsap.to(cursor, {
        scale: 1,
      });
    }

    window.addEventListener('mousemove', customCursor);
    images.forEach(image => {
      image.addEventListener('mouseenter', handleMouseEnter);
      image.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', customCursor);
      images.forEach(image => {
        image.removeEventListener('mouseenter', handleMouseEnter);
        image.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  const data = [
    {
      imageSrc: 'https://spn-sta.spinny.com/blog/20221004191046/Hyundai-Venue-2022.jpg?compress=true&quality=80&w=1200&dpr=2.6',
      scaleEmoji: '🚗'
    },
    {
      imageSrc: 'https://images.pexels.com/photos/1035108/pexels-photo-1035108.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      scaleEmoji: '🚙'
    },
    {
      imageSrc: 'https://www.topgear.com/sites/default/files/news-listicle/image/row_8954.jpg',
      scaleEmoji: '🚕'
    },
  ];

  return (
    <>
      <div id='cursor'></div>
      <div id='main'>
        <h1 className='text-center text-white m-4'>Custom Cursor - GSAP - React</h1>
      </div>
      <div className='row container mx-auto'>
        {data.map((item, index) => (
          <Card key={index} imageSrc={item.imageSrc} scaleEmoji={item.scaleEmoji} />
        ))}
      </div>
    </>
  )
}

export default App
