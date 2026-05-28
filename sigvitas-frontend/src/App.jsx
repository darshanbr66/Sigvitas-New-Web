import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom"

import {
  AnimatePresence,
} from "framer-motion"

import MainLayout from "./components/layout/MainLayout"

import Home from "./pages/Home"
import About from "./pages/About"
import Services from "./pages/Services"
import Contact from "./pages/Contact"
import Insights from "./pages/Insights"
import CaseStudies from "./pages/CaseStudies"
import Careers from "./pages/Careers"

function AnimatedRoutes() {

  const location = useLocation()

  return (

    <AnimatePresence mode="wait">

      <Routes
        location={location}
        key={location.pathname}
      >

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/services"
          element={<Services />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

        <Route
          path="/insights"
          element={<Insights />}
        />

        <Route
          path="/case-studies"
          element={<CaseStudies />}
        />

        <Route
          path="/careers"
          element={<Careers />}
        />

      </Routes>

    </AnimatePresence>

  )
}

function App() {

  return (
    <BrowserRouter
      basename="/Sigvitas-New-Web"
    >

      <MainLayout>

        <AnimatedRoutes />

      </MainLayout>

    </BrowserRouter>
  )
}

export default App