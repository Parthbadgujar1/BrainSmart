import scenes from './scenes.jsx';
import { SKIN, HAIR } from './primitives.jsx';

export const artNames = Object.keys(scenes);

/** Renders one of the illustrated sample photos. `alt=""` marks it decorative. */
export default function Art({ name = 'campus', alt = '' }) {
  const Scene = scenes[name] || scenes.campus;
  return <Scene alt={alt} />;
}

const hash = (str) => [...str].reduce((h, c) => (h * 31 + c.charCodeAt(0)) >>> 0, 7);

/** Friendly head-and-shoulders portrait, generated deterministically from a name (used in the staff directory). */
export function Avatar({ seed = 'x', size = 64 }) {
  const h = hash(seed);
  const skin = SKIN[h % SKIN.length];
  const hair = HAIR[(h >>> 3) % HAIR.length];
  const shirt = ['#16246b', '#0f9d8f', '#ef5a4a', '#8d6adf', '#fbb42a', '#4aa3df'][(h >>> 5) % 6];
  const bg = ['#e9ecfa', '#d9f4ef', '#ffe7e3', '#efe8ff', '#fff2d2', '#dff0ff'][(h >>> 7) % 6];
  const style = (h >>> 9) % 4;
  const glasses = (h >>> 11) % 3 === 0;
  return (
    <svg className="avatar-svg" width={size} height={size} viewBox="0 0 64 64" aria-hidden="true">
      <circle cx="32" cy="32" r="32" fill={bg} />
      <path d="M8 64c0-14 10-22 24-22s24 8 24 22z" fill={shirt} />
      {style === 2 && <rect x="14" y="14" width="36" height="34" rx="16" fill={hair} />}
      <rect x="28" y="38" width="8" height="8" fill={skin} />
      <circle cx="32" cy="29" r="14" fill={skin} />
      {style === 0 && <path d="M18 28a14 14 0 0 1 28 0c-6-6-22-8-28 0z" fill={hair} />}
      {style === 1 && <path d="M18 28a14 14 0 0 1 28 0c-3-3-8-5-14-5s-11 2-14 5z" fill={hair} />}
      {style === 2 && <path d="M17 28a15 15 0 0 1 30 0c-4-8-26-8-30 0z" fill={hair} />}
      {style === 3 && [20, 32, 44].map((cx) => <circle key={cx} cx={cx} cy={17 + Math.abs(cx - 32) / 5} r="7" fill={hair} />)}
      <circle cx="27" cy="30" r="1.600" fill="#2a2140" />
      <circle cx="37" cy="30" r="1.600" fill="#2a2140" />
      {glasses && (
        <g fill="none" stroke="#2a2140" strokeWidth="1.300">
          <circle cx="27" cy="30" r="4.200" />
          <circle cx="37" cy="30" r="4.200" />
          <path d="M31 30h2" />
        </g>
      )}
      <path d="M28 36q4 3.500 8 0" fill="none" stroke="#2a2140" strokeWidth="1.500" strokeLinecap="round" />
    </svg>
  );
}
