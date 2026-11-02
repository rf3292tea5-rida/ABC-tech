import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-6xl font-heading font-bold text-brand-primary mb-4">
        404
      </h1>
      <h2 className="text-2xl font-semibold text-brand-heading mb-4">
        Page Not Found
      </h2>
      <p className="text-brand-text mb-8">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="bg-brand-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-primaryDark transition-colors"
      >
        Go Back Home
      </Link>
    </div>
  );
}
