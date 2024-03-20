// pages/index.js
import React from 'react';
import Link from 'next/link';

function HomePage() {
    return (
        <>
            <h2>
                <div>Visit <Link href="/p1">p1!</Link></div>
            </h2>
            <h2>
                <div>Visit <Link href="/p2">p2!</Link></div>
            </h2>
        </>
    );
}

export default HomePage;

