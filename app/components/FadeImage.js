'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function FadeImage({ className, style, duration = 600, priority, ...props }) {
  const [loaded, setLoaded] = useState(!!priority);
  return (
    <Image
      {...props}
      priority={priority}
      className={className}
      style={{
        ...style,
        opacity: loaded ? 1 : 0,
        transition: loaded && !priority ? `opacity ${duration}ms ease` : undefined,
        willChange: priority ? undefined : 'opacity',
      }}
      onLoad={() => setLoaded(true)}
    />
  );
}
