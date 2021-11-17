import React, { useEffect } from 'react';

function PaperPopup({ name, text, img, onLoad, onClose }) {
  useEffect(() => {
    onLoad('' + document.querySelector('.paperPopup')?.clientHeight + 'px');
    document.querySelector('.wrapper').scrollIntoView({ behavior: 'smooth' });
  });

  return (
    <section className='paperPopup'>
      <div className='container'>
        <section className='title'>
          <section className='info'>
            <h2>{name}</h2>
          </section>
          <button onClick={onClose}>✕</button>
        </section>
        <section className='mainImg'>
          <img src={img[0]} alt='img' />
        </section>
        <section className='text'>
          <pre>{text}</pre>
        </section>
        {img[1] && (
          <section className='images'>
            {img.map((item) => {
              if (item === img[0]) {
                return false;
              }
              return <img src={item} alt='img' />;
            })}
          </section>
        )}
      </div>
    </section>
  );
}

export default PaperPopup;
