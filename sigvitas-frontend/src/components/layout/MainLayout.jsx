import Navbar from "./Navbar"
import Footer from "./Footer"

import MouseGlow from "../ui/MouseGlow"

const MainLayout = ({ children }) => {
  return (
    <>

      <MouseGlow />

      <Navbar />

      <main>

        {children}

      </main>

      <Footer />

    </>
  )
}

export default MainLayout