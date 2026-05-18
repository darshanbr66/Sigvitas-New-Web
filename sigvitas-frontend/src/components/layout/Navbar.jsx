import { useEffect, useState } from "react"

import {
  HiOutlineMenuAlt3,
  HiX,
} from "react-icons/hi"

import { motion, AnimatePresence } from "framer-motion"

import { Link } from "react-scroll"

import Container from "../ui/Container"
import Button from "../ui/Button"

const navLinks = [
  {
    name: "Home",
    to: "hero",
  },
  {
    name: "Services",
    to: "services",
  },
  {
    name: "About",
    to: "about",
  },
  {
    name: "Process",
    to: "process",
  },
  {
    name: "Testimonials",
    to: "testimonials",
  },
]

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false)

  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)

    return () =>
      window.removeEventListener("scroll", handleScroll)

  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`
        fixed
        top-0
        left-0
        w-full
        z-50
        transition-all
        duration-500

        ${
          scrolled
            ? "bg-[#0B1120]/90 backdrop-blur-xl border-b border-white/10"
            : "bg-transparent"
        }
      `}
    >

      <Container>

        <div className="
          h-16
          md:h-20
          flex
          items-center
          justify-between
        ">

          {/* Logo */}
          <Link
            to="hero"
            smooth
            duration={700}
            className="
              cursor-pointer
              text-2xl
              font-bold
              tracking-wide
            "
          >
            SIGVITAS
          </Link>

          {/* Desktop Navigation */}
          <nav className="
            hidden
            lg:flex
            items-center
            gap-10
          ">

            {
              navLinks.map((item) => (

                <Link
                  key={item.name}
                  to={item.to}
                  smooth
                  spy
                  duration={700}
                  offset={-80}
                  activeClass="text-white"
                  className="
                    cursor-pointer
                    text-slate-400
                    hover:text-white
                    transition-all
                    duration-300
                    relative
                    after:absolute
                    after:left-0
                    after:-bottom-2
                    after:w-0
                    after:h-[2px]
                    after:bg-cyan-400
                    after:transition-all
                    hover:after:w-full
                  "
                >
                  {item.name}
                </Link>

              ))
            }

          </nav>

          {/* CTA */}
          <div className="hidden lg:block">

            <Button>
              Let’s Talk
            </Button>

          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="
              lg:hidden
              text-3xl
            "
          >

            {
              mobileMenu
                ? <HiX />
                : <HiOutlineMenuAlt3 />
            }

          </button>

        </div>

      </Container>

      {/* Mobile Menu */}
      <AnimatePresence>

        {
          mobileMenu && (

            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.3 }}
              className="
                lg:hidden
                border-t
                border-white/10
                bg-[#0B1120]/95
                backdrop-blur-xl
              "
            >

              <Container>

                <div className="
                  py-10
                  flex
                  flex-col
                  gap-8
                ">

                  {
                    navLinks.map((item) => (

                      <Link
                        key={item.name}
                        to={item.to}
                        smooth
                        duration={700}
                        offset={-80}
                        onClick={() => setMobileMenu(false)}
                        className="
                          cursor-pointer
                          text-lg
                          text-slate-300
                          hover:text-white
                          transition
                        "
                      >
                        {item.name}
                      </Link>

                    ))
                  }

                  <Button className="w-full">
                    Let’s Talk
                  </Button>

                </div>

              </Container>

            </motion.div>

          )
        }

      </AnimatePresence>

    </motion.header>
  )
}

export default Navbar