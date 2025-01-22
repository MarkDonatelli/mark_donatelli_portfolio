'use client';

import { useLenis } from '../../hooks/useLenis';

export default function ClientWrapper({
  children
}: {
  children: React.ReactNode;
}) {
  useLenis();

  return <>{children}</>;
}
