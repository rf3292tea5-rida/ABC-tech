# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.


# Tech ABC - Education & Technology Career Platform

Tech ABC is a comprehensive, production-ready web platform designed to help users discover technology careers, learn required skills, build real-world projects, and receive mentorship. Our mission is to build the first digital skills ecosystem of Gilgit Baltistan.

##  Key Features

- **Interactive Career Finder:** A multi-step assessment that uses a pure-function recommendation engine to suggest personalized tech career paths.
- **AI Career Assistant:** A floating, context-aware chatbot that answers questions about careers, courses, and the platform (with a replaceable AI provider architecture).
- **Comprehensive Career Guides:** Detailed pages for 6+ tech careers, including skills, roadmaps, and prerequisites.
- **Project-Based Learning:** A catalog of real-world projects with step-by-step guides to build a professional portfolio.
- **Mentorship Network:** Connect with industry experts for personalized guidance.
- **Secure Backend:** Node.js/Express API with PostgreSQL database, Zod validation, and email integration.

## ️ Tech Stack

### Frontend
- **Framework:** React 18 + TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Routing:** React Router v6
- **Forms:** React Hook Form + Zod
- **Icons:** Lucide React

### Backend
- **Runtime:** Node.js + Express
- **Language:** TypeScript
- **Database:** PostgreSQL (via Prisma ORM)
- **Validation:** Zod (Shared schemas with frontend)
- **Email:** Resend

### Infrastructure & Tools
- **CMS:** Sanity (Ready for integration)
- **AI:** OpenAI API (Architecture supports swapping providers)
- **Analytics:** Google Analytics 4 (GA4) & Microsoft Clarity
- **Deployment:** Vercel (Frontend) & Railway/Render (Backend)
- **Version Control:** Git & GitHub

##  Project Architecture

```text
tech-abc/
├── src/                          # Frontend Source Code
│   ├── assets/                   # Static media (images, fonts)
│   ├── components/               # Reusable UI components
│   │   ├── common/               # Buttons, Cards, Inputs
│   │   ├── home/                 # Homepage sections
│   │   ├── ai/                   # AI Assistant UI
│   │   └── navigation/           # Header, Footer
│   ├── pages/                    # Route-level pages
│   ├── layouts/                  # Shared page wrappers
│   ├── hooks/                    # Custom React hooks (useSEO, etc.)
│   ├── services/                 # API clients & external integrations
│   ├── schemas/                  # Shared Zod validation schemas
│   ├── types/                    # TypeScript interfaces
│   ├── utils/                    # Pure helper functions
│   └── config/                   # Centralized constants & URLs
│
├── server/                       # Backend Source Code
│   ├── controllers/              # Request handlers
│   ├── routes/                   # API route definitions
│   ├── services/                 # Business logic (AI, Email)
│   ├── middleware/               # Error handling, CORS
│   └── config/                   # Prisma & Env setup
│
├── prisma/                       # Database schema & migrations
├── public/                       # Static assets (favicon, robots.txt)
├── .env.example                  # Environment variable template
├── vercel.json                   # Vercel deployment & security config
└── package.json                  # Frontend dependencies
