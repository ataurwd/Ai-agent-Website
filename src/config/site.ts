import { NavItem, FeatureItem, UseCaseItem, IntegrationItem, FAQItem } from "@/types";

export const siteConfig = {
  name: "Opsvian AI",
  shortName: "Opsvian",
  tagline: "Autonomous Workflow & Cloud Operations AI Agent",
  description:
    "Opsvian AI is an enterprise-grade autonomous operations agent that understands instructions, coordinates across your dev & cloud tools, verifies actions with deterministic guardrails, and solves complex workflows with human oversight.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://opsvian.ai",
  ogImage: "/og-image.png",
  formspree: {
    formId: process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID || "",
    endpoint: (id?: string) => `https://formspree.io/f/${id || process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID || ""}`,
    isConfigured: () => Boolean(process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID && process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID.trim().length > 0),
  },
  contact: {
    email: "contact@opsvian.ai", // Placeholder - configurable
    salesEmail: "sales@opsvian.ai",
    supportEmail: "support@opsvian.ai",
    location: "San Francisco, CA & Global Remote",
    hours: "Monday – Friday: 9am – 6pm EST",
    responseExpectation: "Within 1 business day",
  },
  social: {
    github: "https://github.com",
    twitter: "https://twitter.com",
    linkedin: "https://linkedin.com",
  },
  nav: [
    { title: "Product", href: "/product" },
    { title: "How It Works", href: "/how-it-works" },
    { title: "Use Cases", href: "/use-cases" },
    { title: "Integrations", href: "/integrations" },
    { title: "Security", href: "/security" },
    { title: "About", href: "/about" },
    { title: "Contact", href: "/contact" },
  ] as NavItem[],
};

export const problemsData = [
  {
    id: "cognitive-fatigue",
    title: "Context Switching & Cognitive Fatigue",
    description:
      "Engineering and operations teams waste up to 40% of their day toggling between cloud consoles, CI/CD logs, telemetry dashboards, and incident channels.",
    icon: "Layers",
    metric: "40% lost engineering velocity",
  },
  {
    id: "slow-incidents",
    title: "Lagging Incident Triage & Response",
    description:
      "When a critical pipeline or service breaks, gathering diagnostic context from five disparate systems consumes vital minutes before root-cause analysis can even begin.",
    icon: "Clock",
    metric: "45 min average context-gathering time",
  },
  {
    id: "fragile-scripts",
    title: "Brittle Automation & Broken Glue Code",
    description:
      "Traditional cron jobs, custom bash scripts, and rigid webhook rules constantly break when upstream APIs, schemas, or network states change.",
    icon: "Code2",
    metric: "Frequent script maintenance burden",
  },
  {
    id: "black-box-risks",
    title: "Fear of Unsupervised AI Hallucinations",
    description:
      "Enterprises cannot risk autonomous bots executing destructive production mutations without policy checks, least-privilege scoping, and human approval gates.",
    icon: "ShieldAlert",
    metric: "Zero tolerance for unverified actions",
  },
];

export const solutionsData = [
  {
    id: "autonomous-reasoning",
    title: "Adaptive Multi-Step Reasoning",
    description:
      "Opsvian decomposes complex operational goals into discrete, verified execution stages. It reasons over environmental feedback and self-corrects without breaking.",
    icon: "Cpu",
  },
  {
    id: "tool-ecosystem",
    title: "Native Cloud & Developer Tooling",
    description:
      "Directly orchestrates your existing stack — querying databases, reviewing GitHub pull requests, inspecting Kubernetes pods, and triggering build pipelines safely.",
    icon: "Boxes",
  },
  {
    id: "human-in-the-loop",
    title: "Deterministic Guardrails & Human Approval",
    description:
      "Every mutation requires explicit policy validation. High-impact operations halt automatically and request human confirmation with full context.",
    icon: "UserCheck",
  },
  {
    id: "traceable-audit",
    title: "Immutable Observability & Replay",
    description:
      "Every step, thought, tool invocation, and API payload is recorded in a tamper-proof audit trail for immediate transparency and post-mortem review.",
    icon: "FileCheck",
  },
];

export const workflowStepsData = [
  {
    step: 1,
    title: "User Submits Instruction",
    summary: "Natural language command or automated trigger",
    detail:
      "An engineer provides an instruction via Slack, CLI, or web interface (e.g., 'Diagnose the memory spike on payment-service-worker and propose a fix').",
    badge: "Input Stage",
    icon: "MessageSquareCode",
  },
  {
    step: 2,
    title: "Intent Parsing & Context Synthesis",
    summary: "Deconstructs request into verifiable sub-goals",
    detail:
      "The agent analyzes current service topology, reads active alerts, parses logs, and constructs an execution DAG (Directed Acyclic Graph).",
    badge: "Analysis Stage",
    icon: "BrainCircuit",
  },
  {
    step: 3,
    title: "Tool & Environment Sandboxing",
    summary: "Selects scoped tools with least privilege",
    detail:
      "Opsvian connects to permitted integrations using temporary, scoped credentials. Read-only tools execute instantly; mutation tools check policy.",
    badge: "Orchestration Stage",
    icon: "Wrench",
  },
  {
    step: 4,
    title: "Deterministic Guardrail Check",
    summary: "Validates actions against safety policies",
    detail:
      "Before any state modification, the agent runs policy checks. If the impact exceeds defined risk thresholds, it pauses and notifies the designated reviewer.",
    badge: "Safety Gate",
    icon: "ShieldCheck",
  },
  {
    step: 5,
    title: "Autonomous Execution & Feedback Loop",
    summary: "Applies remediations and observes outcomes",
    detail:
      "Executes the action, monitors telemetry for anomalies, and verifies whether the system has returned to the desired operational baseline.",
    badge: "Execution Stage",
    icon: "Terminal",
  },
  {
    step: 6,
    title: "Comprehensive Report & Audit Delivery",
    summary: "Full summary delivered to team channels",
    detail:
      "Outputs a clean summary of findings, actions taken, latency differentials, and follow-up recommendations directly to your incident channel.",
    badge: "Completion",
    icon: "CheckCircle2",
  },
];

export const featuresData: FeatureItem[] = [
  {
    id: "multi-step-planning",
    title: "Multi-Step Autonomous Planning",
    description: "Formulates resilient execution plans with dynamic branching based on live runtime feedback.",
    iconName: "GitMerge",
    badge: "Core Engine",
    category: "reasoning",
    bullets: [
      "Directed Acyclic Graph (DAG) task generation",
      "Dynamic error recovery and fallback pathways",
      "Context-aware token and budget management",
    ],
  },
  {
    id: "tool-orchestration",
    title: "Extensible Tool & API Orchestration",
    description: "Plug-and-play integrations with cloud providers, git repositories, databases, and monitoring services.",
    iconName: "Workflow",
    badge: "Interoperability",
    category: "tools",
    bullets: [
      "Standardized Model Context Protocol (MCP) support",
      "Strict input/output JSON schema validation",
      "Rate-limit and backoff handling built-in",
    ],
  },
  {
    id: "human-approval",
    title: "Human-in-the-Loop Confirmation Gates",
    description: "Ensure autonomous action never runs unchecked on sensitive production infrastructure.",
    iconName: "ShieldAlert",
    badge: "Governance",
    category: "security",
    bullets: [
      "Slack/Email/Web interactive approval cards",
      "Granular mutation policies by environment (Dev, Staging, Prod)",
      "Time-limited approval tokens with automatic expiry",
    ],
  },
  {
    id: "audit-logging",
    title: "Tamper-Proof Audit & Execution History",
    description: "Complete visibility into every decision, prompt, tool parameter, and API response.",
    iconName: "FileSpreadsheet",
    badge: "Observability",
    category: "observability",
    bullets: [
      "Full JSON-structured execution transcripts",
      "Diff visualization for code and configuration changes",
      "Exportable compliance records for internal audit teams",
    ],
  },
  {
    id: "ephemeral-sandbox",
    title: "Isolated Ephemeral Execution Sandboxes",
    description: "Execute CLI commands, unit tests, and diagnostic scripts in secured, isolated containers.",
    iconName: "Box",
    badge: "Security",
    category: "security",
    bullets: [
      "Zero persistent state leakage between tasks",
      "Network egress restrictions and credential scrubbing",
      "Strict CPU and memory resource quotas",
    ],
  },
  {
    id: "context-memory",
    title: "Hierarchical Architecture & Context Memory",
    description: "Retains organizational context, service runbooks, and past incident outcomes without bloating prompt windows.",
    iconName: "Database",
    badge: "Intelligence",
    category: "reasoning",
    bullets: [
      "Vector-indexed runbook retrieval",
      "Service dependency graph caching",
      "Continuous learning from approved human feedback",
    ],
  },
];

export const useCasesData: UseCaseItem[] = [
  {
    id: "cloud-incident-triage",
    title: "Automated Cloud Incident Triage & Remediation",
    tagline: "Cut MTTR by diagnosing errors and proposing fixes within seconds of an alert.",
    category: "devops",
    problem:
      "When a microservice triggers a P1 alert at 3 AM, on-call engineers must piece together logs from CloudWatch, metrics from Datadog, and recent commit history from GitHub, losing 30+ minutes while user requests fail.",
    solution:
      "Opsvian automatically intercepts the PagerDuty alert, queries metrics, identifies the failing container pod, retrieves the crash stack trace, maps it to a recent deployment diff, and posts a prioritized remediation pull request for human sign-off.",
    steps: [
      { title: "Alert Ingestion", detail: "Listens to webhook alerts from monitoring or APM tools." },
      { title: "Metric Cross-Correlation", detail: "Queries telemetry to isolate memory, CPU, or network anomalies." },
      { title: "Root-Cause Identification", detail: "Compares current error traces with deployment history." },
      { title: "Remediation Proposal", detail: "Generates rollback or hotfix script awaiting 1-click human approval." },
    ],
    operationalBenefits: [
      "Reduction in mean time to acknowledge (MTTA) to under 15 seconds",
      "Consistent diagnostic runbook execution without human error",
      "On-call engineers receive actionable solutions rather than raw alerts",
    ],
  },
  {
    id: "data-pipeline-sync",
    title: "Data Pipeline Integrity & Schema Validation",
    tagline: "Detect upstream schema breaks and heal synchronization jobs automatically.",
    category: "data",
    problem:
      "Data teams struggle with broken analytics syncs whenever product engineers alter database table definitions or third-party CRM APIs update their response payloads without warning.",
    solution:
      "Opsvian continuously validates incoming payloads against expected contracts, pinpoints missing or altered attributes, and generates backward-compatible migration transforms without stalling downstream dashboards.",
    steps: [
      { title: "Anomaly Detection", detail: "Detects schema drift or transformation failures in ETL pipelines." },
      { title: "Payload Inspection", detail: "Compares new field signatures against historical schemas." },
      { title: "Transformation Synthesis", detail: "Constructs safe mapping bridges or defaults." },
      { title: "Validation Test Run", detail: "Simulates test batch in a sandboxed staging run." },
    ],
    operationalBenefits: [
      "Zero silent data corruption in business intelligence warehouses",
      "Elimination of repetitive manual schema patch tickets",
      "Full audit trail of all auto-remediated data transformations",
    ],
  },
  {
    id: "security-compliance-audit",
    title: "Continuous Security Policy & Audit Evidence Gathering",
    tagline: "Autonomous verification of least-privilege policies, open ports, and cloud posture.",
    category: "security",
    problem:
      "Compliance and DevOps engineers spend hundreds of hours manually gathering screenshots, IAM permission dumps, and S3 bucket ACL configurations for quarterly security reviews.",
    solution:
      "Opsvian runs scheduled non-invasive inspection agents across infrastructure assets, flags over-permissioned service accounts, and formats verifiable evidence reports mapped directly to your internal security baseline.",
    steps: [
      { title: "Asset Discovery", detail: "Catalogs cloud instances, IAM roles, and storage permissions." },
      { title: "Policy Evaluation", detail: "Evaluates posture against defined least-privilege standards." },
      { title: "Drift Notification", detail: "Alerts security leads when public access or over-scoping occurs." },
      { title: "Evidence Compilation", detail: "Generates timestamped reports ready for internal security reviews." },
    ],
    operationalBenefits: [
      "90% reduction in manual evidence collection effort",
      "Instant detection of misconfigured cloud buckets and orphaned API keys",
      "Verifiable historical audit record for every infrastructure asset",
    ],
  },
  {
    id: "dev-workflow-automation",
    title: "Developer Workflow & Dependency Maintenance",
    tagline: "Automate routine dependency bumps, test flake triaging, and PR conflict resolution.",
    category: "support",
    problem:
      "Developers lose hours weekly resolving minor package updates, triaging flaky test suites, and formatting boilerplate pull request documentation.",
    solution:
      "Opsvian branches your repository in a secure sandbox, runs the test suite, isolates test flakes with iterative reruns, applies semantic version bumps, and generates descriptive PRs with changelog summaries.",
    steps: [
      { title: "Scheduled Scan", detail: "Checks package registries for patch and minor security advisories." },
      { title: "Isolated Test Execution", detail: "Runs builds and test suites in ephemeral containers." },
      { title: "Regression Analysis", detail: "Verifies zero regressions before opening review requests." },
      { title: "PR Submission", detail: "Creates cleanly formatted PRs with comprehensive changelog documentation." },
    ],
    operationalBenefits: [
      "Always-updated dependencies without developer distraction",
      "Consistent PR descriptions and test evidence attachments",
      "Faster merge velocity across enterprise microservice repos",
    ],
  },
];

export const integrationsData: IntegrationItem[] = [
  {
    id: "aws",
    name: "Amazon Web Services (AWS)",
    category: "cloud",
    description: "Read metrics, query CloudWatch logs, inspect ECS/EKS clusters, and manage scoped resources via IAM roles.",
    status: "Supported",
    capabilities: ["CloudWatch Logs & Metrics", "ECS / EKS Cluster Inspection", "IAM Role Least-Privilege Scoping", "S3 Bucket Policy Auditing"],
  },
  {
    id: "gcp",
    name: "Google Cloud Platform (GCP)",
    category: "cloud",
    description: "Integrate with Google Cloud Run, Cloud Logging, BigQuery, and Cloud Monitoring via Workload Identity.",
    status: "Supported",
    capabilities: ["Cloud Logging & Trace", "Cloud Run Service Health", "BigQuery Diagnostics", "Service Account Key Rotation"],
  },
  {
    id: "github",
    name: "GitHub & GitHub Actions",
    category: "developer",
    description: "Inspect pull requests, check CI/CD workflow runs, post diagnostic comments, and propose code patches.",
    status: "Plug & Play",
    capabilities: ["Pull Request Creation & Review", "Workflow Run Log Inspection", "Issue Triage & Labeling", "Commit Diff Analysis"],
  },
  {
    id: "gitlab",
    name: "GitLab",
    category: "developer",
    description: "Connect to GitLab CI/CD pipelines, merge requests, and repository issue boards.",
    status: "Plug & Play",
    capabilities: ["Pipeline Failure Diagnostics", "Merge Request Generation", "Webhook Event Triggers", "Environment Deployment Tracking"],
  },
  {
    id: "datadog",
    name: "Datadog",
    category: "monitoring",
    description: "Query APM traces, error dashboards, and monitor thresholds to diagnose performance degradation.",
    status: "Plug & Play",
    capabilities: ["APM Trace Analysis", "Monitor Alert Ingestion", "Host Metric Correlation", "Log Query Execution"],
  },
  {
    id: "grafana",
    name: "Grafana & Prometheus",
    category: "monitoring",
    description: "Query Prometheus PromQL metrics and fetch Grafana alert status to enrich incident context.",
    status: "Plug & Play",
    capabilities: ["PromQL Metric Queries", "Alertmanager Ingestion", "Dashboard Snapshot Generation", "Threshold Verification"],
  },
  {
    id: "slack",
    name: "Slack",
    category: "communication",
    description: "Interactive incident bot, approval notification cards, and status broadcast channels.",
    status: "Supported",
    capabilities: ["Interactive Approval Buttons", "Natural Language Commands", "Thread-Based Incident Discussions", "Summary Broadcasts"],
  },
  {
    id: "postgres",
    name: "PostgreSQL & Database Engines",
    category: "database",
    description: "Execute read-only diagnostic queries, inspect slow query logs, and verify schema migrations.",
    status: "Supported",
    capabilities: ["Read-Only Safe Query Mode", "Slow Query Log Inspection", "Index Usage Analysis", "Connection Pool Diagnostics"],
  },
  {
    id: "webhooks",
    name: "Custom Webhooks & REST APIs",
    category: "developer",
    description: "Trigger Opsvian or receive callbacks to any internal service using secure HMAC-signed webhooks.",
    status: "Custom Webhook",
    capabilities: ["HMAC Signature Verification", "Custom Payload Parsing", "Retry & Backoff Logic", "Configurable Secret Headers"],
  },
];

export const faqData: FAQItem[] = [
  {
    category: "general",
    question: "What is Opsvian AI and how is it different from traditional automation tools?",
    answer:
      "Unlike traditional workflow automation tools that require rigid if-this-then-that scripts which break when APIs change, Opsvian AI is an intelligent agent capable of reasoning over complex operational goals, adapting to dynamic runtime feedback, diagnosing errors across tools, and self-correcting—all while strictly enforcing policy guardrails.",
  },
  {
    category: "general",
    question: "Does Opsvian AI require a complex backend installation?",
    answer:
      "No. This website is a 100% frontend-first client architecture with zero custom backend servers or databases required. For user inquiries and demo bookings, it integrates seamlessly with Formspree, delivering inquiries straight to your business inbox securely without exposing secrets.",
  },
  {
    category: "security",
    question: "How does Opsvian AI prevent unintended or destructive changes to production?",
    answer:
      "Opsvian is built with deterministic guardrails. Read operations occur automatically with scoped credentials, but any action classified as a state-altering mutation (such as restarting pods, modifying DNS, or deploying code) is intercepted by a Human-in-the-Loop approval gate. It pauses execution, sends an interactive review card to your designated channel (e.g., Slack or email), and only proceeds when a verified human approves.",
  },
  {
    category: "security",
    question: "Where does my data go? Is our proprietary code or telemetry trained on?",
    answer:
      "Opsvian does not train foundation models on your customer data, codebases, or proprietary telemetry. Communications occur through encrypted TLS connections, credentials operate with ephemeral least privilege, and execution transcripts are stored in your own designated enterprise storage.",
  },
  {
    category: "integration",
    question: "Which tools and cloud providers can Opsvian integrate with?",
    answer:
      "Opsvian connects directly to AWS, GCP, GitHub, GitLab, Datadog, Grafana, Slack, PostgreSQL, and custom webhooks. It supports the open Model Context Protocol (MCP), enabling you to easily connect internal custom tools and proprietary microservice APIs.",
  },
  {
    category: "integration",
    question: "How do I configure the Demo and Contact forms for my company?",
    answer:
      "All forms on this website connect directly to Formspree via the `NEXT_PUBLIC_FORMSPREE_FORM_ID` environment variable. Simply create a free or team form on Formspree.io, set your company notification inbox in the Formspree dashboard, and add your Form ID to `.env.local`. Forms will immediately route submissions directly to your inbox.",
  },
  {
    category: "deployment",
    question: "How can I deploy this website?",
    answer:
      "Because this project is built as a clean Next.js frontend application with no custom backend, database, or server actions, it can be deployed in seconds to Vercel, Netlify, Cloudflare Pages, AWS Amplify, or any static/Node hosting provider with zero infrastructure overhead.",
  },
  {
    category: "deployment",
    question: "What happens if a form is submitted before the Formspree Form ID is added?",
    answer:
      "The form provides a helpful development preview state: it validates the user input, checks the spam honeypot, simulates the payload, and displays a friendly notice that the website is in development mode waiting for your Formspree Form ID in `.env.local`.",
  },
];
