import Container from "../ui/Container"

const Footer = () => {
  return (
    <footer className="
      border-t
      border-white/10
      bg-[#0B1120]
    ">

      <Container>

        <div className="
          py-14
          flex
          flex-col
          md:flex-row
          justify-between
          gap-10
        ">

          {/* Left */}
          <div>

            <h2 className="
              text-2xl
              font-bold
            ">
              SIGVITAS
            </h2>

            <p className="
              text-slate-400
              mt-4
              max-w-sm
              leading-relaxed
            ">
              Building innovative enterprise solutions
              with modern technology and consulting expertise.
            </p>

          </div>

          {/* Right */}
          <div className="
            grid
            grid-cols-2
            gap-10
          ">

            <div>
              <h3 className="font-semibold mb-4">
                Company
              </h3>

              <div className="
                flex
                flex-col
                gap-3
                text-slate-400
              ">
                <a href="#">About</a>
                <a href="#">Services</a>
                <a href="#">Careers</a>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">
                Contact
              </h3>

              <div className="
                flex
                flex-col
                gap-3
                text-slate-400
              ">
                <p>Mysore, Karnataka</p>
                <p>info@sigvitas.com</p>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom */}
        <div className="
          border-t
          border-white/10
          py-6
          text-slate-500
          text-sm
        ">
          © 2026 Sigvitas. All rights reserved.
        </div>

      </Container>

    </footer>
  )
}

export default Footer