import { Link } from "react-router-dom";
import { CONFIG } from "@/config";
import { ArrowUpRight } from "lucide-react";
import { trackEvent } from "@/services/analytics/analytics";
import { ThemeToggle } from "@/components/common/ThemeToggle";

export function Header() {
  return (
    <header className="bg-brand-background border-b border-brand-border sticky top-0 z-50">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 font-heading font-bold text-2xl text-brand-heading"
        >
          <div className="w-10 h-10 bg-brand-primary rounded-lg flex items-center justify-center text-white text-xl">
            T
          </div>
          <span>Tech ABC</span>
        </Link>

        {/* Desktop Navigation */}
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          <Link
            to="/"
            className="text-brand-text hover:text-brand-primary font-medium transition-colors"
          >
            Home
          </Link>
          <Link
            to="/careers"
            className="text-brand-text hover:text-brand-primary font-medium transition-colors"
          >
            Careers
          </Link>
          <Link
            to="/courses"
            className="text-brand-text hover:text-brand-primary font-medium transition-colors"
          >
            Courses
          </Link>
          <Link
            to="/projects"
            className="text-brand-text hover:text-brand-primary font-medium transition-colors"
          >
            Projects
          </Link>
          <Link
            to="/mentors"
            className="text-brand-text hover:text-brand-primary font-medium transition-colors"
          >
            Mentors
          </Link>
          <Link
            to="/blog"
            className="text-brand-text hover:text-brand-primary font-medium transition-colors"
          >
            Blog
          </Link>
          <Link
            to="/resources"
            className="text-brand-text hover:text-brand-primary font-medium transition-colors"
          >
            Resources
          </Link>
          <Link
            to="/community"
            className="text-brand-text hover:text-brand-primary font-medium transition-colors"
          >
            Community
          </Link>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-4">
          <Link
            to="/contact"
            className="hidden md:block text-brand-primary font-semibold hover:text-brand-primaryDark transition-colors"
          >
            Contact Us
          </Link>

          {/* Requirement #6: ABC Digital Agency Button */}
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <a
              href={CONFIG.externalLinks.abcDigitalAgency}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-accent text-brand-heading px-5 py-2.5 rounded-lg text-sm font-bold hover:bg-brand-accentDark transition-colors flex items-center gap-2 shadow-sm"
              onClick={() => {
                // Track the click using our analytics service
                trackEvent(
                  "click",
                  "navigation",
                  "ABC Digital Agency Header Button",
                );
              }}
            >
              ABC Digital Agency <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
