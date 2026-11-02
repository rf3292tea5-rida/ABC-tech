export function PageLoader() {
  return (
    <div className="min-h-screen bg-brand-surface p-8 max-w-6xl mx-auto animate-pulse">
      {/* Fake Header */}
      <div className="flex justify-between items-center mb-12">
        <div className="w-32 h-8 bg-brand-border rounded-md"></div>
        <div className="flex gap-4">
          <div className="w-20 h-8 bg-brand-border rounded-md"></div>
          <div className="w-20 h-8 bg-brand-border rounded-md"></div>
          <div className="w-20 h-8 bg-brand-border rounded-md"></div>
        </div>
      </div>

      {/* Fake Hero Section */}
      <div className="text-center mb-16">
        <div className="w-48 h-6 bg-brand-border rounded-full mx-auto mb-6"></div>
        <div className="w-3/4 h-12 bg-brand-border rounded-lg mx-auto mb-4"></div>
        <div className="w-1/2 h-6 bg-brand-border rounded-lg mx-auto mb-8"></div>
        <div className="flex justify-center gap-4">
          <div className="w-32 h-12 bg-brand-border rounded-lg"></div>
          <div className="w-32 h-12 bg-brand-border rounded-lg"></div>
        </div>
      </div>

      {/* Fake Cards Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-brand-background border border-brand-border rounded-xl p-6 h-64">
            <div className="w-12 h-12 bg-brand-border rounded-lg mb-4"></div>
            <div className="w-3/4 h-6 bg-brand-border rounded mb-2"></div>
            <div className="w-full h-4 bg-brand-border rounded mb-2"></div>
            <div className="w-1/2 h-4 bg-brand-border rounded"></div>
          </div>
        ))}
      </div>
    </div>
  );
}