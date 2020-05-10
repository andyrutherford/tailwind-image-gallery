import React from 'react';
import Skeleton from 'react-loading-skeleton';
const SkeletonCard = () => {
  return (<div className='container mx-auto'>
    <section>
      <h2 className='section-title'>
        <Skeleton height={30} width={300} />
      </h2> 

      <ul className='grid grid-cols-3 gap-4'>
        {Array(9)
          .fill()
          .map((item, index) => (
            <li className='card' key={index}>
              <Skeleton height={180} />
              <h4 className='card-title'>
                <Skeleton height={36} width={`80%`} />
              </h4>
              <p className='card-channel'>
                <Skeleton width={`60%`} />
              </p>
              <div className='card-metrics'>
                <Skeleton width={`90%`} />
              </div>
            </li>
          ))}
      </ul>
    </section>
    </div>
  );
};
export default SkeletonCard;
