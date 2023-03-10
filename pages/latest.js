import { useState, useEffect } from 'react';
import Nav from './componenets/Nav'
import Head from 'next/head'

export async function getStaticProps() {
  
  const res = await fetch('https://wallhaven.cc/api/v1/search?&sorting=latest');
  const data = await res.json();
  const images = data.data;
  
  return {
    props: {
      images,
    },
  }
}

export default function latest({ images }) {

  return (
    <div>

      <Nav></Nav>

      <div className='bg-gray-900'>
        <ul className='grid grid-cols-4'>
          {images.map((image) => (
            <li key={image.id}>
              <img className='p-3' src={image.thumbs.small} alt={image.id} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
