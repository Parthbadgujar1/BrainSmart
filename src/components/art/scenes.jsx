import { Scene, Kid, Sun, Cloud, Tree, Hills, Ground, Windows, Book, Desk, Gear, Note, Ball, Flower, Heart, Shelf, SKIN, HAIR } from './primitives.jsx';

// Original, license-free illustrated "photos". Swap for real photography at launch (see docs/06-content-guide.md).

const Wall = ({ c = '#fdebd0', floor = '#d9a86b', y = 385 }) => (
  <>
    <rect width="800" height="500" fill={c} />
    <rect y={y} width="800" height={500 - y} fill={floor} />
    <rect y={y - 6} width="800" height="8" fill="#fff" opacity=".5" />
  </>
);

const Window = ({ x, y, w = 130, h = 120 }) => (
  <g>
    <rect x={x} y={y} width={w} height={h} rx="8" fill="#bfe6ff" stroke="#fff" strokeWidth="7" />
    <path d={`M${x + w / 2} ${y}v${h}M${x} ${y + h / 2}h${w}`} stroke="#fff" strokeWidth="5" />
    <g className="art-drift" style={{ animationDuration: '22s' }}>
      <ellipse cx={x + 40} cy={y + 34} rx="22" ry="9" fill="#fff" opacity=".9" />
    </g>
  </g>
);

const Board = ({ x, y, w = 260, h = 130, text = 'A B C   1 2 3' }) => (
  <g>
    <rect x={x - 6} y={y - 6} width={w + 12} height={h + 12} rx="8" fill="#b5834d" />
    <rect x={x} y={y} width={w} height={h} rx="4" fill="#2f6b5a" />
    <text x={x + w / 2} y={y + h / 2 + 10} textAnchor="middle" fontFamily="Poppins, sans-serif" fontSize="30" fontWeight="700" fill="#fff" opacity=".92">
      {text}
    </text>
    <path d={`M${x + 20} ${y + h - 22}h60`} stroke="#fff" strokeWidth="3" opacity=".6" strokeLinecap="round" />
  </g>
);

const Table = ({ x, y, w = 200 }) => (
  <g transform={`translate(${x} ${y})`}>
    <rect width={w} height="12" rx="5" fill="#e8b273" />
    <rect x="12" y="12" width="8" height="52" rx="3" fill="#b5834d" />
    <rect x={w - 20} y="12" width="8" height="52" rx="3" fill="#b5834d" />
  </g>
);

const scenes = {
  campus: ({ alt }) => (
    <Scene alt={alt}>
      <Sun />
      <Cloud x={130} y={90} />
      <Cloud x={470} y={60} s={0.8} dur={55} />
      <Hills />
      <Ground y={410} />
      <path d="M350 410h100l60 90H290z" fill="#f3e3c3" />
      <rect x="230" y="250" width="340" height="160" rx="6" fill="#ffd9a8" />
      <path d="M215 255 400 170 585 255z" fill="#ef5a4a" />
      <rect x="350" y="150" width="100" height="130" rx="4" fill="#f6b86b" />
      <path d="M340 156 400 100 460 156z" fill="#16246b" />
      <circle cx="400" cy="205" r="22" fill="#fff" stroke="#16246b" strokeWidth="4" />
      <path d="M400 205v-13M400 205l9 5" stroke="#16246b" strokeWidth="3" strokeLinecap="round" />
      <Windows x={250} y={290} cols={2} />
      <Windows x={470} y={290} cols={2} />
      <rect x="372" y="340" width="56" height="70" rx="6" fill="#16246b" />
      <circle cx="420" cy="378" r="3" fill="#fbb42a" />
      <rect x="397" y="98" width="3" height="40" fill="#555" transform="translate(0 -40)" />
      <path d="M400 58h40l-10 10 10 10h-40z" fill="#fbb42a" />
      <text x="400" y="326" textAnchor="middle" fontFamily="Poppins, sans-serif" fontWeight="800" fontSize="15" fill="#16246b">BRAINSMART</text>
      <Tree x={110} y={320} />
      <Tree x={705} y={330} s={1.1} c="#3fa468" />
      <Kid x={300} y={470} s={0.75} skin={SKIN[1]} hair={HAIR[0]} shirt="#ef5a4a" arms="wave" />
      <Kid x={350} y={485} s={0.7} skin={SKIN[0]} hair={HAIR[3]} shirt="#0f9d8f" style={2} hop />
      <Kid x={470} y={472} s={0.75} skin={SKIN[3]} hair={HAIR[4]} shirt="#fbb42a" style={3} arms="cheer" />
      <Kid x={520} y={488} s={0.7} skin={SKIN[2]} hair={HAIR[1]} shirt="#8d6adf" style={1} />
    </Scene>
  ),

  classroom: ({ alt }) => (
    <Scene alt={alt}>
      <Wall />
      <Window x={60} y={70} />
      <Window x={610} y={70} />
      <Board x={270} y={60} />
      <path d="M270 210h260" stroke="#b5834d" strokeWidth="8" strokeLinecap="round" />
      <g transform="translate(700 310)">
        <circle r="34" fill="#4aa3df" />
        <path d="M-20-14q18 10 6 28M10-26q-6 20 22 24" fill="#6cc78f" />
        <rect x="-4" y="34" width="8" height="30" fill="#8a5a31" />
      </g>
      <Kid x={150} y={400} s={1.15} skin={SKIN[2]} hair={HAIR[0]} shirt="#0f9d8f" pants="#2b3a67" style={2} arms="wave" glasses />
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <Desk x={290 + i * 130} y={350} w={100} />
          <Kid x={340 + i * 130} y={348} s={0.85} skin={SKIN[(i * 2 + 1) % 5]} hair={HAIR[(i * 2 + 2) % 6]} shirt={['#ef5a4a', '#16246b', '#fbb42a'][i]} style={i} arms={i === 1 ? 'up' : 'down'} />
        </g>
      ))}
      <Book x={308} y={342} c="#ef5a4a" w={24} h={8} />
      <Book x={568} y={342} c="#0f9d8f" w={24} h={8} />
    </Scene>
  ),

  library: ({ alt }) => (
    <Scene alt={alt} sky={['#fff1d6', '#ffe0b0']}>
      <Wall c="#ffeccc" floor="#c9945a" y={400} />
      <Shelf x={40} y={80} w={250} rows={4} />
      <Shelf x={510} y={80} w={250} rows={4} seed={2} />
      <rect x="320" y="90" width="160" height="110" rx="10" fill="#bfe6ff" stroke="#fff" strokeWidth="8" />
      <circle cx="400" cy="145" r="26" fill="#ffd45e" />
      <ellipse cx="400" cy="420" rx="120" ry="18" fill="#000" opacity=".08" />
      <ellipse cx="300" cy="388" rx="55" ry="26" fill="#ef5a4a" />
      <ellipse cx="510" cy="392" rx="55" ry="26" fill="#0f9d8f" />
      <Kid x={300} y={376} s={0.9} skin={SKIN[1]} hair={HAIR[2]} shirt="#fbb42a" style={2} arms="front" />
      <Book x={285} y={318} c="#16246b" w={30} h={22} r={-8} />
      <Kid x={510} y={380} s={0.9} skin={SKIN[3]} hair={HAIR[4]} shirt="#8d6adf" style={3} arms="front" />
      <Book x={496} y={322} c="#ef5a4a" w={30} h={22} r={6} />
      <Kid x={400} y={430} s={1.2} skin={SKIN[0]} hair={HAIR[5]} shirt="#16246b" style={1} arms="wave" glasses />
      {[0, 1, 2].map((i) => (
        <g key={i} className="art-float" style={{ animationDelay: `${i * 0.7}s` }}>
          <Book x={360 + i * 40} y={230 + (i % 2) * 20} c={['#ef5a4a', '#0f9d8f', '#fbb42a'][i]} r={i * 14 - 14} />
        </g>
      ))}
    </Scene>
  ),

  playground: ({ alt }) => (
    <Scene alt={alt}>
      <Sun x={100} y={90} />
      <Cloud x={420} y={80} />
      <Cloud x={650} y={140} s={0.7} dur={60} />
      <Hills />
      <Ground y={410} c="#86d391" />
      <Tree x={720} y={330} />
      <g stroke="#16246b" strokeWidth="8" strokeLinecap="round" fill="none">
        <path d="M80 410 130 250 180 410M130 250h200M280 410 330 250 380 410" />
      </g>
      <rect x="120" y="244" width="270" height="12" rx="6" fill="#16246b" />
      {[170, 300].map((x, i) => (
        <g key={x}>
          <g className="art-swing" style={{ animationDelay: `${i * 0.6}s` }}>
            <path d={`M${x} 256 ${x - 4} 350M${x + 28} 256 ${x + 32} 350`} stroke="#555" strokeWidth="3" />
            <rect x={x - 8} y="348" width="48" height="9" rx="4" fill={i ? '#fbb42a' : '#ef5a4a'} />
          </g>
        </g>
      ))}
      <path d="M520 410V300l110 20v90z" fill="#ef5a4a" />
      <path d="M630 320l60 90" stroke="#fbb42a" strokeWidth="26" strokeLinecap="round" />
      <Kid x={200} y={440} s={0.9} skin={SKIN[2]} hair={HAIR[0]} shirt="#0f9d8f" hop arms="cheer" />
      <Kid x={440} y={450} s={0.85} skin={SKIN[0]} hair={HAIR[3]} shirt="#8d6adf" style={2} arms="out" />
      <Kid x={560} y={470} s={0.8} skin={SKIN[4]} hair={HAIR[4]} shirt="#ef5a4a" style={3} hop />
      <Ball x={350} y={452} />
    </Scene>
  ),

  science: ({ alt }) => (
    <Scene alt={alt} sky={['#e6f6ff', '#d3efff']}>
      <Wall c="#e6f6ff" floor="#b8cbe0" y={390} />
      <Window x={60} y={60} />
      <Board x={560} y={60} w={190} h={110} text="H₂O + ☀" />
      <rect x="40" y="330" width="720" height="22" rx="8" fill="#e8b273" />
      <rect x="70" y="352" width="14" height="56" fill="#b5834d" />
      <rect x="716" y="352" width="14" height="56" fill="#b5834d" />
      {[
        [210, '#ef5a4a'],
        [290, '#0f9d8f'],
        [370, '#8d6adf'],
      ].map(([x, c], i) => (
        <g key={x}>
          <path d={`M${x - 8} 250h16v30l24 48h-64l24-48z`} fill="#fff" opacity=".7" stroke="#9fb4c8" strokeWidth="3" />
          <path d={`M${x - 24} 310h48l10 20h-68z`} fill={c} opacity=".85" />
          {[0, 1, 2].map((b) => (
            <circle key={b} className="art-rise" style={{ animationDelay: `${b * 0.8 + i * 0.3}s` }} cx={x - 8 + b * 8} cy="300" r="4" fill="#fff" />
          ))}
        </g>
      ))}
      <g transform="translate(520 270)">
        <rect width="120" height="60" rx="6" fill="#16246b" />
        <rect x="8" y="8" width="104" height="44" rx="3" fill="#9be7d8" />
        <path d="M14 42l20-14 18 8 22-20 26 14" stroke="#16246b" strokeWidth="3" fill="none" />
      </g>
      <Kid x={450} y={420} s={1.1} skin={SKIN[1]} hair={HAIR[1]} shirt="#fff" pants="#2b3a67" style={2} arms="front" glasses />
      <Kid x={640} y={425} s={0.95} skin={SKIN[3]} hair={HAIR[4]} shirt="#0f9d8f" style={3} arms="cheer" glasses />
      <g transform="translate(130 280)">
        <rect x="-4" y="0" width="8" height="48" fill="#8a5a31" />
        <circle cx="0" cy="-8" r="26" fill="#4fb477" />
        <circle cx="16" cy="-24" r="14" fill="#6cc78f" />
      </g>
    </Scene>
  ),

  art: ({ alt }) => (
    <Scene alt={alt} sky={['#fff3e0', '#ffe2c2']}>
      <Wall c="#fff3e0" floor="#e0b27a" />
      <path d="M90 190a110 110 0 0 1 220 0" fill="none" stroke="#ef5a4a" strokeWidth="14" />
      <path d="M104 190a96 96 0 0 1 192 0" fill="none" stroke="#fbb42a" strokeWidth="14" />
      <path d="M118 190a82 82 0 0 1 164 0" fill="none" stroke="#4fb477" strokeWidth="14" />
      <path d="M132 190a68 68 0 0 1 136 0" fill="none" stroke="#4aa3df" strokeWidth="14" />
      <g transform="translate(470 120)">
        <path d="M90 0 20 250M90 0l70 250M90 100v150" stroke="#8a5a31" strokeWidth="9" strokeLinecap="round" />
        <rect x="10" y="20" width="160" height="120" rx="6" fill="#fff" stroke="#b5834d" strokeWidth="6" />
        <circle cx="60" cy="70" r="22" fill="#ef5a4a" />
        <path d="M90 120l30-50 36 50z" fill="#4aa3df" />
        <circle cx="130" cy="50" r="12" fill="#fbb42a" />
      </g>
      <Table x={180} y={350} w={200} />
      {['#ef5a4a', '#fbb42a', '#4fb477', '#4aa3df', '#8d6adf'].map((c, i) => (
        <circle key={c} cx={210 + i * 30} cy="344" r="9" fill={c} />
      ))}
      <Kid x={300} y={420} s={1} skin={SKIN[2]} hair={HAIR[0]} shirt="#ef5a4a" style={1} arms="front" />
      <Kid x={640} y={430} s={1} skin={SKIN[0]} hair={HAIR[2]} shirt="#16246b" style={2} arms="front" />
      <Kid x={120} y={425} s={1.1} skin={SKIN[1]} hair={HAIR[4]} shirt="#8d6adf" pants="#2b3a67" arms="wave" glasses />
    </Scene>
  ),

  music: ({ alt }) => (
    <Scene alt={alt} sky={['#2a2f7a', '#5a3d9a']}>
      <rect width="800" height="500" fill="#2a2f7a" opacity=".0" />
      {Array.from({ length: 16 }, (_, i) => (
        <circle key={i} cx={(i * 211) % 780 + 10} cy={(i * 97) % 160 + 20} r={i % 3 ? 2 : 3} fill="#fff" opacity=".75" className="art-twinkle" style={{ animationDelay: `${(i % 5) * 0.4}s` }} />
      ))}
      <path d="M0 220q200-40 400 0t400 0v280H0z" fill="#4b2f87" />
      <rect x="0" y="380" width="800" height="120" fill="#8a5a31" />
      <rect x="0" y="372" width="800" height="14" fill="#c58a52" />
      <path d="M-20 0q80 80 150 0M650 0q90 90 170 0" fill="#ef5a4a" />
      <rect x="560" y="290" width="150" height="82" rx="8" fill="#1b2240" />
      <rect x="570" y="298" width="130" height="14" fill="#fff" />
      {Array.from({ length: 8 }, (_, i) => (
        <rect key={i} x={572 + i * 16} y="298" width="2" height="14" fill="#1b2240" />
      ))}
      <ellipse cx="150" cy="352" rx="40" ry="18" fill="#ef5a4a" />
      <rect x="110" y="352" width="80" height="20" fill="#d6483a" />
      <Kid x={300} y={430} s={1} skin={SKIN[3]} hair={HAIR[4]} shirt="#fbb42a" style={3} arms="cheer" />
      <Kid x={400} y={440} s={0.95} skin={SKIN[0]} hair={HAIR[3]} shirt="#0f9d8f" style={2} arms="out" />
      <Kid x={500} y={430} s={1} skin={SKIN[2]} hair={HAIR[0]} shirt="#fff" pants="#2b3a67" arms="cheer" hop />
      <Kid x={640} y={400} s={0.9} skin={SKIN[1]} hair={HAIR[5]} shirt="#ff8fa3" style={1} arms="front" />
      <Note x={250} y={250} c="#ffd45e" />
      <Note x={420} y={240} c="#ff8fa3" delay={0.9} />
      <Note x={540} y={250} c="#7fe0d0" delay={1.6} />
    </Scene>
  ),

  stem: ({ alt }) => (
    <Scene alt={alt} sky={['#e8f2ff', '#cfe3ff']}>
      <Wall c="#e8f2ff" floor="#aab8d6" y={395} />
      <Gear x={90} y={110} r={38} />
      <Gear x={160} y={170} r={26} c="#ef5a4a" speed="rev" />
      <Gear x={700} y={110} r={32} c="#0f9d8f" />
      <Gear x={640} y={168} r={22} c="#8d6adf" speed="rev" />
      <rect x="40" y="340" width="720" height="20" rx="8" fill="#e8b273" />
      <g transform="translate(240 250)">
        <rect x="0" y="0" width="90" height="72" rx="10" fill="#16246b" />
        <rect x="12" y="14" width="66" height="26" rx="6" fill="#9be7d8" />
        <circle cx="30" cy="56" r="6" fill="#fbb42a" />
        <circle cx="60" cy="56" r="6" fill="#ef5a4a" />
        <rect x="42" y="-24" width="6" height="24" fill="#16246b" />
        <circle cx="45" cy="-28" r="8" fill="#ef5a4a" className="art-twinkle" />
        <rect x="-16" y="28" width="16" height="8" rx="4" fill="#16246b" />
        <rect x="90" y="28" width="16" height="8" rx="4" fill="#16246b" />
      </g>
      <g transform="translate(470 270)">
        <rect width="110" height="68" rx="8" fill="#fff" stroke="#16246b" strokeWidth="5" />
        <path d="M14 50l22-22 18 14 22-28 20 18" stroke="#0f9d8f" strokeWidth="5" fill="none" strokeLinecap="round" />
        <rect x="40" y="68" width="30" height="8" fill="#16246b" />
      </g>
      <Kid x={200} y={425} s={1} skin={SKIN[2]} hair={HAIR[0]} shirt="#ef5a4a" style={1} arms="cheer" glasses />
      <Kid x={620} y={430} s={1.05} skin={SKIN[1]} hair={HAIR[1]} shirt="#0f9d8f" style={3} arms="front" />
      <Kid x={400} y={440} s={1.2} skin={SKIN[3]} hair={HAIR[4]} shirt="#fbb42a" pants="#2b3a67" arms="wave" glasses />
    </Scene>
  ),

  cafeteria: ({ alt }) => (
    <Scene alt={alt} sky={['#fff5df', '#ffe7bd']}>
      <Wall c="#fff5df" floor="#d8a56e" y={390} />
      <Window x={330} y={60} w={140} h={110} />
      <rect x="40" y="250" width="240" height="46" rx="8" fill="#c8cfe0" />
      <rect x="40" y="296" width="240" height="112" fill="#aeb8d1" />
      {['#ef5a4a', '#fbb42a', '#4fb477', '#8d6adf'].map((c, i) => (
        <circle key={c} cx={80 + i * 52} cy="246" r="16" fill={c} />
      ))}
      <Table x={400} y={340} w={170} />
      <Table x={610} y={350} w={150} />
      {[430, 470, 530].map((x, i) => (
        <rect key={x} x={x} y="330" width="34" height="9" rx="3" fill={['#ef5a4a', '#4fb477', '#fbb42a'][i]} />
      ))}
      <Kid x={150} y={400} s={1.05} skin={SKIN[2]} hair={HAIR[0]} shirt="#fff" pants="#2b3a67" style={2} arms="wave" />
      <Kid x={440} y={345} s={0.8} skin={SKIN[0]} hair={HAIR[3]} shirt="#0f9d8f" style={1} />
      <Kid x={520} y={345} s={0.8} skin={SKIN[3]} hair={HAIR[4]} shirt="#ef5a4a" style={3} arms="cheer" />
      <Kid x={670} y={355} s={0.8} skin={SKIN[1]} hair={HAIR[2]} shirt="#8d6adf" />
      <Heart x={610} y={285} s={1.2} />
      <Heart x={470} y={270} s={0.9} c="#fbb42a" delay={0.8} />
    </Scene>
  ),

  sports: ({ alt }) => (
    <Scene alt={alt}>
      <Sun x={680} y={80} />
      <Cloud x={200} y={90} />
      <Hills a="#a9e3a0" b="#8ad48a" />
      <Ground y={400} c="#58b86a" />
      {[0, 1, 2, 3].map((i) => (
        <rect key={i} x="0" y={400 + i * 25} width="800" height="12" fill="#fff" opacity=".08" />
      ))}
      <path d="M0 440h800M400 400v100" stroke="#fff" strokeWidth="4" opacity=".7" />
      <circle cx="400" cy="450" r="46" fill="none" stroke="#fff" strokeWidth="4" opacity=".7" />
      <g stroke="#fff" strokeWidth="8" fill="none" strokeLinecap="round">
        <path d="M640 410V300h110v110" />
        <path d="M640 300l-26 20M750 300l26 20" />
      </g>
      <path d="M646 304h98v100M646 340h98M646 372h98M680 304v100M712 304v100" stroke="#fff" strokeWidth="1.500" opacity=".5" />
      <Kid x={260} y={470} s={0.95} skin={SKIN[2]} hair={HAIR[0]} shirt="#ef5a4a" pants="#fff" hop arms="out" />
      <Kid x={400} y={475} s={0.95} skin={SKIN[0]} hair={HAIR[3]} shirt="#16246b" pants="#fff" style={2} arms="cheer" />
      <Kid x={540} y={468} s={0.9} skin={SKIN[4]} hair={HAIR[4]} shirt="#ef5a4a" pants="#fff" style={3} hop />
      <Kid x={130} y={430} s={1.05} skin={SKIN[1]} hair={HAIR[1]} shirt="#0f9d8f" pants="#2b3a67" arms="wave" />
      <Ball x={330} y={486} r={16} />
    </Scene>
  ),

  family: ({ alt }) => (
    <Scene alt={alt}>
      <Sun x={110} y={90} />
      <Cloud x={420} y={70} />
      <Hills />
      <Ground y={410} />
      <path d="M0 450h800" stroke="#fff" strokeWidth="2" opacity=".0" />
      <rect x="520" y="250" width="240" height="160" rx="6" fill="#ffd9a8" />
      <path d="M505 255 640 170 775 255z" fill="#ef5a4a" />
      <rect x="610" y="320" width="56" height="90" rx="6" fill="#16246b" />
      <Windows x={540} y={285} cols={1} w={46} h={44} />
      <Windows x={690} y={285} cols={1} w={46} h={44} />
      <Tree x={90} y={330} s={1.1} />
      <Kid x={230} y={460} s={1.25} skin={SKIN[2]} hair={HAIR[0]} shirt="#16246b" pants="#2b3a67" arms="out" />
      <Kid x={330} y={462} s={1.2} skin={SKIN[2]} hair={HAIR[1]} shirt="#ef5a4a" pants="#2b3a67" style={2} arms="out" />
      <Kid x={280} y={478} s={0.75} skin={SKIN[2]} hair={HAIR[4]} shirt="#fbb42a" style={1} hop arms="cheer" />
      <Kid x={450} y={470} s={1.05} skin={SKIN[0]} hair={HAIR[5]} shirt="#0f9d8f" pants="#fff" style={1} arms="wave" glasses />
      <Heart x={285} y={300} s={1.4} />
      <Heart x={350} y={330} s={0.9} c="#fbb42a" delay={0.6} />
    </Scene>
  ),

  garden: ({ alt }) => (
    <Scene alt={alt}>
      <Sun x={680} y={85} />
      <Cloud x={160} y={90} />
      <Hills a="#a5e0a1" b="#82cf86" />
      <Ground y={395} c="#8ed58f" />
      <rect x="40" y="395" width="720" height="105" fill="#8a5a31" opacity=".0" />
      <rect x="60" y="410" width="300" height="60" rx="10" fill="#8a5a31" />
      <rect x="440" y="415" width="300" height="60" rx="10" fill="#8a5a31" />
      {[90, 140, 190, 240, 290, 460, 520, 580, 640, 700].map((x, i) => (
        <Flower key={x} x={x} y={i < 5 ? 372 : 378} c={['#ff7a8a', '#ffd45e', '#8d6adf', '#4aa3df', '#ff9f5a'][i % 5]} s={1.2} />
      ))}
      <Tree x={400} y={300} s={1.2} c="#45a56d" />
      <Kid x={170} y={500} s={0.95} skin={SKIN[1]} hair={HAIR[2]} shirt="#0f9d8f" style={2} arms="front" />
      <Kid x={560} y={505} s={0.95} skin={SKIN[3]} hair={HAIR[4]} shirt="#ef5a4a" style={3} arms="cheer" hop />
      <g transform="translate(250 450)">
        <path d="M0 0h34l-4 26H4z" fill="#4aa3df" />
        <path d="M34 8l24-10" stroke="#4aa3df" strokeWidth="6" strokeLinecap="round" />
        {[0, 1, 2].map((i) => (
          <circle key={i} className="art-rain" style={{ animationDelay: `${i * 0.35}s` }} cx={62 + i * 6} cy="2" r="3" fill="#7cc4f2" />
        ))}
      </g>
    </Scene>
  ),

  digital: ({ alt }) => (
    <Scene alt={alt} sky={['#eaf0ff', '#d6e2ff']}>
      <Wall c="#eaf0ff" floor="#9fb0d4" y={395} />
      <Window x={330} y={50} w={140} h={100} />
      <rect x="40" y="320" width="720" height="18" rx="8" fill="#e8b273" />
      {[70, 220, 370, 520, 650].map((x, i) => (
        <g key={x} transform={`translate(${x} 245)`}>
          <rect width="90" height="62" rx="6" fill="#16246b" />
          <rect x="6" y="6" width="78" height="46" rx="3" fill={['#9be7d8', '#ffe2a8', '#ffc4cf', '#c5d8ff', '#cdeccb'][i]} />
          <path d={`M12 ${40 - i * 3}l16-12 14 8 18-18 16 12`} stroke="#16246b" strokeWidth="3" fill="none" />
          <rect x="36" y="62" width="18" height="10" fill="#16246b" />
        </g>
      ))}
      <Kid x={115} y={420} s={0.95} skin={SKIN[1]} hair={HAIR[0]} shirt="#ef5a4a" arms="front" />
      <Kid x={265} y={424} s={0.95} skin={SKIN[3]} hair={HAIR[4]} shirt="#0f9d8f" style={3} arms="front" />
      <Kid x={415} y={420} s={1.15} skin={SKIN[0]} hair={HAIR[3]} shirt="#16246b" style={2} arms="wave" glasses />
      <Kid x={565} y={424} s={0.95} skin={SKIN[2]} hair={HAIR[1]} shirt="#fbb42a" style={1} arms="front" />
      <Kid x={695} y={420} s={0.95} skin={SKIN[4]} hair={HAIR[4]} shirt="#8d6adf" arms="cheer" />
    </Scene>
  ),

  counseling: ({ alt }) => (
    <Scene alt={alt} sky={['#ffeef2', '#ffdce5']}>
      <Wall c="#ffeef2" floor="#d9b07a" y={395} />
      <Window x={560} y={70} />
      <rect x="120" y="270" width="330" height="110" rx="26" fill="#8d6adf" />
      <rect x="100" y="300" width="60" height="86" rx="20" fill="#7a58c9" />
      <rect x="410" y="300" width="60" height="86" rx="20" fill="#7a58c9" />
      <rect x="140" y="236" width="290" height="70" rx="26" fill="#a487ea" />
      <Kid x={230} y={360} s={0.95} skin={SKIN[1]} hair={HAIR[2]} shirt="#fbb42a" style={1} arms="front" />
      <Kid x={340} y={420} s={1.2} skin={SKIN[3]} hair={HAIR[4]} shirt="#0f9d8f" pants="#2b3a67" style={3} arms="out" />
      <Heart x={285} y={190} s={1.6} />
      <Heart x={330} y={150} s={1} c="#fbb42a" delay={0.7} />
      <Heart x={235} y={140} s={0.8} c="#0f9d8f" delay={1.3} />
      <g transform="translate(60 250)">
        <rect x="-4" y="0" width="8" height="140" fill="#8a5a31" />
        <circle cy="-8" r="36" fill="#4fb477" />
        <circle cx="22" cy="-30" r="20" fill="#6cc78f" />
      </g>
      <Shelf x={640} y={250} w={120} rows={2} seed={1} />
    </Scene>
  ),

  care: ({ alt }) => (
    <Scene alt={alt} sky={['#e8fbff', '#cdf3f8']}>
      <Wall c="#e8fbff" floor="#bcd4d8" y={395} />
      <rect x="560" y="60" width="150" height="120" rx="10" fill="#fff" stroke="#0f9d8f" strokeWidth="6" />
      <path d="M635 84v72M599 120h72" stroke="#ef5a4a" strokeWidth="18" strokeLinecap="round" />
      <rect x="60" y="300" width="250" height="40" rx="10" fill="#fff" stroke="#0f9d8f" strokeWidth="5" />
      <rect x="70" y="340" width="10" height="56" fill="#0f9d8f" />
      <rect x="290" y="340" width="10" height="56" fill="#0f9d8f" />
      <rect x="70" y="270" width="80" height="34" rx="14" fill="#cdf3f8" />
      <Kid x={230} y={300} s={0.8} skin={SKIN[0]} hair={HAIR[3]} shirt="#ffc4cf" style={2} arms="front" />
      <Kid x={440} y={430} s={1.2} skin={SKIN[2]} hair={HAIR[0]} shirt="#0f9d8f" pants="#fff" style={1} arms="out" glasses />
      <g transform="translate(500 300)">
        <path d="M0 0q20 40 50 0" fill="none" stroke="#1b2240" strokeWidth="4" strokeLinecap="round" />
        <circle cx="52" cy="0" r="7" fill="#1b2240" />
      </g>
      <Heart x={420} y={220} s={1.3} />
      <Heart x={480} y={190} s={0.8} c="#fbb42a" delay={0.7} />
    </Scene>
  ),

  community: ({ alt }) => (
    <Scene alt={alt}>
      <Sun x={90} y={90} />
      <Cloud x={380} y={70} />
      <Cloud x={620} y={130} s={0.7} dur={50} />
      <Hills />
      <Ground y={405} />
      <Tree x={60} y={330} s={0.9} />
      <Tree x={740} y={335} s={1} />
      <path d="M170 140q230 90 460 0" fill="none" stroke="#fff" strokeWidth="3" />
      {['#ef5a4a', '#fbb42a', '#0f9d8f', '#8d6adf', '#4aa3df', '#ff8fa3'].map((c, i) => (
        <path key={c} d={`M${200 + i * 70} ${150 + Math.sin(i * 0.9) * 24}l24 0-12 26z`} fill={c} />
      ))}
      {[
        [200, SKIN[2], HAIR[0], '#16246b', 1.15, 0],
        [290, SKIN[0], HAIR[3], '#ef5a4a', 1.05, 2],
        [380, SKIN[3], HAIR[4], '#0f9d8f', 1.15, 3],
        [470, SKIN[1], HAIR[5], '#fbb42a', 1.0, 1],
        [560, SKIN[4], HAIR[4], '#8d6adf', 1.1, 3],
      ].map(([x, sk, h, sh, s, st], i) => (
        <Kid key={x} x={x} y={455 + (i % 2) * 14} s={s} skin={sk} hair={h} shirt={sh} style={st} arms={i % 2 ? 'cheer' : 'out'} />
      ))}
      <Kid x={320} y={490} s={0.6} skin={SKIN[1]} hair={HAIR[2]} shirt="#ff8fa3" style={2} hop />
      <Kid x={520} y={492} s={0.6} skin={SKIN[0]} hair={HAIR[0]} shirt="#4aa3df" hop arms="cheer" />
    </Scene>
  ),
};

export default scenes;
