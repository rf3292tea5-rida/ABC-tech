// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { MainLayout } from "@/layouts/MainLayout";
// import { HomePage } from "@/pages/Home/Home";
// import { CareerFinderPage } from "@/pages/CareerFinder/CareerFinder";
// import { CareerPathsPage } from "@/pages/CareerPaths/CareerPaths"; // <-- NEW
// import { CareerDetailsPage } from "@/pages/CareerDetails/CareerDetails";
// import { CoursesPage } from "@/pages/Courses/Courses";
// import { CourseDetailsPage } from "@/pages/CourseDetails/CourseDetails";
// import { ProjectsPage } from "@/pages/Projects/Projects";
// import { ProjectDetailsPage } from "@/pages/ProjectDetails/ProjectDetails"; // <-- NEW
// import { MentorsPage } from "@/pages/Mentors/Mentors";
// import { MentorDetailsPage } from "@/pages/MentorDetails/MentorDetails"; // NEW
// import { BlogPage } from "@/pages/Blog/Blog"; // NEW
// import { BlogDetailsPage } from "@/pages/BlogDetails/BlogDetails"; // NEW
// import { ResourcesPage } from "@/pages/Resources/Resources"; // NEW
// import { CommunityPage } from "@/pages/Community/Community"; // NEW
// import { EnrollmentPage } from "@/pages/Enrollment/Enrollment"; // NEW
// import { ContactPage } from "@/pages/Contact/Contact";
// import { NotFoundPage } from "@/pages/NotFound/NotFound";
// import { AnalyticsProvider } from "@/components/analytics/AnalyticsProvider";
// import { PrivacyPage } from "@/pages/Privacy/Privacy";
// import { TermsPage } from "@/pages/Terms/Terms";
// import { AboutPage } from "@/pages/About/About";

// function App() {
//   return (
//     <BrowserRouter>
//       <AnalyticsProvider /> {/* <-- Add this right inside BrowserRouter */}
//       <Routes>
//         <Route path="/" element={<MainLayout />}>
//           <Route index element={<HomePage />} />
//           {/* Career Routes */}
//           <Route path="careers" element={<CareerPathsPage />} /> {/* <-- NEW */}
//           <Route path="careers/:id" element={<CareerDetailsPage />} />
//           <Route path="find-your-path" element={<CareerFinderPage />} />
//           {/* Course Routes */}
//           <Route path="courses" element={<CoursesPage />} />
//           <Route path="courses/:id" element={<CourseDetailsPage />} />
//           {/* Project Routes */}
//           <Route path="projects" element={<ProjectsPage />} />
//           <Route path="projects/:id" element={<ProjectDetailsPage />} />
//           {/* Other Routes */}
//           <Route path="mentors" element={<MentorsPage />} />
//           <Route path="mentors/:id" element={<MentorDetailsPage />} />{" "}
//           {/* NEW */}
//           <Route path="blog" element={<BlogPage />} /> {/* NEW */}
//           <Route path="blog/:id" element={<BlogDetailsPage />} /> {/* NEW */}
//           <Route path="resources" element={<ResourcesPage />} /> {/* NEW */}
//           <Route path="community" element={<CommunityPage />} /> {/* NEW */}
//           <Route path="enrollment" element={<EnrollmentPage />} /> {/* NEW */}
//           <Route path="contact" element={<ContactPage />} />
//           <Route path="*" element={<NotFoundPage />} />
//           <Route path="privacy" element={<PrivacyPage />} />
//           <Route path="terms" element={<TermsPage />} />
//           <Route path="about" element={<AboutPage />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

import { lazy, Suspense, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from "@/layouts/MainLayout";
import { PageLoader } from "@/components/common/PageLoader";
import { AIAssistant } from "@/components/ai/AIAssistant";
import { AnalyticsProvider } from "@/components/analytics/AnalyticsProvider";
import { BookIntro } from "@/components/common/BookIntro";
import { HomePage } from "@/pages/Home/Home";

// Lazy load the pages (React will only fetch these when needed)
// const HomePage = lazy(() =>
//   import("@/pages/Home/Home").then((m) => ({ default: m.HomePage })),
// );
const CareerPathsPage = lazy(() =>
  import("@/pages/CareerPaths/CareerPaths").then((m) => ({
    default: m.CareerPathsPage,
  })),
);
const CareerDetailsPage = lazy(() =>
  import("@/pages/CareerDetails/CareerDetails").then((m) => ({
    default: m.CareerDetailsPage,
  })),
);
const CareerFinderPage = lazy(() =>
  import("@/pages/CareerFinder/CareerFinder").then((m) => ({
    default: m.CareerFinderPage,
  })),
);
const CoursesPage = lazy(() =>
  import("@/pages/Courses/Courses").then((m) => ({ default: m.CoursesPage })),
);
const CourseDatailsPage = lazy(() =>
  import("@/pages/CourseDetails/CourseDetails").then((m) => ({
    default: m.CourseDetailsPage,
  })),
);
const ProjectsPage = lazy(() =>
  import("@/pages/Projects/Projects").then((m) => ({
    default: m.ProjectsPage,
  })),
);
const ProjectDatailsPage = lazy(() =>
  import("@/pages/ProjectDetails/ProjectDetails").then((m) => ({
    default: m.ProjectDetailsPage,
  })),
);
const MentorsPage = lazy(() =>
  import("@/pages/Mentors/Mentors").then((m) => ({ default: m.MentorsPage })),
);
const MentorDetailsPage = lazy(() =>
  import("@/pages/MentorDetails/MentorDetails").then((m) => ({
    default: m.MentorDetailsPage,
  })),
);
const BlogPage = lazy(() =>
  import("@/pages/Blog/Blog").then((m) => ({ default: m.BlogPage })),
);
const BlogDetailsPage = lazy(() =>
  import("@/pages/BlogDetails/BlogDetails").then((m) => ({
    default: m.BlogDetailsPage,
  })),
);
const ResourcesPage = lazy(() =>
  import("@/pages/Resources/Resources").then((m) => ({
    default: m.ResourcesPage,
  })),
);
const CommunityPage = lazy(() =>
  import("@/pages/Community/Community").then((m) => ({
    default: m.CommunityPage,
  })),
);
const EnrollmentPage = lazy(() =>
  import("@/pages/Enrollment/Enrollment").then((m) => ({
    default: m.EnrollmentPage,
  })),
);
const ContactPage = lazy(() =>
  import("@/pages/Contact/Contact").then((m) => ({ default: m.ContactPage })),
);
const NotFoundPage = lazy(() =>
  import("@/pages/NotFound/NotFound").then((m) => ({
    default: m.NotFoundPage,
  })),
);
const PrivacyPage = lazy(() =>
  import("@/pages/Privacy/Privacy").then((m) => ({ default: m.PrivacyPage })),
);
const TermsPage = lazy(() =>
  import("@/pages/Terms/Terms").then((m) => ({ default: m.TermsPage })),
);
const AboutPage = lazy(() =>
  import("@/pages/About/About").then((m) => ({ default: m.AboutPage })),
);
// Add the rest of your pages here following the same pattern...

function App() {
  // Check if the book has already played in this browser session
  const [showIntro, setShowIntro] = useState(
    sessionStorage.getItem('tech-abc-intro-played') !== 'true'
  );
  return (
    <BrowserRouter>
      <AnalyticsProvider />
      {showIntro && <BookIntro onFinish={() => setShowIntro(false)} />}
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="careers" element={<CareerPathsPage />} />
            <Route path="careers/:id" element={<CareerDetailsPage />} />
            <Route path="find-your-path" element={<CareerFinderPage />} />
            <Route path="courses" element={<CoursesPage />} />
            <Route path="courses/:id" element={<CourseDatailsPage />} />
            <Route path="projects" element={<ProjectsPage />} />
            <Route path="projects/:id" element={<ProjectDatailsPage />} />
            <Route path="mentors" element={<MentorsPage />} />
            <Route path="mentors/:id" element={<MentorDetailsPage />} />
            <Route path="blog" element={<BlogPage />} />
            <Route path="blog/:id" element={<BlogDetailsPage />} />
            <Route path="resources" element={<ResourcesPage />} />
            <Route path="community" element={<CommunityPage />} />
            <Route path="enrollment" element={<EnrollmentPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
            <Route path="privacy" element={<PrivacyPage />} />
            <Route path="terms" element={<TermsPage />} />
            <Route path="about" element={<AboutPage />} />
          </Route>
        </Routes>
      </Suspense>
      <AIAssistant />
    </BrowserRouter>
  );
}

export default App;
