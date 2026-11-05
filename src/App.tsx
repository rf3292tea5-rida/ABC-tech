import { lazy, Suspense, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from "@/layouts/MainLayout";
import { PageLoader } from "@/components/common/PageLoader";
import { AIAssistant } from "@/components/ai/AIAssistant";
import { AnalyticsProvider } from "@/components/analytics/AnalyticsProvider";
import { BookIntro } from "@/components/common/BookIntro";
import { HomePage } from "@/pages/Home/Home";
import { AuthProvider } from "@/Context/AuthContext";

// --- Auth Pages ---
const LoginPage = lazy(() =>
  import("@/pages/Login/Login").then((m) => ({ default: m.Login }))
);
const SignupPage = lazy(() =>
  import("@/pages/Signup/Sign").then((m) => ({ default: m.Signup }))
);

// --- Career Routes ---
const CareerPathsPage = lazy(() =>
  import("@/pages/CareerPaths/CareerPaths").then((m) => ({
    default: m.CareerPathsPage,
  }))
);
const CareerDetailsPage = lazy(() =>
  import("@/pages/CareerDetails/CareerDetails").then((m) => ({
    default: m.CareerDetailsPage,
  }))
);
const CareerFinderPage = lazy(() =>
  import("@/pages/CareerFinder/CareerFinder").then((m) => ({
    default: m.CareerFinderPage,
  }))
);

// --- Course Routes ---
const CoursesPage = lazy(() =>
  import("@/pages/Courses/Courses").then((m) => ({ default: m.CoursesPage }))
);
const CourseDetailsPage = lazy(() =>
  import("@/pages/CourseDetails/CourseDetails").then((m) => ({
    default: m.CourseDetailsPage,
  }))
);

// --- Project Routes ---
const ProjectsPage = lazy(() =>
  import("@/pages/Projects/Projects").then((m) => ({
    default: m.ProjectsPage,
  }))
);
const ProjectDetailsPage = lazy(() =>
  import("@/pages/ProjectDetails/ProjectDetails").then((m) => ({
    default: m.ProjectDetailsPage,
  }))
);

// --- Mentors ---
const MentorsPage = lazy(() =>
  import("@/pages/Mentors/Mentors").then((m) => ({ default: m.MentorsPage }))
);
const MentorDetailsPage = lazy(() =>
  import("@/pages/MentorDetails/MentorDetails").then((m) => ({
    default: m.MentorDetailsPage,
  }))
);

// --- Blog ---
const BlogPage = lazy(() =>
  import("@/pages/Blog/Blog").then((m) => ({ default: m.BlogPage }))
);
const BlogDetailsPage = lazy(() =>
  import("@/pages/BlogDetails/BlogDetails").then((m) => ({
    default: m.BlogDetailsPage,
  }))
);

// --- Others ---
const ResourcesPage = lazy(() =>
  import("@/pages/Resources/Resources").then((m) => ({
    default: m.ResourcesPage,
  }))
);
const CommunityPage = lazy(() =>
  import("@/pages/Community/Community").then((m) => ({
    default: m.CommunityPage,
  }))
);
const EnrollmentPage = lazy(() =>
  import("@/pages/Enrollment/Enrollment").then((m) => ({
    default: m.EnrollmentPage,
  }))
);
const ContactPage = lazy(() =>
  import("@/pages/Contact/Contact").then((m) => ({ default: m.ContactPage }))
);
const NotFoundPage = lazy(() =>
  import("@/pages/NotFound/NotFound").then((m) => ({
    default: m.NotFoundPage,
  }))
);
const PrivacyPage = lazy(() =>
  import("@/pages/Privacy/Privacy").then((m) => ({ default: m.PrivacyPage }))
);
const TermsPage = lazy(() =>
  import("@/pages/Terms/Terms").then((m) => ({ default: m.TermsPage }))
);
const AboutPage = lazy(() =>
  import("@/pages/About/About").then((m) => ({ default: m.AboutPage }))
);

function App() {
  const [showIntro, setShowIntro] = useState(
    sessionStorage.getItem("tech-abc-intro-played") !== "true"
  );

  return (
    <AuthProvider>
      <BrowserRouter>
        <AnalyticsProvider />
        
        {showIntro && <BookIntro onFinish={() => setShowIntro(false)} />}
        
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<HomePage />} />
              
              {/* Auth Routes */}
              <Route path="login" element={<LoginPage />} />
              <Route path="signup" element={<SignupPage />} />

              {/* Career Routes */}
              <Route path="careers" element={<CareerPathsPage />} />
              <Route path="careers/:id" element={<CareerDetailsPage />} />
              <Route path="find-your-path" element={<CareerFinderPage />} />

              {/* Course Routes */}
              <Route path="courses" element={<CoursesPage />} />
              <Route path="courses/:id" element={<CourseDetailsPage />} />

              {/* Project Routes */}
              <Route path="projects" element={<ProjectsPage />} />
              <Route path="projects/:id" element={<ProjectDetailsPage />} />

              {/* Mentors */}
              <Route path="mentors" element={<MentorsPage />} />
              <Route path="mentors/:id" element={<MentorDetailsPage />} />

              {/* Blog */}
              <Route path="blog" element={<BlogPage />} />
              <Route path="blog/:id" element={<BlogDetailsPage />} />

              {/* Others */}
              <Route path="resources" element={<ResourcesPage />} />
              <Route path="community" element={<CommunityPage />} />
              <Route path="enrollment" element={<EnrollmentPage />} />
              <Route path="contact" element={<ContactPage />} />
              <Route path="privacy" element={<PrivacyPage />} />
              <Route path="terms" element={<TermsPage />} />
              <Route path="about" element={<AboutPage />} />

              {/* 404 Not Found (Hamesha end mein rakho) */}
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </Suspense>
        
        <AIAssistant />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;