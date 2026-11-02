import { Outlet } from "react-router-dom";
import { Header } from "@/components/navigation/Header";
import { Footer } from "@/components/layout/Footer";
import { AIAssistant } from "@/components/ai/AIAssistant"; // <-- Import it
import { BackToTop } from "@/components/common/BackToTop"; // <-- Import it
import { AutoBreadcrumb } from "@/components/common/AutoBreadcrumb";

export function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-brand-background">
      <Header />
      <AutoBreadcrumb />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      {/* Add the AI Assistant here so it floats above everything */}
      <AIAssistant />
      <BackToTop /> {/* <-- Add it here */}
    </div>
  );
}
