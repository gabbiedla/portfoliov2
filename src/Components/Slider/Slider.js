import React, { useState, useEffect } from 'react';
import './Slider.css';
import data from './Dataslider';

function Slider() {
  const [references, setReferences] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = references.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, references]);

  useEffect(() => {
    let auto = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => clearInterval(auto);
  }, [index]);

  return (
    <div className="section">
      <div className="section-center">
        {references.map((reference, referenceIndex) => {
          const { id, quote, name } = reference;
          let position = 'nextSlide';
          if (referenceIndex === index) {
            position = 'activeSlide';
          }
          if (
            referenceIndex === index - 1 ||
            (index === 0 && referenceIndex === references.length - 1)
          ) {
            position = 'lastSlide';
          }

          return (
            <article className={position} id="ref-items" key={id}>
              <p className="text">{quote}</p>
              <p className="ref-name">{name}</p>
            </article>
          );
        })}
        <button className="prev" onClick={() => setIndex(index - 1)}>
          prev
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
          next
        </button>
      </div>
    </div>
  );
}

export default Slider;
