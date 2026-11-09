/**
 * Glamicious doll logo — lilac theme.
 * Ported from the design component (Doll.dc, theme="lilac").
 * `uid` must be unique per instance so gradient/clip ids don't collide.
 */
const c = {
  skin1: "#FFF7F3",
  skin2: "#F9DDD4",
  skin3: "#EBB6A8",
  nose: "#F2B0A3",
  brow: "#8C6A64",
  hairLight: "#FFFFFF",
  hairMid: "#F1ECFA",
  hairDark: "#CFC2EE",
  shadow: "#B9A4FB",
  iris: "#7C3AED",
  lipLight: "#E3C2FF",
  lipDark: "#8B3FD9",
  star: "#A78BFA",
  starStroke: "#FFFFFF",
};

export default function Doll({ size, uid }: { size: number; uid: string }) {
  const id = {
    skin: `gd-${uid}-skin`,
    hair: `gd-${uid}-hair`,
    blush: `gd-${uid}-blush`,
    shadow: `gd-${uid}-shadow`,
    lip: `gd-${uid}-lip`,
    eye: `gd-${uid}-eye`,
  };
  const url = (k: keyof typeof id) => `url(#${id[k]})`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 400 400"
      role="img"
      aria-label="Glamicious doll logo"
      style={{ display: "block" }}
    >
      <defs>
        <radialGradient id={id.skin} cx="0.45" cy="0.38" r="0.68">
          <stop offset="0" stopColor={c.skin1} />
          <stop offset="0.68" stopColor={c.skin2} />
          <stop offset="1" stopColor={c.skin3} />
        </radialGradient>
        <radialGradient id={id.hair} cx="0.38" cy="0.25" r="0.8">
          <stop offset="0" stopColor={c.hairLight} />
          <stop offset="0.6" stopColor={c.hairMid} />
          <stop offset="1" stopColor={c.hairDark} />
        </radialGradient>
        <radialGradient id={id.blush} cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#F57C99" stopOpacity="0.85" />
          <stop offset="1" stopColor="#F57C99" stopOpacity="0" />
        </radialGradient>
        <radialGradient id={id.shadow} cx="0.5" cy="0.6" r="0.5">
          <stop offset="0" stopColor={c.shadow} stopOpacity="0.95" />
          <stop offset="1" stopColor={c.shadow} stopOpacity="0" />
        </radialGradient>
        <radialGradient id={id.lip} cx="0.38" cy="0.3" r="0.75">
          <stop offset="0" stopColor={c.lipLight} />
          <stop offset="1" stopColor={c.lipDark} />
        </radialGradient>
        <clipPath id={id.eye}>
          <path d="M178 232 Q140 216 98 230 Q138 258 178 232 Z" />
        </clipPath>
      </defs>

      <ellipse cx="200" cy="366" rx="120" ry="14" fill="#000000" opacity="0.12" />

      <path
        d="M62 200 C44 92 122 30 200 30 C278 30 356 92 338 200 L344 318 Q326 346 292 336 L108 336 Q74 346 56 318 Z"
        fill={url("hair")}
      />

      <ellipse cx="200" cy="224" rx="128" ry="120" fill={url("skin")} />

      <path d="M60 168 Q64 258 78 332 Q98 346 114 330 Q98 262 102 168 Z" fill={url("hair")} />
      <path d="M340 168 Q336 258 322 332 Q302 346 286 330 Q302 262 298 168 Z" fill={url("hair")} />

      <path
        d="M108 200 Q136 190 166 204"
        fill="none"
        stroke={c.brow}
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <path
        d="M292 200 Q264 190 234 204"
        fill="none"
        stroke={c.brow}
        strokeWidth="3.5"
        strokeLinecap="round"
      />

      <path d="M60 190 C54 82 128 42 200 42 C272 42 346 82 340 190 Z" fill={url("hair")} />
      <path
        d="M110 118 Q104 158 104 186 M152 96 Q147 148 149 186 M200 86 L200 186 M248 96 Q253 148 251 186 M290 118 Q296 158 296 186"
        fill="none"
        stroke={c.hairDark}
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.55"
      />
      <path
        d="M118 84 Q164 58 214 62"
        fill="none"
        stroke="#FFFFFF"
        strokeWidth="12"
        strokeLinecap="round"
        opacity="0.85"
      />

      <ellipse cx="138" cy="222" rx="48" ry="22" fill={url("shadow")} />
      <ellipse cx="262" cy="222" rx="48" ry="22" fill={url("shadow")} />

      <g>
        <path d="M178 232 Q140 216 98 230 Q138 258 178 232 Z" fill="#FFFFFF" />
        <g clipPath={url("eye")}>
          <circle cx="136" cy="240" r="18" fill={c.iris} />
          <circle cx="136" cy="240" r="10" fill="#1E1420" />
          <circle cx="142" cy="234" r="4.5" fill="#FFFFFF" />
        </g>
        <path
          d="M182 232 Q140 212 98 230 L82 220"
          fill="none"
          stroke="#241A22"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M100 230 Q86 238 72 246 M106 226 Q90 228 76 232 M114 222 Q100 216 88 214 M124 219 Q114 210 106 204"
          fill="none"
          stroke="#241A22"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M108 244 Q102 256 96 264 M122 250 Q118 262 112 272 M138 253 Q136 264 134 274 M154 251 Q154 260 154 268"
          fill="none"
          stroke="#241A22"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
      </g>
      <g transform="translate(400,0) scale(-1,1)">
        <path d="M178 232 Q140 216 98 230 Q138 258 178 232 Z" fill="#FFFFFF" />
        <g clipPath={url("eye")}>
          <circle cx="136" cy="240" r="18" fill={c.iris} />
          <circle cx="136" cy="240" r="10" fill="#1E1420" />
          <circle cx="130" cy="234" r="4.5" fill="#FFFFFF" />
        </g>
        <path
          d="M182 232 Q140 212 98 230 L82 220"
          fill="none"
          stroke="#241A22"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M100 230 Q86 238 72 246 M106 226 Q90 228 76 232 M114 222 Q100 216 88 214 M124 219 Q114 210 106 204"
          fill="none"
          stroke="#241A22"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M108 244 Q102 256 96 264 M122 250 Q118 262 112 272 M138 253 Q136 264 134 274 M154 251 Q154 260 154 268"
          fill="none"
          stroke="#241A22"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
      </g>

      <ellipse cx="116" cy="280" rx="40" ry="24" fill={url("blush")} />
      <ellipse cx="284" cy="280" rx="40" ry="24" fill={url("blush")} />
      <ellipse cx="102" cy="268" rx="8" ry="4" fill="#FFFFFF" opacity="0.75" />
      <ellipse cx="298" cy="268" rx="8" ry="4" fill="#FFFFFF" opacity="0.75" />

      <ellipse cx="200" cy="270" rx="9" ry="6" fill={c.nose} />
      <circle cx="197" cy="268" r="2.4" fill="#FFFFFF" opacity="0.85" />

      <path
        d="M184 302 C174 292 182 282 192 286 Q197 288 200 292 Q203 288 208 286 C218 282 226 292 216 302 C222 316 210 324 200 322 C190 324 178 316 184 302 Z"
        fill={url("lip")}
        stroke={c.lipDark}
        strokeWidth="1.5"
      />
      <path
        d="M188 302 Q200 307 212 302"
        fill="none"
        stroke={c.lipDark}
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <ellipse cx="193" cy="293" rx="4.5" ry="2.6" fill="#FFFFFF" opacity="0.85" />
      <ellipse cx="205" cy="313" rx="6" ry="2.6" fill="#FFFFFF" opacity="0.6" />

      <path
        d="M292 304 l3.2 8.2 8.2 3.2 -8.2 3.2 -3.2 8.2 -3.2 -8.2 -8.2 -3.2 8.2 -3.2 z"
        fill={c.star}
        stroke={c.starStroke}
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}
