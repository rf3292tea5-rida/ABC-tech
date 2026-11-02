import { Mail, MapPin, Phone } from "lucide-react";

export function FooterSection() {
  return (
    <footer className="bg-brand-surface border-t border-brand-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-heading font-bold text-brand-heading mb-4">
              About Us
            </h3>
            <p className="text-brand-text">
              Helping people discover their future in tech through structured
              learning and expert guidance.
            </p>
          </div>

          <div>
            <h3 className="font-heading font-bold text-brand-heading mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-brand-text hover:text-brand-primary transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-brand-text hover:text-brand-primary transition-colors"
                >
                  Courses
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-brand-text hover:text-brand-primary transition-colors"
                >
                  Career Assessment
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-brand-text hover:text-brand-primary transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-bold text-brand-heading mb-4">
              Resources
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-brand-text hover:text-brand-primary transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-brand-text hover:text-brand-primary transition-colors"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-brand-text hover:text-brand-primary transition-colors"
                >
                  Support
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-brand-text hover:text-brand-primary transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-bold text-brand-heading mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-brand-primary" />
                <span className="text-brand-text">contact@techabc.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-brand-primary" />
                <span className="text-brand-text">+92 XXX XXXXXXX</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-brand-primary" />
                <span className="text-brand-text">
                  Gilgit Baltistan, Pakistan
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-brand-border pt-8 text-center">
          <p className="text-brand-text">
            © 2024 Tech ABC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
