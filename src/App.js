import React, { useState, useEffect } from 'react';
import ImageCard from './components/ImageCard';
import ImageSearch from './components/ImageSearch';
import SkeletonCard from './components/SkeletonCard';

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState('');

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`
    )
      .then(res => res.json())
      .then(data => {
        setTimeout(() => {
          setImages(data.hits);
          setIsLoading(false);
        }, 2000);
      })
      .catch(err => console.log(err));
  }, [term]);

  const searchText = text => {
    setTerm(text);
  };

  return (
    <div className='container mx-auto'>
      <ImageSearch searchText={searchText} />

      {!isLoading && images.length === 0 && (
        <h1 className='text-5xl text-center mx-auto mt-32'>No Images Found</h1>
      )}

      {isLoading ? (
        <SkeletonCard />
      ) : (
        <div className='grid grid-cols-3 gap-4'>
          {images && images.map(img => <ImageCard key={img.id} image={img} />)}
        </div>
      )}
    </div>
  );
}

export default App;
