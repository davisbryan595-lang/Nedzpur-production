import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Linkedin, Instagram, Github } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Image
              src="/nedzlogo.png"
              alt="Nedzpur Production"
              width={150}
              height={50}
              className="h-12 w-auto mb-4"
            />
            <p className="text-sm text-muted-foreground mb-4 text-balance">
              Visualization to the horizon. Full-stack IT services in Suffolk County, Long Island.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-[#FFA500] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-[#FFA500] transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-[#FFA500] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-[#FFA500] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-[#FFA500] transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#services" className="hover:text-[#FFA500] transition-colors">
                  Frontend Development
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-[#FFA500] transition-colors">
                  Backend Development
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-[#FFA500] transition-colors">
                  IT Engineering
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-[#FFA500] transition-colors">
                  Automation
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-[#FFA500] transition-colors">
                  Data Analytics
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-[#FFA500] transition-colors">
                  Software Testing
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#home" className="hover:text-[#FFA500] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-[#FFA500] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#gallery" className="hover:text-[#FFA500] transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="hover:text-[#FFA500] transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="hover:text-[#FFA500] transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-[#FFA500] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Suffolk County</li>
              <li>Long Island, NY 11733</li>
              <li>
                <a href="tel:+15550123" className="hover:text-[#FFA500] transition-colors">
                  +1 (555) 012-3456
                </a>
              </li>
              <li>
                <a href="mailto:contact@nedzpur.com" className="hover:text-[#FFA500] transition-colors">
                  contact@nedzpur.com
                </a>
              </li>
              <li className="pt-2">
                <strong>Hours:</strong>
                <br />
                Mon-Sat: 8:00 AM - 6:00 PM
                <br />
                Sunday: By appointment
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2025 Nedzpur Production. All rights reserved.</p>
          <p className="text-balance text-center">
            Serving Suffolk County & Nassau County — Mobile consultations available
          </p>
        </div>
      </div>
    </footer>
  )
}
