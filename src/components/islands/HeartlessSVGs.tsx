import type { JSX } from 'preact';

interface SVGProps {
  className?: string;
  size?: number;
}

/** Gothic corner ornament — filigree corner for cards/panels */
export function GothicCorner({ className = '', size = 40 }: SVGProps) {
  return (
    <svg viewBox="0 0 100 100" class={className} width={size} height={size} fill="currentColor">
      <path d="M0,0 L25,0 C25,12 18,18 12,25 C8,30 5,35 3,42 L0,42 Z" opacity="0.8"/>
      <path d="M0,25 L12,25 C12,30 8,35 5,42 L0,42 Z" opacity="0.4"/>
      <path d="M0,0 L0,15 C8,12 15,8 18,0 Z" opacity="0.3"/>
      <circle cx="6" cy="6" r="2" opacity="0.5"/>
    </svg>
  );
}

/** Royal crown — for pricing decree / headings */
export function Crown({ className = '', size = 40 }: SVGProps) {
  return (
    <svg viewBox="0 0 100 80" class={className} width={size} height={size} fill="currentColor">
      <path d="M10,60 L5,25 L25,40 L50,10 L75,40 L95,25 L90,60 Z" stroke="currentColor" stroke-width="2" fill="none"/>
      <path d="M10,60 L90,60 L90,70 L10,70 Z" opacity="0.6"/>
      <circle cx="50" cy="10" r="4" fill="currentColor" opacity="0.8"/>
      <circle cx="25" cy="40" r="3" fill="currentColor" opacity="0.5"/>
      <circle cx="75" cy="40" r="3" fill="currentColor" opacity="0.5"/>
      <path d="M38,60 L42,50 L50,45 L58,50 L62,60 Z" opacity="0.3"/>
      {/* Gem */}
      <circle cx="50" cy="65" r="3" opacity="0.9"/>
    </svg>
  );
}

/** White Rose — for hero crest / decorations */
export function Rose({ className = '', size = 40 }: SVGProps) {
  return (
    <svg viewBox="0 0 60 80" class={className} width={size} height={size} fill="currentColor">
      {/* Stem */}
      <path d="M30,35 L30,75" stroke="currentColor" stroke-width="1.5" fill="none" opacity="0.4"/>
      {/* Leaves */}
      <path d="M30,55 Q45,50 40,60 Q35,65 30,60 Z" opacity="0.3"/>
      <path d="M30,45 Q18,40 22,50 Q26,55 30,50 Z" opacity="0.3"/>
      {/* Outer petals */}
      <path d="M30,35 Q10,20 20,8 Q28,0 30,12 Q32,0 40,8 Q50,20 30,35 Z" opacity="0.7"/>
      {/* Inner petals */}
      <path d="M30,30 Q18,22 25,14 Q28,8 30,18 Q32,8 35,14 Q42,22 30,30 Z" opacity="0.5"/>
      {/* Center bud */}
      <circle cx="30" cy="22" r="4" opacity="0.8"/>
      {/* Thorn */}
      <path d="M30,65 L25,60" stroke="currentColor" stroke-width="1" fill="none" opacity="0.5"/>
    </svg>
  );
}

/** Playing card suit */
export function Suit({ type = 'heart', className = '', size = 24 }: SVGProps & { type: 'heart' | 'spade' | 'diamond' | 'club' }) {
  const paths: Record<string, JSX.Element> = {
    heart: (
      <path d="M12,22 C6,16 0,11 0,6 C0,2 3,0 6,0 C8,0 11,2 12,5 C13,2 16,0 18,0 C21,0 24,2 24,6 C24,11 18,16 12,22 Z" />
    ),
    spade: (
      <path d="M12,24 C6,18 0,12 0,7 C0,3 3,1 6,1 C9,1 11,3 12,6 C13,3 15,1 18,1 C21,1 24,3 24,7 C24,12 18,18 12,24 Z M12,10 L8,16 L16,16 Z" />
    ),
    diamond: (
      <path d="M12,0 L24,14 L12,28 L0,14 Z" />
    ),
    club: (
      <path d="M12,24 C8,20 4,16 4,12 C4,9 6,7 9,7 C10,7 11,8 12,9 C13,8 14,7 15,7 C18,7 20,9 20,12 C20,16 16,20 12,24 Z M12,24 L8,28 L16,28 Z" />
    ),
  };

  return (
    <svg viewBox="0 0 24 28" class={className} width={size} height={size * 1.17} fill="currentColor">
      {paths[type]}
    </svg>
  );
}

/** Single rose petal (for floating petal animations) */
export function RosePetal({ className = '', size = 16 }: SVGProps) {
  return (
    <svg viewBox="0 0 20 24" class={className} width={size} height={size * 1.2} fill="currentColor" opacity="0.3">
      <path d="M10,24 Q0,16 3,5 Q5,-2 10,3 Q15,-2 17,5 Q20,16 10,24 Z" />
    </svg>
  );
}
