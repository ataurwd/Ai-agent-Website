# MASTER PROMPT — Build a Premium AI Agent SaaS Website

Act as a Senior SaaS Product Designer, Brand Strategist, UX Architect, Full-Stack Developer, and Technical SEO Specialist.

Your task is to research, plan, design, develop, and fully implement a production-quality marketing website for our existing AI Agent product.

This is an end-to-end implementation task. Do not stop after creating a plan, wireframe, or homepage. Complete the entire website, including all pages, responsive layouts, working forms, backend integration, SEO, and testing.

---

# 1. REFERENCE WEBSITES

Study these websites carefully before starting:

1. https://opsvianai.tech/
2. https://llmready.site/

Use them as the primary design and content-structure references.

Study:
- Navigation and header design.
- Hero section layouts.
- Typography and spacing.
- Product showcase sections.
- Feature presentation.
- Bento grid layouts.
- Dashboard mockups.
- AI workflow demonstrations.
- How-it-works sections.
- CTA placement.
- Footer structure.
- Responsive behavior.
- Animations and interactions.

IMPORTANT:
Do not copy their source code, branding, text, images, or exact layouts.

Create an original visual identity inspired by their quality, structure, and presentation.

Our website should feel like a premium, established AI SaaS company.

# 2. FIRST: UNDERSTAND OUR EXISTING AI AGENT

Before designing anything, inspect the entire available project workspace.

Look for:
- Existing AI agent source code.
- README and documentation.
- Agent instructions and configuration.
- API endpoints.
- Available tools and capabilities.
- Supported integrations.
- Agent execution workflow.
- User interaction patterns.
- Authentication and permissions.
- Existing UI or dashboard.
- Deployment and infrastructure information.

Your first responsibility is to understand what our AI agent actually does.

Create an internal product understanding based on the available source code and documentation.

Identify:
1. What problem does the AI agent solve?
2. Who are its target customers?
3. What tasks can it perform?
4. How does it receive instructions?
5. How does it process requests?
6. Which tools and services can it use?
7. What is its actual execution workflow?
8. What makes it different from traditional automation tools?
9. What benefits can we communicate to potential customers?

STRICT CONTENT RULES:

- Never invent unsupported capabilities.
- Never claim integrations that do not exist.
- Never invent performance statistics.
- Never fabricate customer testimonials or client logos.
- Never promise guaranteed business results.
- Do not describe planned features as currently available.
- Clearly distinguish existing capabilities from future possibilities.

If product information is incomplete, write professional, adaptable content without making false technical claims.

Do not stop implementation just because some business information is unavailable. Use clearly marked placeholders where necessary.

# 3. BRAND AND DESIGN DIRECTION

Create a unique brand identity for this AI agent product.

The website must communicate:

- Intelligence
- Automation
- Reliability
- Efficiency
- Professionalism
- Enterprise readiness
- Simplicity

Visual direction:

- Premium B2B SaaS website.
- Modern, minimal and sophisticated.
- Light-first design with dark navy/blue accents.
- Optional dark product showcase sections.
- Subtle gradients.
- Beautiful typography.
- Generous whitespace.
- Modern bento-style feature cards.
- Soft shadows and subtle borders.
- Smooth micro-interactions.
- High-quality dashboard visualizations.

Avoid:
- Generic AI-generated landing page appearance.
- Excessive gradients.
- Too many glowing elements.
- Unnecessary animations.
- Overcrowded layouts.
- Cartoon-style illustrations.
- Generic stock photos.
- Repetitive card layouts.

Use Lucide icons where appropriate.

Create original product visuals using CSS, SVG, and React components.

Do not depend on unavailable screenshots or assets from reference websites.

# 4. WEBSITE STRUCTURE

Build the following pages.

## PAGE 1: HOME (/)

This is the primary conversion page.

### A. Navigation
Create a sticky, responsive navbar.

Include:
- Logo and brand name.
- Product.
- How It Works.
- Use Cases.
- Integrations.
- Security.
- About.
- Contact.
- Primary CTA: "Request a Demo".

Use a modern dropdown menu where appropriate.

Mobile navigation must work perfectly.

### B. Hero Section

Create a powerful, conversion-focused hero section.

Include:
- Small announcement badge.
- Strong headline explaining the AI agent's primary value.
- Supporting description.
- Primary CTA: "Request a Demo".
- Secondary CTA: "Explore How It Works".
- Beautiful AI product visualization.

The headline must communicate the actual value of our AI agent, not generic AI marketing language.

The hero visual should look like a real software product interface.

### C. Problem Section

Explain the business problems that our AI agent actually addresses.

Use three or four well-designed problem cards.

Each card should have:
- Relevant icon.
- Short headline.
- Concise description.

### D. Solution Section

Explain how our AI agent solves those problems.

Use a visually engaging layout with text and product illustrations.

### E. How It Works Preview

Present the actual agent workflow in understandable steps.

For example, where supported by the codebase:

1. User provides an instruction.
2. Agent understands the request.
3. Agent processes the available context.
4. Agent selects the appropriate tools.
5. Agent performs permitted tasks.
6. User receives the result.

Adapt this sequence to the real implementation.

Create a visual workflow diagram.

### F. Core Features

Show the most important verified capabilities.

Use a modern bento grid.

Each feature should have:
- Title.
- Short description.
- Relevant icon.
- Small visual demonstration.
- Link to the relevant product detail section/page.

### G. Product Showcase

Create a large, premium product showcase section.

Display a realistic interface representing the actual AI agent.

Potential elements:
- Agent conversation interface.
- Task execution status.
- Tool activity.
- Workflow progress.
- Results and summaries.

Only show functionality supported by the real product. Any illustrative data must be clearly fictional.

### H. Use Cases Preview

Show relevant business scenarios based on actual agent capabilities.

### I. Why Choose Us

Explain the genuine advantages of our agent.

### J. Security and Trust Preview

Explain actual permissions, data handling and human oversight where supported.

Do not invent security certifications.

### K. FAQ

Create 6–8 useful questions and answers based on the actual product.

### L. Final CTA

A visually strong conversion section.

Headline example:

"Ready to put AI to work?"

Supporting text and a prominent "Request a Demo" button.

### M. Footer

Include:
- Logo and short brand description.
- Product navigation.
- Company navigation.
- Resources.
- Legal links.
- Contact information placeholders.
- Social links only if actual URLs are available.
- Copyright.

---

## PAGE 2: PRODUCT (/product)

Explain the AI agent in detail.

Sections:
- Product overview.
- What the agent does.
- Core capabilities.
- How users interact with it.
- Tools and execution capabilities.
- Task management and results.
- Product interface preview.
- Benefits.
- CTA.

Make this page informative rather than repeating the homepage.

## PAGE 3: HOW IT WORKS (/how-it-works)

Explain the entire AI agent lifecycle.

Include:
- Input and instruction handling.
- Understanding user intent.
- Context processing.
- Planning and reasoning.
- Tool selection.
- Execution.
- Result generation.
- Error handling and human review, where supported.

Create a beautiful step-by-step interactive workflow visualization.

Use animated connecting lines or nodes if appropriate.

A visitor should understand how the agent works without needing technical knowledge.

Also include a technical overview section for more technical visitors.

## PAGE 4: USE CASES (/use-cases)

Present relevant real-world use cases.

First determine which use cases our agent genuinely supports.

For each use case, explain:
- The problem.
- How the agent helps.
- The workflow.
- Expected operational benefits.

Use scenario-based visual cards.

Do not create unsupported use cases just to fill the page.

## PAGE 5: INTEGRATIONS (/integrations)

Show the actual supported integrations.

For each integration:
- Logo or appropriate icon.
- Integration name.
- What the agent can do with it.
- Relevant limitations, if any.

If the project does not have verified integrations, create an honest integrations overview without displaying fake partner logos or claiming compatibility.

## PAGE 6: SECURITY (/security)

Create a professional trust and security page.

Cover only verifiable information:
- Data handling.
- Access control.
- Permissions.
- Authentication.
- Human approval.
- Execution logs.
- Privacy.
- Infrastructure.

Where information is unavailable, use neutral language or clearly marked placeholders.

Never invent SOC 2, GDPR, ISO, or other certifications.

## PAGE 7: ABOUT (/about)

Create a professional company/product introduction.

Include:
- Mission.
- Vision.
- Why we are building this AI agent.
- Product philosophy.
- Contact CTA.

Do not invent founder names, company history, or employee information.

## PAGE 8: CONTACT (/contact)

Create a clean contact page.

Include:
- Short introduction.
- Contact form.
- Business inquiry information.
- Appropriate CTA.

The form should collect potential customer inquiries.

## PAGE 9: PRIVACY POLICY (/privacy-policy)

Create a professionally structured privacy policy draft.

Use placeholders for actual company identity, jurisdiction, data retention, and contact information where unknown.

Clearly flag this as a draft requiring business/legal review.

## PAGE 10: TERMS OF SERVICE (/terms)

Create a professional terms of service draft.

Do not invent company legal details. Use placeholders and mark it for legal review.

# 5. REQUEST A DEMO — MAIN CONVERSION FORM

This is one of the most important parts of the entire website.

Every primary CTA should lead to the Request Demo section or page.

Create a beautiful, modern form with the following fields:

Required:
- Full Name
- Work Email
- Company Name
- Job Title
- What are you interested in?

Optional:
- Company Website
- Team Size
- Additional Message

For the interest field, use options relevant to the actual product.

Form requirements:

1. Proper frontend validation.
2. Email format validation.
3. Required field validation.
4. Loading state while submitting.
5. Success notification.
6. Error notification.
7. Prevent duplicate submissions.
8. Responsive layout.
9. Spam protection using a suitable honeypot or equivalent.
10. Server-side validation.

EMAIL DELIVERY:

When a visitor submits the form, the information must be delivered to a designated company email address.

Preferred implementation:
- Use the existing email service if one is configured.
- Otherwise, implement Resend with a secure server-side API integration.
- Keep all credentials in environment variables.
- Never expose API keys in frontend code.

Environment variables:

RESEND_API_KEY=
LEAD_NOTIFICATION_EMAIL=
LEAD_FROM_EMAIL=

LEAD_NOTIFICATION_EMAIL will be the destination inbox.

The destination email is currently unknown. Keep it configurable instead of hardcoding an invented address.

Create a professional HTML email template containing:
- New inquiry notification.
- Visitor information.
- Company information.
- Selected interest.
- Message.
- Submission timestamp.

Also create an optional visitor confirmation email if the email provider configuration supports it.

Do not show a successful submission message unless the server confirms successful delivery or successful acceptance by the email provider.

Add clear setup instructions for configuring the email service.

# 6. TECHNOLOGY STACK

First inspect the existing project.

If a suitable framework and structure already exist, extend them instead of unnecessarily replacing the architecture.

If the workspace is empty, use:

Frontend:
- Next.js with App Router.
- React.
- TypeScript.
- Tailwind CSS.
- Framer Motion.
- Lucide React.

Backend:
- Next.js Route Handlers or Server Actions.
- Resend for email delivery.

Additional:
- Zod for validation.
- React Hook Form where useful.
- Reusable component architecture.

Use Server Components by default and Client Components only where interaction requires them.

Avoid unnecessary dependencies.

# 7. COMPONENT ARCHITECTURE

Create reusable components.

Suggested structure:

components/
  layout/
    Navbar
    Footer
    MobileNavigation

  sections/
    Hero
    ProblemSection
    SolutionSection
    FeaturesSection
    WorkflowSection
    ProductShowcase
    UseCasesSection
    SecuritySection
    FAQSection
    FinalCTA

  product/
    AgentDashboard
    AgentConversation
    WorkflowVisualization
    FeatureCard

  forms/
    DemoRequestForm
    ContactForm

  ui/
    Button
    Container
    SectionHeading
    Badge
    Input
    Select
    Textarea

Use a clean, maintainable architecture.

Avoid creating excessively large files.

Separate data, content, components, utilities and API logic.

# 8. CONTENT WRITING REQUIREMENTS

You are responsible for creating all website copy.

Write complete, professional, conversion-focused English content.

Do not use Lorem Ipsum.

Do not leave empty sections.

Content tone:
- Professional.
- Confident.
- Clear.
- Modern.
- Business-oriented.
- Technically credible.

Writing principles:
- Short and powerful headlines.
- Concise descriptions.
- Benefit-focused messaging.
- Avoid repetitive AI buzzwords.
- Explain technical features in simple language.
- Use consistent terminology throughout the website.

Generate all page content based on the actual AI agent.

If the product name is available in the existing project, use it.

Otherwise, create a configurable brand name placeholder and do not invent a final company identity.

# 9. ANIMATION AND INTERACTIONS

Implement tasteful interactions.

Required:
- Sticky navbar.
- Smooth scrolling.
- Mobile menu.
- Dropdown navigation.
- Hover states.
- Subtle scroll reveal animations.
- Animated workflow diagrams.
- Interactive feature elements where useful.
- FAQ accordion.
- Form feedback states.
- Smooth page transitions if appropriate.

Respect prefers-reduced-motion.

Avoid animations that affect performance or readability.

# 10. RESPONSIVE DESIGN

The website must be fully responsive.

Test:
- Desktop: 1440px.
- Laptop: 1280px.
- Tablet: 768px.
- Mobile: 390px.
- Small mobile: 360px.

Requirements:
- No horizontal overflow.
- Proper typography scaling.
- Mobile-friendly navigation.
- Correct card stacking.
- Proper spacing.
- Readable content.
- Functional CTA buttons.
- Usable form inputs.

Mobile experience must receive the same design attention as desktop.

# 11. SEO AND PERFORMANCE

Implement:

- Unique page titles.
- Meta descriptions.
- Open Graph metadata.
- Twitter metadata.
- Canonical URLs using a configurable production domain.
- Semantic HTML.
- Correct heading hierarchy.
- Descriptive image alt text.
- Sitemap.xml.
- Robots.txt.
- Favicon and brand metadata.
- Appropriate JSON-LD structured data.
- Internal linking.

Performance:
- Optimize images.
- Avoid unnecessary JavaScript.
- Use dynamic imports where beneficial.
- Avoid layout shifts.
- Use appropriate caching.
- Optimize font loading.

Target strong Lighthouse scores, especially for Performance, Accessibility, Best Practices and SEO.

# 12. ACCESSIBILITY

Follow WCAG 2.2 AA principles where practical.

Include:
- Keyboard navigation.
- Visible focus indicators.
- Accessible form labels.
- Proper contrast.
- Semantic buttons and links.
- ARIA attributes where necessary.
- Accessible dropdowns and accordions.

# 13. FINAL QUALITY ASSURANCE

After implementation:

1. Run the development server.
2. Check every page.
3. Test every navigation link.
4. Test all CTA buttons.
5. Test mobile navigation.
6. Test all form validation states.
7. Verify the server-side email submission flow.
8. Check console errors.
9. Check server errors.
10. Run TypeScript checks.
11. Run linting.
12. Run production build.
13. Fix all critical issues.
14. Verify responsive layouts.

Do not consider the task complete if the pages only look correct but the interactions do not work.

# 14. EXECUTION RULES

Work independently and make reasonable technical decisions.

Follow this order:

PHASE 1 — Inspect and understand the existing AI agent.

PHASE 2 — Establish product messaging, brand direction and sitemap.

PHASE 3 — Design the complete UI system.

PHASE 4 — Implement all pages and reusable components.

PHASE 5 — Implement the form and email backend.

PHASE 6 — Implement SEO, accessibility and performance optimizations.

PHASE 7 — Test and fix the entire website.

Do not stop to ask for approval after each phase.

Do not return only a plan or code snippets.

Actually create and modify the project files.

Do not overwrite existing project functionality without understanding its purpose.

If an essential business value is unknown, make it configurable and continue.

# 15. FINAL DELIVERY REPORT

After finishing, provide a concise report containing:

1. Completed pages.
2. Features implemented.
3. Technologies used.
4. Project folder structure.
5. Email integration setup instructions.
6. Required environment variables.
7. How to run locally.
8. How to deploy.
9. Any remaining business information that needs to be configured.
10. Testing results and any known limitations.

FINAL EXPECTATION:

Deliver a polished, original, premium AI Agent SaaS website that looks like a real established technology company.

The website must explain what our AI agent does, how it works, why businesses should use it, and make it easy for potential customers to request a demo.

Complete the entire implementation, not just the homepage.