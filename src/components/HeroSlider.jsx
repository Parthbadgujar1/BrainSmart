import { useEffect, useState } from 'react';
import { heroSlides } from '../data/site.js';
import SmartLink from './SmartLink.jsx';
import Icon from './Icon.jsx';
import Art from './art/Art.jsx';

const reducedMotion = () => window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(() => !reducedMotion());
  const count = heroSlides.length;

  useEffect(() => {
    if (!playing) return undefined;
    const id = setInterval(() => setIndex((i) => (i + 1) % count), 7000);
    return () => clearInterval(id);
  }, [playing, count]);

  const go = (i) => setIndex((i + count) % count);

  return (
    <section className="hero" aria-roledescription="carousel" aria-label="School highlights">
      <div className="hero-track" style={{ transform: `translateX(-${index * 100}%)` }}>
        {heroSlides.map((slide, i) => (
          <div
            key={slide.title}
            className={`hero-slide tone-${slide.tone} ${i === index ? 'is-active' : ''}`}
            role="group"
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${count}`}
            aria-hidden={i !== index}
          >
            <div className="hero-art">
              {slide.image ? <img src={slide.image} alt="" /> : <Art name={slide.art} />}
            </div>
            <div className="container hero-content">
              <h2>{slide.title}</h2>
              <p>{slide.text}</p>
              {slide.cta && (
                <SmartLink to={slide.cta.to} className="btn btn-accent btn-lg" tabIndex={i === index ? 0 : -1}>
                  {slide.cta.label} <Icon name="arrow" size={18} />
                </SmartLink>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="hero-controls">
        <button type="button" onClick={() => go(index - 1)} aria-label="Previous slide">
          <Icon name="prev" size={20} />
        </button>
        <button type="button" onClick={() => setPlaying((p) => !p)} aria-label={playing ? 'Pause slideshow' : 'Play slideshow'}>
          <Icon name={playing ? 'pause' : 'play'} size={18} />
        </button>
        <button type="button" onClick={() => go(index + 1)} aria-label="Next slide">
          <Icon name="next" size={20} />
        </button>
        <div className="hero-dots" role="tablist" aria-label="Choose slide">
          {heroSlides.map((s, i) => (
            <button
              key={s.title}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Slide ${i + 1}: ${s.title}`}
              className={i === index ? 'active' : ''}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
