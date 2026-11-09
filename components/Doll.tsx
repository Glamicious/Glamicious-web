/**
 * Glamicious doll avatar — ported from the design component (Doll.dc).
 * 21 colourways; lilac is the brand logo, the rest are customer avatars.
 * `uid` must be unique per instance so gradient/clip ids don't collide.
 */

type Palette = {
  skin1: string;
  skin2: string;
  skin3: string;
  nose: string;
  brow: string;
  hairLight: string;
  hairMid: string;
  hairDark: string;
  shadow: string;
  iris: string;
  lipLight: string;
  lipDark: string;
  star: string;
  starStroke: string;
  streak?: string;
  male?: boolean;
};

const light = { skin1: "#FFF7F3", skin2: "#F9DDD4", skin3: "#EBB6A8", nose: "#F2B0A3", brow: "#8C6A64" };
const medium = { skin1: "#FCE6D3", skin2: "#EFC7A6", skin3: "#D6A27B", nose: "#DB9C7E", brow: "#6B4A3A" };
const tan = { skin1: "#F4D2B0", skin2: "#E0AC80", skin3: "#C38A5E", nose: "#C98263", brow: "#5A3B2B" };
const deep = { skin1: "#DDAA82", skin2: "#BC8259", skin3: "#93603D", nose: "#A2684A", brow: "#3B2618" };

const PALETTES: Record<string, Palette> = {
  lilac: { ...light, hairLight: "#FFFFFF", hairMid: "#F1ECFA", hairDark: "#CFC2EE", shadow: "#B9A4FB", iris: "#7C3AED", lipLight: "#E3C2FF", lipDark: "#8B3FD9", star: "#A78BFA", starStroke: "#FFFFFF" },
  club: { ...light, hairLight: "#FFFFFF", hairMid: "#F7EEF2", hairDark: "#E2CBD5", shadow: "#9FD67E", iris: "#5E8C3A", lipLight: "#D4EDB9", lipDark: "#6E9A4C", star: "#F7DC74", starStroke: "#FFFFFF" },
  rose: { ...light, hairLight: "#FFE8F1", hairMid: "#F9A8C9", hairDark: "#DB6B9C", shadow: "#C4B5FD", iris: "#7C3AED", lipLight: "#FDA4AF", lipDark: "#BE185D", star: "#FFFFFF", starStroke: "#DB2777" },
  honey: { ...medium, hairLight: "#FFF6D6", hairMid: "#F5D58A", hairDark: "#C99A45", shadow: "#FDBA74", iris: "#92400E", lipLight: "#FDBA9C", lipDark: "#C2410C", star: "#FDE68A", starStroke: "#FFFFFF" },
  sky: { ...light, hairLight: "#EAF5FF", hairMid: "#9CC8FB", hairDark: "#3B7DDD", shadow: "#7DD3FC", iris: "#1D4ED8", lipLight: "#F9A8D4", lipDark: "#BE185D", star: "#FFFFFF", starStroke: "#3B82F6" },
  mint: { ...tan, hairLight: "#EFFDF6", hairMid: "#A7EBC9", hairDark: "#3FB685", shadow: "#99F6E4", iris: "#0F766E", lipLight: "#FDBA9C", lipDark: "#E0603A", star: "#FFFFFF", starStroke: "#10B981" },
  cherry: { ...medium, hairLight: "#FFE1E1", hairMid: "#F48080", hairDark: "#B4232C", shadow: "#FDA4AF", iris: "#7F1D1D", lipLight: "#FB7185", lipDark: "#9F1239", star: "#FDE68A", starStroke: "#FFFFFF" },
  mocha: { ...deep, hairLight: "#D7B595", hairMid: "#8D6142", hairDark: "#4E3020", shadow: "#C4B5FD", iris: "#3B2414", lipLight: "#E7A0A8", lipDark: "#8A3B4A", star: "#FDE68A", starStroke: "#FFFFFF" },
  midnight: { ...tan, hairLight: "#6B6278", hairMid: "#2E2838", hairDark: "#120E18", shadow: "#A78BFA", iris: "#4C1D95", lipLight: "#FB7185", lipDark: "#BE123C", star: "#C4B5FD", starStroke: "#FFFFFF" },
  berry: { ...light, hairLight: "#A9805F", hairMid: "#6B4730", hairDark: "#3A2418", streak: "#F48FB1", shadow: "#F9A8D4", iris: "#5B3A29", lipLight: "#FDA4AF", lipDark: "#BE185D", star: "#F9A8D4", starStroke: "#FFFFFF" },
  plum: { ...medium, hairLight: "#5E556B", hairMid: "#2A2433", hairDark: "#110D17", streak: "#A78BFA", shadow: "#C4B5FD", iris: "#4C1D95", lipLight: "#E879F9", lipDark: "#86198F", star: "#C4B5FD", starStroke: "#FFFFFF" },
  peach: { ...light, hairLight: "#FFF4D2", hairMid: "#EFCF86", hairDark: "#C49440", streak: "#F472B6", shadow: "#FDBA74", iris: "#92400E", lipLight: "#FDA4AF", lipDark: "#DB2777", star: "#F9A8D4", starStroke: "#FFFFFF" },
  ocean: { ...tan, hairLight: "#9C7A5C", hairMid: "#5E412C", hairDark: "#2F1F14", streak: "#60A5FA", shadow: "#7DD3FC", iris: "#1E3A8A", lipLight: "#F9A8D4", lipDark: "#BE185D", star: "#93C5FD", starStroke: "#FFFFFF" },
  ruby: { ...deep, hairLight: "#4E4552", hairMid: "#231C25", hairDark: "#0D090E", streak: "#F43F5E", shadow: "#FDA4AF", iris: "#3B0A14", lipLight: "#FB7185", lipDark: "#9F1239", star: "#FDE68A", starStroke: "#FFFFFF" },
  pearl: { ...medium, hairLight: "#FFFFFF", hairMid: "#F1ECFA", hairDark: "#CFC2EE", streak: "#A78BFA", shadow: "#B9A4FB", iris: "#7C3AED", lipLight: "#E3C2FF", lipDark: "#8B3FD9", star: "#A78BFA", starStroke: "#FFFFFF" },
  jet: { ...medium, male: true, hairLight: "#5A5262", hairMid: "#25202B", hairDark: "#0E0B12", brow: "#1E1820", shadow: "#D6A27B", iris: "#3B2414", lipLight: "#C97B6E", lipDark: "#A0584C", star: "#C4B5FD", starStroke: "#FFFFFF" },
  cocoa: { ...tan, male: true, hairLight: "#9A7458", hairMid: "#5C3E2A", hairDark: "#2E1E14", brow: "#2E1E14", shadow: "#C38A5E", iris: "#4A2C18", lipLight: "#C27A62", lipDark: "#94523E", star: "#FDE68A", starStroke: "#FFFFFF" },
  sandy: { ...light, male: true, hairLight: "#FFF1C9", hairMid: "#E5C27A", hairDark: "#B08638", brow: "#8A6A3A", shadow: "#EBB6A8", iris: "#2563EB", lipLight: "#E79A8C", lipDark: "#C0645A", star: "#93C5FD", starStroke: "#FFFFFF" },
  frost: { ...light, male: true, hairLight: "#FFFFFF", hairMid: "#ECE6FA", hairDark: "#BFB0EA", brow: "#8C7BBF", shadow: "#EBB6A8", iris: "#7C3AED", lipLight: "#E39A9A", lipDark: "#B5636B", star: "#A78BFA", starStroke: "#FFFFFF" },
  copper: { ...medium, male: true, hairLight: "#F2A774", hairMid: "#B5582A", hairDark: "#6E2E12", brow: "#6E2E12", shadow: "#D6A27B", iris: "#166534", lipLight: "#D88A72", lipDark: "#A6553F", star: "#FDE68A", starStroke: "#FFFFFF" },
  indigo: { ...deep, male: true, hairLight: "#4E4552", hairMid: "#231C25", hairDark: "#0D090E", streak: "#60A5FA", brow: "#1A1218", shadow: "#93603D", iris: "#1E3A8A", lipLight: "#B9705A", lipDark: "#7E4232", star: "#93C5FD", starStroke: "#FFFFFF" },
};

export type DollTheme = keyof typeof PALETTES;

export default function Doll({
  size,
  uid,
  theme = "lilac",
}: {
  size: number;
  uid: string;
  theme?: DollTheme;
}) {
  const c = PALETTES[theme] ?? PALETTES.lilac;
  const streak = c.streak ?? "none";
  const streakOpacity = streak === "none" ? 0 : 0.92;
  const male = !!c.male;

  const id = {
    skin: `gd-${uid}-skin`,
    hair: `gd-${uid}-hair`,
    blush: `gd-${uid}-blush`,
    shadow: `gd-${uid}-shadow`,
    lip: `gd-${uid}-lip`,
    eye: `gd-${uid}-eye`,
  };
  const url = (k: keyof typeof id) => `url(#${id[k]})`;

  const femEye = (
    <>
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
    </>
  );

  const maleEyeLine = (
    <path
      d="M180 232 Q140 214 98 230"
      fill="none"
      stroke="#241A22"
      strokeWidth="4.5"
      strokeLinecap="round"
    />
  );

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 400 400"
      role="img"
      aria-label="Glamicious doll avatar"
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

      {male ? (
        <g>
          <ellipse cx="76" cy="250" rx="20" ry="30" fill={url("skin")} />
          <ellipse cx="324" cy="250" rx="20" ry="30" fill={url("skin")} />
          <path
            d="M70 236 Q62 250 72 268 M330 236 Q338 250 328 268"
            fill="none"
            stroke={c.nose}
            strokeWidth="4"
            strokeLinecap="round"
          />
        </g>
      ) : (
        <path
          d="M62 200 C44 92 122 30 200 30 C278 30 356 92 338 200 L344 318 Q326 346 292 336 L108 336 Q74 346 56 318 Z"
          fill={url("hair")}
        />
      )}

      <ellipse cx="200" cy="224" rx="128" ry="120" fill={url("skin")} />

      {male ? (
        <g>
          <path
            d="M70 244 C50 150 96 50 202 48 C308 46 352 150 330 244 L318 242 Q320 198 308 170 Q292 150 270 166 Q262 142 246 132 Q232 152 214 160 Q206 136 190 124 Q176 146 158 156 Q150 138 136 128 Q116 146 104 168 Q86 196 82 242 Z"
            fill={url("hair")}
          />
          <path
            d="M150 72 Q170 104 158 146 M202 60 Q218 98 204 140 M254 70 Q272 104 260 150 M112 112 Q118 140 108 168 M292 112 Q300 140 296 170"
            fill="none"
            stroke={c.hairDark}
            strokeWidth="3"
            strokeLinecap="round"
            opacity="0.5"
          />
          <path
            d="M176 62 Q196 100 184 146 M232 62 Q250 100 238 150"
            fill="none"
            stroke={streak}
            strokeWidth="10"
            strokeLinecap="round"
            opacity={streakOpacity}
          />
          <path
            d="M126 82 Q168 58 220 60"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="11"
            strokeLinecap="round"
            opacity="0.7"
          />
          <path
            d="M104 198 Q136 184 170 196"
            fill="none"
            stroke={c.brow}
            strokeWidth="9"
            strokeLinecap="round"
          />
          <path
            d="M296 198 Q264 184 230 196"
            fill="none"
            stroke={c.brow}
            strokeWidth="9"
            strokeLinecap="round"
          />
        </g>
      ) : (
        <g>
          <path d="M60 168 Q64 258 78 332 Q98 346 114 330 Q98 262 102 168 Z" fill={url("hair")} />
          <path d="M340 168 Q336 258 322 332 Q302 346 286 330 Q302 262 298 168 Z" fill={url("hair")} />
          <path
            d="M74 196 Q76 256 86 318 M326 196 Q324 256 314 318 M64 240 Q60 292 70 326 M336 240 Q340 292 330 326"
            fill="none"
            stroke={streak}
            strokeWidth="9"
            strokeLinecap="round"
            opacity={streakOpacity}
          />
          <path
            d="M92 208 Q92 254 100 304 M308 208 Q308 254 300 304"
            fill="none"
            stroke={streak}
            strokeWidth="4.5"
            strokeLinecap="round"
            opacity={streakOpacity}
          />
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
            d="M126 92 Q114 140 114 186 M276 92 Q288 140 288 186"
            fill="none"
            stroke={streak}
            strokeWidth="11"
            strokeLinecap="round"
            opacity={streakOpacity}
          />
          <path
            d="M148 98 Q142 148 144 186 M256 98 Q262 148 260 186"
            fill="none"
            stroke={streak}
            strokeWidth="4"
            strokeLinecap="round"
            opacity={streakOpacity}
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
        </g>
      )}

      <g>
        <path d="M178 232 Q140 216 98 230 Q138 258 178 232 Z" fill="#FFFFFF" />
        <g clipPath={url("eye")}>
          <circle cx="136" cy="240" r="18" fill={c.iris} />
          <circle cx="136" cy="240" r="10" fill="#1E1420" />
          <circle cx="142" cy="234" r="4.5" fill="#FFFFFF" />
        </g>
        {male ? maleEyeLine : femEye}
      </g>
      <g transform="translate(400,0) scale(-1,1)">
        <path d="M178 232 Q140 216 98 230 Q138 258 178 232 Z" fill="#FFFFFF" />
        <g clipPath={url("eye")}>
          <circle cx="136" cy="240" r="18" fill={c.iris} />
          <circle cx="136" cy="240" r="10" fill="#1E1420" />
          <circle cx="130" cy="234" r="4.5" fill="#FFFFFF" />
        </g>
        {male ? maleEyeLine : femEye}
      </g>

      {male ? (
        <g>
          <ellipse cx="114" cy="284" rx="30" ry="16" fill={url("blush")} opacity="0.35" />
          <ellipse cx="286" cy="284" rx="30" ry="16" fill={url("blush")} opacity="0.35" />
        </g>
      ) : (
        <g>
          <ellipse cx="116" cy="280" rx="40" ry="24" fill={url("blush")} />
          <ellipse cx="284" cy="280" rx="40" ry="24" fill={url("blush")} />
          <ellipse cx="102" cy="268" rx="8" ry="4" fill="#FFFFFF" opacity="0.75" />
          <ellipse cx="298" cy="268" rx="8" ry="4" fill="#FFFFFF" opacity="0.75" />
        </g>
      )}

      <ellipse cx="200" cy="270" rx="9" ry="6" fill={c.nose} />
      <circle cx="197" cy="268" r="2.4" fill="#FFFFFF" opacity="0.85" />

      {male ? (
        <path
          d="M180 300 Q200 318 220 300"
          fill="none"
          stroke={c.lipDark}
          strokeWidth="5.5"
          strokeLinecap="round"
        />
      ) : (
        <g>
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
        </g>
      )}

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
