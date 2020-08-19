import React from 'react';
import Link from 'next/link';

export const Layout = ({ children }: { children: React.ReactNode }): React.ReactElement => (
  <>
    <nav>
      <Link href="/">
        <a>Home</a>
      </Link>
    </nav>
    {children}
  </>
);
