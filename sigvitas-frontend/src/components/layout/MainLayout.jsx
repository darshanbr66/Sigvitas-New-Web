import Navbar from "./Navbar"
import Footer from "./Footer"

const MainLayout = ({ children }) => {
  return (
    <div className="
      bg-[#0B1120]
      text-white
      overflow-hidden
    ">
      <Navbar />

      <main className="pt-20">
        {children}
      </main>

      <Footer />
    </div>
  )
}

export default MainLayout