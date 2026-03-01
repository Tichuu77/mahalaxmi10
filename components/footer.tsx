import { Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary border-t-4 border-primary/50 relative overflow-hidden pt-16 pb-8">
      <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-4 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-2 cursor-pointer">
              <img src="/Malaxmi-Final-Logo.-2png.png" alt="Logo" className=" w-28 h-28" />
              <span
                style={{ fontFamily: "var(--font-heading, Poppins, sans-serif)" }}
                className="font-bold text-white text-lg"
              >
                 Mahalaxmi  Infra
              </span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Delivering premium solutions with excellence and innovation.
            </p>
             <p className="text-white/80  mt-2 text-sm leading-relaxed">
              MAHA RERA NO. A50500034049
            </p>
          </div>

          {/* Quick Links */}
          <div className="mt-8 ml-8">
            <h4
              style={{ fontFamily: "var(--font-heading, Poppins, sans-serif)" }}
              className="font-bold text-white mb-4"
            >
              Navigation
            </h4>
            <ul className="space-y-2">
              {[{href : "#about", label : "About"}, {href : "#amenities", label : "Amenities"}, {href : "#projects", label : "Projects"}, { label: "Gallery", href: "#gallery" }, ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-white/60 hover:text-white transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="mt-8 ml-8">
            <h4
              style={{ fontFamily: "var(--font-heading, Poppins, sans-serif)" }}
              className="font-bold text-white mb-4"
            >
              Resources
            </h4>
            <ul className="space-y-2">
              {[ { label: "User Guide", href: "#user-guide" }, { label: "News", href: "#news" }, { href: "#testimonials", label: "Testimonials" }, { href: "#contact", label: "Contact" }].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-white/60 hover:text-white transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="mt-8 ml-8">
            <h4
              style={{ fontFamily: "var(--font-heading, Poppins, sans-serif)" }}
              className="font-bold text-white mb-4"
            >
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
               Umesh Wandhare
              </li>
              <li className="flex items-center gap-2 text-white/60 text-sm">
                <Phone size={14} className="text-white" />
                +91 9403738418
              </li>
              <li className="flex items-center gap-2 text-white/60 text-sm">
                <Mail size={14} className="text-white" />
                umeshwandhare19@gmail.com
              </li>
              <li className="flex items-start gap-2 text-white/60 text-sm">
                <MapPin size={14} className="text-white mt-0.5 flex-shrink-0" />
                123 Luxury Avenue
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px  bg-white/10 my-8"></div>

      
      </div>
    </footer>
  )
}
