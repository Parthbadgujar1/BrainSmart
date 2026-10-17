import { useId } from 'react';

// Small vector building blocks used to compose the sample "photo" scenes.
// Every scene is drawn on an 800 x 500 canvas; characters have their origin at their feet.

export const SKIN = ['#f6d3b8', '#e8b48f', '#c68a62', '#9a6642', '#7a4e33'];
export const HAIR = ['#2b1d16', '#5a3825', '#b5651d', '#e0b04a', '#1a1a1a', '#8a3b2b'];

export function Scene({ sky = ['#a5dcff', '#eaf7ff'], alt = '', children }) {
  const id = `sky${useId().replace(/:/g, '')}`;
  return (
    <svg
      className="art"
      viewBox="0 0 800 500"
      preserveAspectRatio="xMidYMax slice"
      role={alt ? 'img' : undefined}
      aria-label={alt || undefined}
      aria-hidden={alt ? undefined : true}
    >
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={sky[0]} />
          <stop offset="1" stopColor={sky[1]} />
        </linearGradient>
      </defs>
      <rect width="800" height="500" fill={`url(#${id})`} />
      {children}
    </svg>
  );
}

export function Kid({ x = 0, y = 0, s = 1, skin = SKIN[0], hair = HAIR[0], shirt = '#16246b', pants = '#3d4a8f', style = 0, arms = 'down', flip = false, hop = false, glasses = false }) {
  const arm = (side, mode) => {
    const sx = side * 13;
    const end = { down: [side * 19, -34], up: [side * 25, -100], out: [side * 32, -62], front: [side * 14, -44] }[mode];
    return (
      <g transform={`translate(${sx} -66)`}>
        <g className={mode === 'wave' ? 'art-wave' : undefined}>
          <line x1="0" y1="0" x2={mode === 'wave' ? side * 24 : end[0] - sx} y2={mode === 'wave' ? -34 : end[1] + 66} stroke={shirt} strokeWidth="9" strokeLinecap="round" />
          <circle cx={mode === 'wave' ? side * 24 : end[0] - sx} cy={mode === 'wave' ? -34 : end[1] + 66} r="5" fill={skin} />
        </g>
      </g>
    );
  };
  const mode = (side) => (arms === 'wave' ? (side === 1 ? 'wave' : 'down') : arms === 'cheer' ? 'up' : arms);
  return (
    <g transform={`translate(${x} ${y}) scale(${flip ? -s : s} ${s})`}>
      <g className={hop ? 'art-hop' : undefined}>
        <rect x="-10" y="-32" width="8" height="32" rx="4" fill={pants} />
        <rect x="2" y="-32" width="8" height="32" rx="4" fill={pants} />
        <ellipse cx="-7" cy="1" rx="8" ry="4" fill="#26264a" />
        <ellipse cx="7" cy="1" rx="8" ry="4" fill="#26264a" />
        {style === 2 && <rect x="-17" y="-98" width="34" height="38" rx="14" fill={hair} />}
        {arm(-1, mode(-1))}
        {arm(1, mode(1))}
        <rect x="-15" y="-76" width="30" height="48" rx="13" fill={shirt} />
        <circle cx="0" cy="-92" r="16" fill={skin} />
        {style === 0 && <path d="M-16 -94a16 16 0 0 1 32 0c-6-7-20-9-32 0z" fill={hair} />}
        {style === 1 && (
          <>
            <path d="M-16 -94a16 16 0 0 1 32 0c-6-7-20-9-32 0z" fill={hair} />
            <circle cx="0" cy="-111" r="7" fill={hair} />
          </>
        )}
        {style === 2 && <path d="M-17 -94a17 17 0 0 1 34 0c-4-9-24-10-34 0z" fill={hair} />}
        {style === 3 && [-11, 0, 11].map((cx) => <circle key={cx} cx={cx} cy={-105 + Math.abs(cx) / 4} r="8" fill={hair} />)}
        <circle cx="-5.500" cy="-92" r="1.800" fill="#2a2140" />
        <circle cx="5.500" cy="-92" r="1.800" fill="#2a2140" />
        {glasses && (
          <g fill="none" stroke="#2a2140" strokeWidth="1.400">
            <circle cx="-6" cy="-92" r="4.500" />
            <circle cx="6" cy="-92" r="4.500" />
            <path d="M-1.500 -92h3" />
          </g>
        )}
        <path d="M-4.500 -85q4.500 4 9 0" fill="none" stroke="#2a2140" strokeWidth="1.600" strokeLinecap="round" />
        <circle cx="-10" cy="-86" r="2.600" fill="#ff9a8a" opacity=".5" />
        <circle cx="10" cy="-86" r="2.600" fill="#ff9a8a" opacity=".5" />
      </g>
    </g>
  );
}

export const Sun = ({ x = 670, y = 90 }) => (
  <g transform={`translate(${x} ${y})`}>
    <g className="art-spin slow" stroke="#ffd45e" strokeWidth="6" strokeLinecap="round">
      {Array.from({ length: 12 }, (_, i) => (
        <line key={i} x1="0" y1="-50" x2="0" y2="-66" transform={`rotate(${i * 30})`} />
      ))}
    </g>
    <circle r="38" fill="#ffd45e" />
  </g>
);

export const Cloud = ({ x = 100, y = 80, s = 1, dur = 40 }) => (
  <g transform={`translate(${x} ${y}) scale(${s})`}>
    <g className="art-drift" style={{ animationDuration: `${dur}s` }} fill="#fff" opacity=".92">
      <ellipse cx="0" cy="0" rx="46" ry="20" />
      <ellipse cx="-24" cy="-12" rx="26" ry="20" />
      <ellipse cx="14" cy="-18" rx="30" ry="22" />
    </g>
  </g>
);

export const Tree = ({ x = 100, y = 340, s = 1, c = '#4fb477' }) => (
  <g transform={`translate(${x} ${y}) scale(${s})`}>
    <rect x="-9" y="0" width="18" height="70" rx="6" fill="#9a6a3f" />
    <g className="art-sway">
      <circle cx="0" cy="-20" r="46" fill={c} />
      <circle cx="-30" cy="6" r="32" fill={c} />
      <circle cx="30" cy="6" r="32" fill={c} />
      <circle cx="-12" cy="-34" r="18" fill="#6cc78f" opacity=".6" />
    </g>
  </g>
);

export const Hills = ({ a = '#9bdba2', b = '#74c786', y = 400 }) => (
  <>
    <ellipse cx="180" cy={y + 70} rx="460" ry="130" fill={a} />
    <ellipse cx="660" cy={y + 80} rx="430" ry="120" fill={b} />
  </>
);

export const Ground = ({ y = 400, c = '#7fcf8a' }) => <rect x="0" y={y} width="800" height={500 - y} fill={c} />;

export function Windows({ x, y, cols = 3, w = 40, h = 46, gap = 18, fill = '#bfe6ff' }) {
  return Array.from({ length: cols }, (_, i) => (
    <g key={i}>
      <rect x={x + i * (w + gap)} y={y} width={w} height={h} rx="5" fill={fill} stroke="#fff" strokeWidth="4" />
      <path d={`M${x + i * (w + gap) + w / 2} ${y}v${h}M${x + i * (w + gap)} ${y + h / 2}h${w}`} stroke="#fff" strokeWidth="3" />
    </g>
  ));
}

export const Book = ({ x, y, c = '#ef5a4a', w = 22, h = 30, r = 0 }) => (
  <g transform={`translate(${x} ${y}) rotate(${r})`}>
    <rect width={w} height={h} rx="3" fill={c} />
    <rect x="3" y="4" width={w - 8} height="4" rx="2" fill="#fff" opacity=".6" />
  </g>
);

export const Desk = ({ x, y, w = 90, c = '#e0a96d' }) => (
  <g transform={`translate(${x} ${y})`}>
    <rect width={w} height="10" rx="4" fill={c} />
    <rect x="8" y="10" width="6" height="34" rx="3" fill="#b5834d" />
    <rect x={w - 14} y="10" width="6" height="34" rx="3" fill="#b5834d" />
  </g>
);

export const Gear = ({ x, y, r = 24, c = '#ffb02e', speed = '' }) => (
  <g transform={`translate(${x} ${y})`}>
    <g className={`art-spin ${speed}`}>
      {Array.from({ length: 8 }, (_, i) => (
        <rect key={i} x={-r * 0.22} y={-r * 1.28} width={r * 0.44} height={r * 0.5} rx="3" fill={c} transform={`rotate(${i * 45})`} />
      ))}
      <circle r={r} fill={c} />
      <circle r={r * 0.4} fill="#fff" opacity=".85" />
    </g>
  </g>
);

export const Note = ({ x, y, c = '#ef5a4a', delay = 0 }) => (
  <g transform={`translate(${x} ${y})`}>
    <g className="art-rise" style={{ animationDelay: `${delay}s` }}>
      <ellipse cx="0" cy="0" rx="8" ry="6" fill={c} />
      <path d="M7 0V-28l12 6" stroke={c} strokeWidth="3" fill="none" strokeLinecap="round" />
    </g>
  </g>
);

export const Ball = ({ x, y, r = 14, c = '#fff' }) => (
  <g transform={`translate(${x} ${y})`}>
    <g className="art-hop">
      <circle r={r} fill={c} stroke="#1b2240" strokeWidth="2" />
      <path d={`M0 ${-r * 0.4}l${r * 0.38} ${r * 0.28}-${r * 0.15} ${r * 0.45}h-${r * 0.46}l-${r * 0.15}-${r * 0.45}z`} fill="#1b2240" />
    </g>
  </g>
);

export const Flower = ({ x, y, c = '#ff7a8a', s = 1 }) => (
  <g transform={`translate(${x} ${y}) scale(${s})`}>
    <rect x="-2" y="0" width="4" height="34" fill="#4fb477" />
    <g className="art-sway">
      {Array.from({ length: 6 }, (_, i) => (
        <ellipse key={i} cx="0" cy="-11" rx="6" ry="11" fill={c} transform={`rotate(${i * 60})`} />
      ))}
      <circle r="6" fill="#ffd45e" />
    </g>
  </g>
);

export const Heart = ({ x, y, s = 1, c = '#ef5a4a', delay = 0 }) => (
  <g transform={`translate(${x} ${y}) scale(${s})`}>
    <g className="art-float" style={{ animationDelay: `${delay}s` }}>
      <path d="M0 10C-18-4-16-20 0-12 16-20 18-4 0 10z" fill={c} />
    </g>
  </g>
);

export const Shelf = ({ x, y, w = 200, rows = 3, seed = 0 }) => {
  const colors = ['#ef5a4a', '#16246b', '#fbb42a', '#0f9d8f', '#8d6adf', '#ff8fa3'];
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect width={w} height={rows * 62 + 10} rx="8" fill="#c58a52" />
      {Array.from({ length: rows }, (_, r) => (
        <g key={r} transform={`translate(8 ${r * 62 + 8})`}>
          <rect width={w - 16} height="54" fill="#8a5a31" opacity=".35" />
          {Array.from({ length: Math.floor((w - 20) / 17) }, (_, i) => {
            const h = 34 + ((i * 7 + r * 5 + seed) % 5) * 4;
            return <rect key={i} x={4 + i * 17} y={54 - h} width="13" height={h} rx="2" fill={colors[(i + r * 2 + seed) % colors.length]} />;
          })}
        </g>
      ))}
    </g>
  );
};
