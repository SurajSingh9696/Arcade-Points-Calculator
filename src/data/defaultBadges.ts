import { ArcadeBadge } from '../types/arcade';

export const REPOSITORY_BADGES: Omit<ArcadeBadge, 'id' | 'dateEarned'>[] = [
  // Arcade Game Badges (1 pt each)
  {
    name: 'Level 1: Google Cloud Infrastructure & Containers',
    category: 'game',
    pointsContribution: 1,
    description: 'Master Compute Engine, GKE clusters, and Cloud Run deployments in this challenge game.',
    season: 'Season 2026',
    isVerified: true
  },
  {
    name: 'Level 2: Data Engineering & Analytics Mastery',
    category: 'game',
    pointsContribution: 1,
    description: 'Build BigQuery pipelines, Dataflow streaming, and Cloud Dataproc spark clusters.',
    season: 'Season 2026',
    isVerified: true
  },
  {
    name: 'Level 3: Generative AI & Vertex AI Studio',
    category: 'game',
    pointsContribution: 1,
    description: 'Prompt engineering, multimodal model tuning, and Gemini API integration hands-on arcade.',
    season: 'Season 2026',
    isVerified: true
  },
  {
    name: 'Level 4: Cloud Security, IAM & Governance',
    category: 'game',
    pointsContribution: 1,
    description: 'Enforce VPC service controls, IAM fine-grained privileges, and Security Command Center.',
    season: 'Season 2026',
    isVerified: true
  },
  {
    name: 'Diabolical Challenge: Multi-Cloud & Resiliency',
    category: 'game',
    pointsContribution: 1,
    description: 'The infamous Arcade Diabolical mystery level with high difficulty timed scenarios.',
    season: 'Season 2026',
    isVerified: true
  },

  // Trivia Badges (1 pt each)
  {
    name: 'Arcade Trivia October 2026: Week 1',
    category: 'trivia',
    pointsContribution: 1,
    description: 'Weekly Google Cloud trivia testing architecture knowledge and cloud fundamentals.',
    season: 'Season 2026',
    isVerified: true
  },
  {
    name: 'Arcade Trivia October 2026: Week 2',
    category: 'trivia',
    pointsContribution: 1,
    description: 'Weekly Google Cloud trivia on networking, Cloud DNS, and Cloud Armor firewalls.',
    season: 'Season 2026',
    isVerified: true
  },
  {
    name: 'Arcade Trivia October 2026: Week 3',
    category: 'trivia',
    pointsContribution: 1,
    description: 'Weekly Google Cloud trivia on Datastore, Cloud Spanner, and Firestore scalability.',
    season: 'Season 2026',
    isVerified: true
  },
  {
    name: 'Arcade Trivia October 2026: Week 4',
    category: 'trivia',
    pointsContribution: 1,
    description: 'Weekly Google Cloud trivia grand finale covering Cloud FinOps and cost optimization.',
    season: 'Season 2026',
    isVerified: true
  },
  {
    name: 'Arcade Trivia September 2026: Week 1',
    category: 'trivia',
    pointsContribution: 1,
    description: 'September launch trivia covering Kubernetes and modern microservices.',
    season: 'Season 2026',
    isVerified: true
  },
  {
    name: 'Arcade Trivia September 2026: Week 2',
    category: 'trivia',
    pointsContribution: 1,
    description: 'September trivia on serverless workflows and Eventarc event orchestration.',
    season: 'Season 2026',
    isVerified: true
  },

  // Skill Badges (Contribute to Skill Badge pool: 1 pt per 2 skill badges + Milestones)
  {
    name: 'Implement Cloud Security Fundamentals on Google Cloud',
    category: 'skill',
    pointsContribution: 0.5,
    description: 'Configure Cloud IAM policies, Cloud Storage ACLs, and service account keys.',
    season: 'Season 2026',
    isVerified: true
  },
  {
    name: 'Build and Secure Networks in Google Cloud',
    category: 'skill',
    pointsContribution: 0.5,
    description: 'VPC peering, firewall rules, NAT gateways, and load balancer configurations.',
    season: 'Season 2026',
    isVerified: true
  },
  {
    name: 'Perform Foundational Infrastructure Tasks in Google Cloud',
    category: 'skill',
    pointsContribution: 0.5,
    description: 'Deploy Cloud SQL instances, Cloud Storage buckets, and Cloud Monitoring dashboards.',
    season: 'Season 2026',
    isVerified: true
  },
  {
    name: 'Build a Website on Google Cloud',
    category: 'skill',
    pointsContribution: 0.5,
    description: 'Host static and dynamic web applications with Cloud Run, Cloud CDN, and Cloud Build.',
    season: 'Season 2026',
    isVerified: true
  },
  {
    name: 'Set Up and Configure a Cloud Environment in Google Cloud',
    category: 'skill',
    pointsContribution: 0.5,
    description: 'Billing accounts, resource hierarchies, folders, and enterprise organizations.',
    season: 'Season 2026',
    isVerified: true
  },
  {
    name: 'Deploy and Manage Cloud Environments with Google Cloud',
    category: 'skill',
    pointsContribution: 0.5,
    description: 'Automate infrastructure as code using Terraform and Cloud Deployment Manager.',
    season: 'Season 2026',
    isVerified: true
  },
  {
    name: 'Automating Infrastructure on Google Cloud with Terraform',
    category: 'skill',
    pointsContribution: 0.5,
    description: 'Terraform state management, modules, and multi-region deployment automation.',
    season: 'Season 2026',
    isVerified: true
  },
  {
    name: 'Explore Machine Learning Models with Explainable AI',
    category: 'skill',
    pointsContribution: 0.5,
    description: 'What-If Tool, Shapley values, and model interpretability in Vertex AI.',
    season: 'Season 2026',
    isVerified: true
  },
  {
    name: 'Prepare Data for ML APIs on Google Cloud',
    category: 'skill',
    pointsContribution: 0.5,
    description: 'Data cleansing, Feature Store pipelines, and Vision/NLP API integrations.',
    season: 'Season 2026',
    isVerified: true
  },
  {
    name: 'Create and Manage Cloud Spanner Databases',
    category: 'skill',
    pointsContribution: 0.5,
    description: 'Globally distributed relational databases, split architecture, and read/write scaling.',
    season: 'Season 2026',
    isVerified: true
  },
  {
    name: 'Insights from Data with BigQuery',
    category: 'skill',
    pointsContribution: 0.5,
    description: 'Partitioned tables, clustering, window functions, and BigQuery ML regression models.',
    season: 'Season 2026',
    isVerified: true
  },
  {
    name: 'Build Google Cloud Infrastructure for AWS Professionals',
    category: 'skill',
    pointsContribution: 0.5,
    description: 'Cross-cloud architectural paradigms, IAM mapping, and dual-cloud networking.',
    season: 'Season 2026',
    isVerified: true
  },
  {
    name: 'Engineer Data with Google Cloud Dataplex',
    category: 'skill',
    pointsContribution: 0.5,
    description: 'Data fabric governance, automatic schema discovery, and data quality check rules.',
    season: 'Season 2026',
    isVerified: true
  },
  {
    name: 'Develop GenAI Apps with Gemini and Streamlit',
    category: 'skill',
    pointsContribution: 0.5,
    description: 'Streamlit frontends connected to Vertex AI Gemini 1.5 Pro and Flash with function calling.',
    season: 'Season 2026',
    isVerified: true
  },

  // Milestone Badges (Bonus points)
  {
    name: 'Arcade Milestone: Tier 1 Achiever (8 Skill Badges)',
    category: 'milestone',
    pointsContribution: 2,
    description: 'Official Milestone bonus awarded for passing the first 8 verified skill badges.',
    season: 'Season 2026',
    isVerified: true
  },
  {
    name: 'Arcade Milestone: Tier 2 Master (16 Skill Badges)',
    category: 'milestone',
    pointsContribution: 4,
    description: 'Official Milestone bonus awarded for passing 16 verified skill badges.',
    season: 'Season 2026',
    isVerified: true
  },
  {
    name: 'Arcade Milestone: Tier 3 Grand Champion (24 Skill Badges)',
    category: 'milestone',
    pointsContribution: 6,
    description: 'Official Milestone bonus awarded for 24 verified skill badges.',
    season: 'Season 2026',
    isVerified: true
  },

  // Special / Certification Zone Badges
  {
    name: 'Arcade Certification Zone: Associate Cloud Engineer',
    category: 'special',
    pointsContribution: 2,
    description: 'Verified certification study sprint and hands-on architecture pass.',
    season: 'Season 2026',
    isVerified: true
  },
  {
    name: 'Arcade Special Sprint: Cloud Hero Hackathon 2026',
    category: 'special',
    pointsContribution: 2,
    description: 'Live competitive speed-running cloud lab challenge bonus award.',
    season: 'Season 2026',
    isVerified: true
  }
];
