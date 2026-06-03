'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function FadeImage({ className, style, duration = 600, ...props }) {
  const [loaded, setLoaded] = useState(false);
  return (
    <Image
      {...props}
      className={className}
      style={{
        ...style,
        opacity: loaded ? 1 : 0,
        transition: `opacity ${duration}ms ease`,
        willChange: 'opacity',
      }}
      onLoad={() => setLoaded(true)}
    />
  );
}
