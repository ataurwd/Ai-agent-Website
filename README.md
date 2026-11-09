# Opsvian AI — Autonomous Operations & Workflow AI Agent Website

A production-quality, frontend-only marketing website for **Opsvian AI**, an enterprise autonomous AI agent for cloud operations, incident triage, and engineering workflow automation.

---

## ⚡ Architecture: 100% Frontend-Only

This website is designed strictly as a **frontend-only client architecture**:
- **NO** custom backend server
- **NO** backend API routes (`app/api/*`)
- **NO** Next.js Server Actions (`"use server"`)
- **NO** database (SQL, NoSQL, ORM)
- **NO** authentication or admin dashboard
- **NO** custom email server or Resend credentials

All form submissions (Demo Requests and Contact inquiries) are handled directly from the client browser through **Formspree** via encrypted HTTPS.

---

## 🚀 Formspree Email Integration Setup

Follow these 4 simple steps to connect form submissions directly to your company email inbox:

### Step 1: Create a Formspree Account
1. Visit [https://formspree.io](https://formspree.io) and sign up for a free or team account.

### Step 2: Create a Form & Set the Destination Email
1. Click **+ New Form** in your Formspree dashboard.
2. Enter a form name (e.g., `Opsvian AI - Demo Inquiries`).
3. Set your target recipient email (e.g., `sales@yourcompany.com` or `leads@yourcompany.com`).
4. Click **Create Form**.

### Step 3: Obtain Your Form ID
Your Formspree endpoint URL looks like:
```text
https://formspree.io/f/xpznkewq
```
The 8-character string at the end (`xpznkewq`) is your **Form ID**.

### Step 4: Configure the Website Environment
Create or edit your `.env.local` file in the root of the project:

```bash
NEXT_PUBLIC_FORMSPREE_FORM_ID=your_form_id_here
```

Restart the Next.js development server:
```bash
npm run dev
```

### 🛡️ Built-in Security & Spam Protection
- **Honeypot protection**: All forms include a hidden `_gotcha` honeypot field to automatically neutralize automated spam bots.
- **Client-side validation**: Touch-based validation with accessible live announcements, email format enforcement, and corporate email domain checks.
- **Double-submission lock**: Form buttons are disabled during active submission and debounced to prevent duplicate leads.
- **Development preview fallback**: If `NEXT_PUBLIC_FORMSPREE_FORM_ID` is empty or not yet configured, the forms operate in development preview mode (logs payload to console and displays clear instructions). Real email delivery occurs immediately once a valid Form ID is supplied.

---

## 📁 Project Structure

```text
ai Agent website/
├── .env.local.example       # Environment variable template
├── .env.local               # Local environment configuration
├── package.json             # Scripts & dependencies
├── tsconfig.json            # TypeScript configuration
├── tailwind.config.ts       # Tailwind CSS theme & tokens
├── postcss.config.js        # PostCSS configuration
├── next.config.mjs          # Next.js configuration (frontend-only)
├── plan.md                  # Master prompt specification
├── README.md                # Project documentation & setup guide
└── src/
    ├── app/
    │   ├── layout.tsx       # Root layout with metadata, fonts, header & footer
    │   ├── page.tsx         # Page 1: Home (primary conversion landing page)
    │   ├── product/page.tsx # Page 2: Product Architecture & 5-Layer Stack
    │   ├── how-it-works/page.tsx # Page 3: How It Works & 6-Stage Lifecycle
    │   ├── use-cases/page.tsx    # Page 4: Real-World Enterprise Use Cases
    │   ├── integrations/page.tsx # Page 5: Tool & Cloud Integrations (MCP)
    │   ├── security/page.tsx     # Page 6: Trust, Guardrails & Security Model
    │   ├── about/page.tsx        # Page 7: Mission, Vision & Engineering Values
    │   ├── contact/page.tsx      # Page 8: Contact Form & Inquiry Channels
    │   ├── request-demo/page.tsx # Page 9: Dedicated Demo Request Conversion Portal
    │   ├── privacy-policy/page.tsx # Page 10: Privacy Policy Draft
    │   ├── terms/page.tsx        # Page 11: Terms of Service Draft
    │   ├── sitemap.ts       # Dynamic XML sitemap generator
    │   ├── robots.ts        # Robots.txt generator
    │   └── globals.css      # Design tokens, accessibility focus rings, styles
    ├── components/
    │   ├── ui/
    │   │   ├── Button.tsx   # Accessible button with loading states
    │   │   ├── Badge.tsx    # Semantic pill badges
    │   │   ├── Container.tsx# Responsive container wrapper
    │   │   └── SectionHeading.tsx # Standardized section titles
    │   ├── layout/
    │   │   ├── Navbar.tsx   # Sticky responsive navbar with mobile drawer
    │   │   └── Footer.tsx   # Comprehensive footer with Formspree live badge
    │   ├── forms/
    │   │   ├── DemoRequestForm.tsx # Conversion form with Formspree integration
    │   │   └── ContactForm.tsx     # General contact form with Formspree
    │   ├── product/
    │   │   ├── AgentDashboard.tsx  # High-fidelity interactive agent console
    │   │   ├── WorkflowVisualization.tsx # Interactive 6-stage lifecycle visualizer
    │   │   └── FeatureCard.tsx     # Bento grid feature card component
    │   └── sections/
    │       ├── Hero.tsx
    │       ├── ProblemSection.tsx
    │       ├── SolutionSection.tsx
    │       ├── FeaturesSection.tsx
    │       ├── ProductShowcase.tsx
    │       ├── UseCasesSection.tsx
    │       ├── SecuritySection.tsx
    │       ├── FAQSection.tsx
    │       └── FinalCTA.tsx
    ├── config/
    │   └── site.ts          # Centralized configuration (brand, copy, data)
    ├── lib/
    │   ├── formspree.ts     # Client-side Formspree submission engine
    │   └── utils.ts         # Class name merger (cn)
    └── types/
        └── index.ts         # TypeScript definitions
```

---

## 💻 How to Run Locally

### 1. Install Dependencies
```bash
yarn install --ignore-optional
# or
npm install
```

### 2. Configure Environment
```bash
cp .env.local.example .env.local
```
Add your Formspree Form ID:
```bash
NEXT_PUBLIC_FORMSPREE_FORM_ID=your_form_id
```

### 3. Start Development Server
```bash
npm run dev
# or
yarn dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production
```bash
npm run build
npm run start
```

---

## 🌐 Deployment

Because this project is 100% frontend-only with zero custom backends or databases, it can be deployed seamlessly to:
- **Vercel**: Push to Git and import into Vercel. Set `NEXT_PUBLIC_FORMSPREE_FORM_ID` in Project Environment Variables.
- **Netlify**: Connect your repository, set build command `npm run build` and publish directory `.next`.
- **Cloudflare Pages / AWS Amplify / Static Host**: Compatible with any modern edge or static hosting platform.

---

## 🔒 Security & Privacy Notice
All legal policy pages (`/privacy-policy` and `/terms`) are structured drafts with clearly designated placeholders (e.g., `[Opsvian Technologies Inc.]`, `[Jurisdiction]`) marked for corporate legal counsel review.
