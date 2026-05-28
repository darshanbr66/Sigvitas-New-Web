import {
  HiOutlineArrowRight,
} from "react-icons/hi"

import {
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa"

import {
  NavLink,
} from "react-router-dom"

import Container from "../ui/Container"

const Footer = () => {

  return (
    <footer className="
      relative
      overflow-hidden
      border-t
      border-white/10
      bg-[#020617]
    ">

      {/* Glow */}
      <div className="
        absolute
        inset-0
        bg-[radial-gradient(circle_at_bottom,rgba(6,182,212,0.08),transparent_40%)]
      " />

      <Container>

        <div className="
          relative
          z-10
          py-24
          grid
          lg:grid-cols-4
          gap-16
        ">

          {/* Company */}
          <div>

            <h2 className="
              text-3xl
              font-bold
              tracking-wide
            ">
              SIGVITAS
            </h2>

            <p className="
              mt-6
              text-slate-400
              leading-relaxed
            ">

              Enterprise technology,
              research intelligence,
              and innovation consulting
              built for future-ready businesses.

            </p>

            {/* Social */}
            <div className="
              mt-8
              flex
              items-center
              gap-4
            ">

              {
                [
                  <FaLinkedinIn />,
                  <FaTwitter />,
                  <FaInstagram />,
                ].map((icon, index) => (

                  <div
                    key={index}
                    className="
                      w-11
                      h-11
                      rounded-full
                      border
                      border-white/10
                      bg-white/[0.04]
                      flex
                      items-center
                      justify-center
                      text-slate-300
                      hover:text-white
                      hover:border-cyan-400/30
                      transition-all
                      duration-300
                      cursor-pointer
                    "
                  >

                    {icon}

                  </div>

                ))
              }

            </div>

          </div>

          {/* Quick Links */}
          <div>

            <h3 className="
              text-xl
              font-semibold
            ">
              Quick Links
            </h3>

            <div className="
              mt-8
              flex
              flex-col
              gap-5
            ">

              {
                [
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
                ].map((item) => (

                  <NavLink
                    key={item.name}
                    to={item.path}
                    className="
                      flex
                      items-center
                      gap-3
                      text-slate-400
                      hover:text-white
                      transition-all
                      duration-300
                    "
                  >

                    <HiOutlineArrowRight />

                    {item.name}

                  </NavLink>

                ))
              }

            </div>

          </div>

          {/* Services */}
          <div>

            <h3 className="
              text-xl
              font-semibold
            ">
              Services
            </h3>

            <div className="
              mt-8
              flex
              flex-col
              gap-5
              text-slate-400
            ">

              <p>Technology Consulting</p>

              <p>Research Intelligence</p>

              <p>Digital Transformation</p>

              <p>Enterprise Solutions</p>

              <p>Innovation Strategy</p>

            </div>

          </div>

          {/* Contact */}
          <div>

            <h3 className="
              text-xl
              font-semibold
            ">
              Contact
            </h3>

            <div className="
              mt-8
              flex
              flex-col
              gap-5
              text-slate-400
            ">

              <p>
                Mysore, Karnataka, India
              </p>

              <p>
                contact@sigvitas.com
              </p>

              <p>
                +91 9008854199
              </p>

            </div>

          </div>

        </div>

        {/* Bottom */}
        <div className="
          py-8
          border-t
          border-white/10
          flex
          flex-col
          md:flex-row
          items-center
          justify-between
          gap-5
        ">

          <p className="
            text-sm
            text-slate-500
          ">

            © 2026 Sigvitas. All rights reserved.

          </p>

          <div className="
            flex
            items-center
            gap-8
            text-sm
            text-slate-500
          ">

            <p className="cursor-pointer hover:text-white transition">
              Privacy Policy
            </p>

            <p className="cursor-pointer hover:text-white transition">
              Terms & Conditions
            </p>

          </div>

        </div>

      </Container>

    </footer>
  )
}

export default Footer