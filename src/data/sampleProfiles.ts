import { UserProfile } from '../types/arcade';

export const SAMPLE_PROFILES: UserProfile[] = [
  {
    id: 'prof-arjun',
    name: 'Arjun Sharma',
    avatarSeed: 'Arjun',
    profileUrl: 'https://www.cloudskillsboost.google/public_profiles/8b42e719-79a0-40e8-bf01-19b88cf24361',
    lastUpdated: '2026-10-26',
    isCurrent: true,
    notes: 'Aiming for the 2026 Grandmaster Bomber Jacket & Plaque! Active 5-week streak.',
    customGoalPoints: 75,
    seasonTarget: 'Season 2026',
    badges: [
      // Arcade Games (5 pts)
      { id: 'b1', name: 'Level 1: Google Cloud Infrastructure & Containers', category: 'game', dateEarned: '2026-09-04', pointsContribution: 1, season: 'Season 2026', isVerified: true },
      { id: 'b2', name: 'Level 2: Data Engineering & Analytics Mastery', category: 'game', dateEarned: '2026-09-12', pointsContribution: 1, season: 'Season 2026', isVerified: true },
      { id: 'b3', name: 'Level 3: Generative AI & Vertex AI Studio', category: 'game', dateEarned: '2026-09-20', pointsContribution: 1, season: 'Season 2026', isVerified: true },
      { id: 'b4', name: 'Level 4: Cloud Security, IAM & Governance', category: 'game', dateEarned: '2026-09-28', pointsContribution: 1, season: 'Season 2026', isVerified: true },
      { id: 'b5', name: 'Diabolical Challenge: Multi-Cloud & Resiliency', category: 'game', dateEarned: '2026-10-06', pointsContribution: 1, season: 'Season 2026', isVerified: true },

      // Trivia (6 pts)
      { id: 'b6', name: 'Arcade Trivia September 2026: Week 1', category: 'trivia', dateEarned: '2026-09-07', pointsContribution: 1, season: 'Season 2026', isVerified: true },
      { id: 'b7', name: 'Arcade Trivia September 2026: Week 2', category: 'trivia', dateEarned: '2026-09-14', pointsContribution: 1, season: 'Season 2026', isVerified: true },
      { id: 'b8', name: 'Arcade Trivia October 2026: Week 1', category: 'trivia', dateEarned: '2026-10-05', pointsContribution: 1, season: 'Season 2026', isVerified: true },
      { id: 'b9', name: 'Arcade Trivia October 2026: Week 2', category: 'trivia', dateEarned: '2026-10-12', pointsContribution: 1, season: 'Season 2026', isVerified: true },
      { id: 'b10', name: 'Arcade Trivia October 2026: Week 3', category: 'trivia', dateEarned: '2026-10-19', pointsContribution: 1, season: 'Season 2026', isVerified: true },
      { id: 'b11', name: 'Arcade Trivia October 2026: Week 4', category: 'trivia', dateEarned: '2026-10-26', pointsContribution: 1, season: 'Season 2026', isVerified: true },

      // Skill Badges (24 skill badges -> 12 base points + 12 milestone points)
      { id: 'b12', name: 'Implement Cloud Security Fundamentals on Google Cloud', category: 'skill', dateEarned: '2026-09-02', pointsContribution: 0.5, season: 'Season 2026', isVerified: true },
      { id: 'b13', name: 'Build and Secure Networks in Google Cloud', category: 'skill', dateEarned: '2026-09-05', pointsContribution: 0.5, season: 'Season 2026', isVerified: true },
      { id: 'b14', name: 'Perform Foundational Infrastructure Tasks in Google Cloud', category: 'skill', dateEarned: '2026-09-08', pointsContribution: 0.5, season: 'Season 2026', isVerified: true },
      { id: 'b15', name: 'Build a Website on Google Cloud', category: 'skill', dateEarned: '2026-09-10', pointsContribution: 0.5, season: 'Season 2026', isVerified: true },
      { id: 'b16', name: 'Set Up and Configure a Cloud Environment in Google Cloud', category: 'skill', dateEarned: '2026-09-15', pointsContribution: 0.5, season: 'Season 2026', isVerified: true },
      { id: 'b17', name: 'Deploy and Manage Cloud Environments with Google Cloud', category: 'skill', dateEarned: '2026-09-18', pointsContribution: 0.5, season: 'Season 2026', isVerified: true },
      { id: 'b18', name: 'Automating Infrastructure on Google Cloud with Terraform', category: 'skill', dateEarned: '2026-09-21', pointsContribution: 0.5, season: 'Season 2026', isVerified: true },
      { id: 'b19', name: 'Explore Machine Learning Models with Explainable AI', category: 'skill', dateEarned: '2026-09-24', pointsContribution: 0.5, season: 'Season 2026', isVerified: true },
      { id: 'b20', name: 'Prepare Data for ML APIs on Google Cloud', category: 'skill', dateEarned: '2026-09-27', pointsContribution: 0.5, season: 'Season 2026', isVerified: true },
      { id: 'b21', name: 'Create and Manage Cloud Spanner Databases', category: 'skill', dateEarned: '2026-09-30', pointsContribution: 0.5, season: 'Season 2026', isVerified: true },
      { id: 'b22', name: 'Insights from Data with BigQuery', category: 'skill', dateEarned: '2026-10-02', pointsContribution: 0.5, season: 'Season 2026', isVerified: true },
      { id: 'b23', name: 'Build Google Cloud Infrastructure for AWS Professionals', category: 'skill', dateEarned: '2026-10-04', pointsContribution: 0.5, season: 'Season 2026', isVerified: true },
      { id: 'b24', name: 'Engineer Data with Google Cloud Dataplex', category: 'skill', dateEarned: '2026-10-07', pointsContribution: 0.5, season: 'Season 2026', isVerified: true },
      { id: 'b25', name: 'Develop GenAI Apps with Gemini and Streamlit', category: 'skill', dateEarned: '2026-10-10', pointsContribution: 0.5, season: 'Season 2026', isVerified: true },
      { id: 'b26', name: 'Manage Kubernetes in Google Cloud', category: 'skill', dateEarned: '2026-10-13', pointsContribution: 0.5, season: 'Season 2026', isVerified: true },
      { id: 'b27', name: 'Monitor and Log with Google Cloud Operations Suite', category: 'skill', dateEarned: '2026-10-15', pointsContribution: 0.5, season: 'Season 2026', isVerified: true },
      { id: 'b28', name: 'Store, Process, and Manage Data on Google Cloud', category: 'skill', dateEarned: '2026-10-17', pointsContribution: 0.5, season: 'Season 2026', isVerified: true },
      { id: 'b29', name: 'Build a Multi-Modal AI Agent with Vertex AI', category: 'skill', dateEarned: '2026-10-19', pointsContribution: 0.5, season: 'Season 2026', isVerified: true },
      { id: 'b30', name: 'Implement DevOps in Google Cloud with Cloud Build', category: 'skill', dateEarned: '2026-10-21', pointsContribution: 0.5, season: 'Season 2026', isVerified: true },
      { id: 'b31', name: 'Optimize Costs on Google Cloud with Active Assist', category: 'skill', dateEarned: '2026-10-22', pointsContribution: 0.5, season: 'Season 2026', isVerified: true },
      { id: 'b32', name: 'Deploy a Serverless Backend with Cloud Run & Pub/Sub', category: 'skill', dateEarned: '2026-10-23', pointsContribution: 0.5, season: 'Season 2026', isVerified: true },
      { id: 'b33', name: 'Secure Software Supply Chain on Google Cloud', category: 'skill', dateEarned: '2026-10-24', pointsContribution: 0.5, season: 'Season 2026', isVerified: true },
      { id: 'b34', name: 'Predict Housing Prices with Vertex AI AutoML', category: 'skill', dateEarned: '2026-10-25', pointsContribution: 0.5, season: 'Season 2026', isVerified: true },
      { id: 'b35', name: 'Analyze Speech and Language with Google Cloud APIs', category: 'skill', dateEarned: '2026-10-26', pointsContribution: 0.5, season: 'Season 2026', isVerified: true },

      // Milestones (12 pts bonus)
      { id: 'b36', name: 'Arcade Milestone: Tier 1 Achiever (8 Skill Badges)', category: 'milestone', dateEarned: '2026-09-24', pointsContribution: 2, season: 'Season 2026', isVerified: true },
      { id: 'b37', name: 'Arcade Milestone: Tier 2 Master (16 Skill Badges)', category: 'milestone', dateEarned: '2026-10-13', pointsContribution: 4, season: 'Season 2026', isVerified: true },
      { id: 'b38', name: 'Arcade Milestone: Tier 3 Grand Champion (24 Skill Badges)', category: 'milestone', dateEarned: '2026-10-26', pointsContribution: 6, season: 'Season 2026', isVerified: true },

      // Special & Certifications (4 pts)
      { id: 'b39', name: 'Arcade Certification Zone: Associate Cloud Engineer', category: 'special', dateEarned: '2026-10-11', pointsContribution: 2, season: 'Season 2026', isVerified: true },
      { id: 'b40', name: 'Arcade Special Sprint: Cloud Hero Hackathon 2026', category: 'special', dateEarned: '2026-10-18', pointsContribution: 2, season: 'Season 2026', isVerified: true },
    ]
  },
  {
    id: 'prof-sophia',
    name: 'Sophia Chen',
    avatarSeed: 'Sophia',
    profileUrl: 'https://www.cloudskillsboost.google/public_profiles/5a1b3c99-1234-4567-89ab-cdef01234567',
    lastUpdated: '2026-10-24',
    isCurrent: false,
    notes: 'Pursuing Advanced Tier swag! Focusing on Vertex AI & Data pipelines.',
    customGoalPoints: 45,
    seasonTarget: 'Season 2026',
    badges: [
      { id: 's1', name: 'Level 1: Google Cloud Infrastructure & Containers', category: 'game', dateEarned: '2026-09-10', pointsContribution: 1, season: 'Season 2026', isVerified: true },
      { id: 's2', name: 'Level 2: Data Engineering & Analytics Mastery', category: 'game', dateEarned: '2026-09-24', pointsContribution: 1, season: 'Season 2026', isVerified: true },
      { id: 's3', name: 'Level 3: Generative AI & Vertex AI Studio', category: 'game', dateEarned: '2026-10-08', pointsContribution: 1, season: 'Season 2026', isVerified: true },
      
      { id: 's4', name: 'Arcade Trivia October 2026: Week 1', category: 'trivia', dateEarned: '2026-10-06', pointsContribution: 1, season: 'Season 2026', isVerified: true },
      { id: 's5', name: 'Arcade Trivia October 2026: Week 2', category: 'trivia', dateEarned: '2026-10-13', pointsContribution: 1, season: 'Season 2026', isVerified: true },
      { id: 's6', name: 'Arcade Trivia October 2026: Week 3', category: 'trivia', dateEarned: '2026-10-20', pointsContribution: 1, season: 'Season 2026', isVerified: true },

      { id: 's7', name: 'Implement Cloud Security Fundamentals on Google Cloud', category: 'skill', dateEarned: '2026-09-14', pointsContribution: 0.5, season: 'Season 2026', isVerified: true },
      { id: 's8', name: 'Build and Secure Networks in Google Cloud', category: 'skill', dateEarned: '2026-09-18', pointsContribution: 0.5, season: 'Season 2026', isVerified: true },
      { id: 's9', name: 'Perform Foundational Infrastructure Tasks in Google Cloud', category: 'skill', dateEarned: '2026-09-22', pointsContribution: 0.5, season: 'Season 2026', isVerified: true },
      { id: 's10', name: 'Build a Website on Google Cloud', category: 'skill', dateEarned: '2026-09-27', pointsContribution: 0.5, season: 'Season 2026', isVerified: true },
      { id: 's11', name: 'Set Up and Configure a Cloud Environment in Google Cloud', category: 'skill', dateEarned: '2026-10-01', pointsContribution: 0.5, season: 'Season 2026', isVerified: true },
      { id: 's12', name: 'Deploy and Manage Cloud Environments with Google Cloud', category: 'skill', dateEarned: '2026-10-05', pointsContribution: 0.5, season: 'Season 2026', isVerified: true },
      { id: 's13', name: 'Automating Infrastructure on Google Cloud with Terraform', category: 'skill', dateEarned: '2026-10-10', pointsContribution: 0.5, season: 'Season 2026', isVerified: true },
      { id: 's14', name: 'Explore Machine Learning Models with Explainable AI', category: 'skill', dateEarned: '2026-10-15', pointsContribution: 0.5, season: 'Season 2026', isVerified: true },
      { id: 's15', name: 'Prepare Data for ML APIs on Google Cloud', category: 'skill', dateEarned: '2026-10-18', pointsContribution: 0.5, season: 'Season 2026', isVerified: true },
      { id: 's16', name: 'Create and Manage Cloud Spanner Databases', category: 'skill', dateEarned: '2026-10-22', pointsContribution: 0.5, season: 'Season 2026', isVerified: true },
      
      { id: 's17', name: 'Arcade Milestone: Tier 1 Achiever (8 Skill Badges)', category: 'milestone', dateEarned: '2026-10-15', pointsContribution: 2, season: 'Season 2026', isVerified: true },
      { id: 's18', name: 'Arcade Special Sprint: Cloud Hero Hackathon 2026', category: 'special', dateEarned: '2026-10-12', pointsContribution: 2, season: 'Season 2026', isVerified: true },
    ]
  },
  {
    id: 'prof-leo',
    name: 'Leo Vance',
    avatarSeed: 'Leo',
    profileUrl: 'https://www.cloudskillsboost.google/public_profiles/3d2e1f00-9876-5432-10fe-dcba98765432',
    lastUpdated: '2026-10-25',
    isCurrent: false,
    notes: 'Cloud beginner! Target: Standard Tier T-shirt & pin collection.',
    customGoalPoints: 25,
    seasonTarget: 'Season 2026',
    badges: [
      { id: 'l1', name: 'Level 1: Google Cloud Infrastructure & Containers', category: 'game', dateEarned: '2026-10-04', pointsContribution: 1, season: 'Season 2026', isVerified: true },
      { id: 'l2', name: 'Arcade Trivia October 2026: Week 1', category: 'trivia', dateEarned: '2026-10-07', pointsContribution: 1, season: 'Season 2026', isVerified: true },
      { id: 'l3', name: 'Arcade Trivia October 2026: Week 2', category: 'trivia', dateEarned: '2026-10-14', pointsContribution: 1, season: 'Season 2026', isVerified: true },
      { id: 'l4', name: 'Implement Cloud Security Fundamentals on Google Cloud', category: 'skill', dateEarned: '2026-10-10', pointsContribution: 0.5, season: 'Season 2026', isVerified: true },
      { id: 'l5', name: 'Build a Website on Google Cloud', category: 'skill', dateEarned: '2026-10-18', pointsContribution: 0.5, season: 'Season 2026', isVerified: true },
      { id: 'l6', name: 'Perform Foundational Infrastructure Tasks in Google Cloud', category: 'skill', dateEarned: '2026-10-22', pointsContribution: 0.5, season: 'Season 2026', isVerified: true },
      { id: 'l7', name: 'Set Up and Configure a Cloud Environment in Google Cloud', category: 'skill', dateEarned: '2026-10-25', pointsContribution: 0.5, season: 'Season 2026', isVerified: true }
    ]
  }
];
