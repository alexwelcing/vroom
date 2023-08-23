'use client'

import WitchRoomBackground from '../components/WitchRoom'

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 z-0">
        <WitchRoomBackground />
      </div>
      <main>
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
          <p className="fixed left-0 top-0 flex w-full justify-center border-b border-witch-border bg-gradient-to-b from-witch-purple pb-2 pt-2 backdrop-blur-2xl dark:border-neutral-800 dark:bg-witch-dark lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-witch-dark">
          Get started with WitchRoom by editing&nbsp;
          <code className="font-mono font-bold">src/app/page.tsx</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-witch-dark lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0" href="https://alexwelcing.com" target="_blank" rel="noopener noreferrer">
            By Alex Welcing
          </a>
        </div>
      </div>
      {/* ... rest of the WitchRoom branding ... */}
      </main>
    </div>
  );
}