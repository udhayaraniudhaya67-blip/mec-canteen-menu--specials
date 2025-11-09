import Link from "next/link"
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">MEC Canteen</h3>
            <p className="text-primary-foreground/90 text-sm">
              Authentic South Indian cuisine served with love. Experience the traditional flavors of South India.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-primary-foreground/90 hover:text-primary-foreground text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/menu" className="text-primary-foreground/90 hover:text-primary-foreground text-sm">
                  Menu
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-primary-foreground/90 hover:text-primary-foreground text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-primary-foreground/90 hover:text-primary-foreground text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-sm">
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/90">+91 9876543210</span>
              </li>
              <li className="flex items-start space-x-2 text-sm">
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/90">info@meccanteen.com</span>
              </li>
              <li className="flex items-start space-x-2 text-sm">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/90">MEC Campus, Kochi, Kerala</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Opening Hours</h3>
            <ul className="space-y-2">
              <li className="flex items-start space-x-2 text-sm">
                <Clock className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <div className="text-primary-foreground/90">
                  <p>Monday - Saturday</p>
                  <p>7:00 AM - 8:00 PM</p>
                </div>
              </li>
              <li className="flex items-start space-x-2 text-sm">
                <Clock className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <div className="text-primary-foreground/90">
                  <p>Sunday</p>
                  <p>8:00 AM - 6:00 PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="mt-8 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-primary-foreground/90">
              © 2024 MEC Canteen. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-primary-foreground/90 hover:text-primary-foreground">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-foreground/90 hover:text-primary-foreground">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-foreground/90 hover:text-primary-foreground">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
