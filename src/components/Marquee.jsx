const words = ['Curious Minds', 'Kind Hearts', 'Bright Futures', 'Learn Smart', 'Grow Bright', 'Play • Create • Explore', 'Families Welcome'];

/** Slow-scrolling ribbon of school values. Duplicated content gives a seamless loop. */
export default function Marquee() {
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {[0, 1].map((n) => (
          <ul key={n}>
            {words.map((w) => (
              <li key={w}>
                <span className="dot" /> {w}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
