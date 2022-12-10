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
    }, 10000);
    return () => clearInterval(auto);
  }, [index]);

  return (
    <div className="section-slider">
      <div className="section-center">
        <h2 className="slider-title">References</h2>
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
              <p className="ref-text">{quote}</p>
              <p className="ref-name">{name}</p>
            </article>
          );
        })}
        <button className="prev arrow" onClick={() => setIndex(index - 1)}>
          &#10229;
        </button>
        <button className="next arrow" onClick={() => setIndex(index + 1)}>
          &#10230;
        </button>
      </div>
    </div>
  );
}

export default Slider;
