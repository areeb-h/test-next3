// components/layout.js

import Navbar from './Navbar.tsx'

export default function Layout({ children  }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  )
}