import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-brand-primaryDark text-gray-300 py-12 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <h3 className="text-white font-heading font-bold text-xl mb-4">Tech ABC</h3>
            <p className="text-gray-400 max-w-sm">
              Build Skills. Build Projects. Build Your Career. We help you find where you belong in technology and give you a path to get there.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Platform</h4>
            <ul className="space-y-2">
              <li><Link to="/careers" className="hover:text-brand-accent transition-colors">Career Paths</Link></li>
              <li><Link to="/courses" className="hover:text-brand-accent transition-colors">Courses</Link></li>
              <li><Link to="/mentors" className="hover:text-brand-accent transition-colors">Mentors</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="hover:text-brand-accent transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-brand-accent transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-brand-primary pt-8 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Tech ABC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}