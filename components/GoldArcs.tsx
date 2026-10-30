export function GoldArcs() {
  return <svg className="gold-arcs" viewBox="0 0 1600 440" preserveAspectRatio="none" aria-hidden="true" focusable="false">
    <defs>
      <linearGradient id="arc-left" x1="0" y1="1" x2="1" y2="0"><stop offset="0%" stopColor="#B8860B" stopOpacity=".04"/><stop offset="38%" stopColor="#FFD02F" stopOpacity=".78"/><stop offset="72%" stopColor="#B8860B" stopOpacity=".14"/><stop offset="100%" stopColor="#B8860B" stopOpacity="0"/></linearGradient>
      <linearGradient id="arc-right" x1="1" y1="1" x2="0" y2="0"><stop offset="0%" stopColor="#B8860B" stopOpacity=".04"/><stop offset="38%" stopColor="#FFD02F" stopOpacity=".78"/><stop offset="72%" stopColor="#B8860B" stopOpacity=".14"/><stop offset="100%" stopColor="#B8860B" stopOpacity="0"/></linearGradient>
      <filter id="arc-glow" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="5" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    </defs>
    <g className="arc-glow-layer" filter="url(#arc-glow)">
      <path d="M -40 430 C 110 425 145 365 218 274 C 298 174 361 110 475 49 C 550 9 623 5 710 12"/><path d="M -40 430 C 130 430 183 388 264 310 C 356 221 406 155 515 103 C 586 69 642 60 722 66"/>
      <path d="M 1640 430 C 1490 425 1455 365 1382 274 C 1302 174 1239 110 1125 49 C 1050 9 977 5 890 12"/><path d="M 1640 430 C 1470 430 1417 388 1336 310 C 1244 221 1194 155 1085 103 C 1014 69 958 60 878 66"/>
    </g>
    <g className="arc-sharp-layer">
      <path d="M -40 430 C 110 425 145 365 218 274 C 298 174 361 110 475 49 C 550 9 623 5 710 12"/><path d="M -40 430 C 130 430 183 388 264 310 C 356 221 406 155 515 103 C 586 69 642 60 722 66"/>
      <path d="M 1640 430 C 1490 425 1455 365 1382 274 C 1302 174 1239 110 1125 49 C 1050 9 977 5 890 12"/><path d="M 1640 430 C 1470 430 1417 388 1336 310 C 1244 221 1194 155 1085 103 C 1014 69 958 60 878 66"/>
    </g>
  </svg>;
}
