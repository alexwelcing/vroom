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
          Get started with WitchRoom soon.
        </p>
      </div>
      {/* ... rest of the WitchRoom branding ... */}
      </main>
    </div>
  );
}