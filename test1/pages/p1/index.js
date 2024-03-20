// pages/index.js
import React from 'react';
import Link from 'next/link';

function HomePage() {
    return (
        <>
          <h1>This is P1</h1>
          <h2>
            <Link href="/">Back to home</Link>
          </h2>
        </>
    );
}

export default HomePage;

