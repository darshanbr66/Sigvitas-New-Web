import { useEffect, useState } from "react"

import {
  HiOutlineMenuAlt3,
  HiX,
} from "react-icons/hi"

import {
  motion,
  AnimatePresence,
} from "framer-motion"

import {
  NavLink,
} from "react-router-dom"

import Container from "../ui/Container"
import Button from "../ui/Button"

const navLinks = [
  {
    name: "Home",
    path: "/",
  },

  {
    name: "About",
    path: "/about",
  },

  {
    name: "Services",
    path: "/services",
  },

  {
    name: "Contact",
    path: "/contact",
  },
  {
    name: "Insights",
    path: "/insights",
  },
  {
    name: "Case Studies",
    path: "/case-studies",
  },
  {
    name: "Careers",
    path: "/careers",
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
            ? "bg-[#020617]/90 backdrop-blur-lg border-b border-white/10"
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
          <NavLink
            to="/"
            className="
              cursor-pointer
              text-2xl
              font-bold
              tracking-wide
              text-white
            "
          >
            SIGVITAS
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="
            hidden
            lg:flex
            items-center
            gap-10
          ">

            {
              navLinks.map((item) => (

                <NavLink
                  key={item.name}
                  to={item.path}

                  className={({ isActive }) => `
                    cursor-pointer
                    transition-all
                    duration-300
                    relative

                    ${
                      isActive
                        ? "text-white"
                        : "text-slate-400 hover:text-white"
                    }

                    after:absolute
                    after:left-0
                    after:-bottom-2
                    after:h-[2px]
                    after:bg-cyan-400
                    after:transition-all

                    ${
                      isActive
                        ? "after:w-full"
                        : "after:w-0 hover:after:w-full"
                    }
                  `}
                >
                  {item.name}
                </NavLink>

              ))
            }

          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">

            <Button>
              Let’s Talk
            </Button>

          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() =>
              setMobileMenu(!mobileMenu)
            }
            className="
              lg:hidden
              text-3xl
              text-white
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
              initial={{
                opacity: 0,
                y: -30,
              }}

              animate={{
                opacity: 1,
                y: 0,
              }}

              exit={{
                opacity: 0,
                y: -30,
              }}

              transition={{
                duration: 0.3,
              }}

              className="
                lg:hidden
                border-t
                border-white/10
                bg-[#020617]/95
                backdrop-blur-lg
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

                      <NavLink
                        key={item.name}
                        to={item.path}

                        onClick={() =>
                          setMobileMenu(false)
                        }

                        className={({ isActive }) => `
                          cursor-pointer
                          text-lg
                          transition

                          ${
                            isActive
                              ? "text-white"
                              : "text-slate-300 hover:text-white"
                          }
                        `}
                      >
                        {item.name}
                      </NavLink>

                    ))
                  }

                  {/* Mobile CTA */}
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