import { useLocation, Link } from 'react-router-dom';
import { Home, ChevronRight } from 'lucide-react';

// Map of URL paths to friendly names
const pathLabels: Record<string, string> = {
  'careers': 'Careers',
  'courses': 'Courses',
  'projects': 'Projects',
  'mentors': 'Mentors',
  'blog': 'Blog',
  'resources': 'Resources',
  'community': 'Community',
  'about': 'About Us',
  'contact': 'Contact Us',
  'find-your-path': 'Career Finder',
  'privacy': 'Privacy Policy',
  'terms': 'Terms of Service',
  'enrollment': 'Enrollment'
};

export function AutoBreadcrumb() {
  const location = useLocation();
  
  // Split the URL into parts (e.g., "/careers/frontend" becomes ["careers", "frontend"])
  const pathnames = location.pathname.split('/').filter((x) => x);

  // Don't show breadcrumbs on the Homepage
  if (pathnames.length === 0) return null;

  return (
    <div className="bg-brand-surface border-b border-brand-border py-4">
      <div className="container mx-auto px-4 max-w-6xl">
        <nav className="flex items-center gap-2 text-sm text-brand-text flex-wrap" aria-label="Breadcrumb">
          
          {/* Home Link */}
          <Link to="/" className="flex items-center gap-1 hover:text-brand-primary transition-colors font-medium">
            <Home size={16} /> 
            <span className="hidden sm:inline">Home</span>
          </Link>

          {/* Dynamic Path Segments */}
          {pathnames.map((value, index) => {
            const to = `/${pathnames.slice(0, index + 1).join('/')}`;
            const isLast = index === pathnames.length - 1;
            
            // Get friendly name from map, or capitalize the URL slug
            const label = pathLabels[value] || value.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

            return (
              <div key={to} className="flex items-center gap-2">
                <ChevronRight size={14} className="text-brand-border" />
                {isLast ? (
                  // Current page (not clickable)
                  <span className="font-semibold text-brand-heading">{label}</span>
                ) : (
                  // Parent page (clickable)
                  <Link to={to} className="hover:text-brand-primary transition-colors font-medium">
                    {label}
                  </Link>
                )}
              </div>
            );
          })}
        </nav>
      </div>
    </div>
  );
}