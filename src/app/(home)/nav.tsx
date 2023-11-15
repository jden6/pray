'use client'

import { signIn, signOut, useSession } from 'next-auth/react'

const NavMenu = () => {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        {session?.user?.name} <br/>
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return <div>
    <button onClick={() => signIn()}>Sign in</button>
  </div>
}

export default NavMenu