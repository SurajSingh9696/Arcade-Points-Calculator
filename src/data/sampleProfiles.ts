import { UserProfile } from '../types/arcade';

export const INITIAL_PROFILES: UserProfile[] = [
  {
    id: 'profile-primary',
    name: 'Suraj Singh',
    avatarSeed: 'SurajSingh',
    profileUrl: 'https://www.skills.google/public_profiles/a88e0c09-8768-4e28-bc35-685f35bfdb5b',
    lastUpdated: '2026-10-26',
    isCurrent: true,
    notes: 'Google Cloud Skills Profile',
    seasonTarget: 'Season 2026',
    badges: [
      {
        id: 'badge-suraj-1',
        name: 'Configure Service Accounts and IAM Roles for Google Cloud',
        category: 'skill',
        dateEarned: '2026-10-26',
        pointsContribution: 0.5,
        isVerified: true,
        season: 'Season 2026',
        description: 'Google Cloud Skill Badge: IAM Roles and Service Account administration'
      },
      {
        id: 'badge-suraj-2',
        name: 'Create Your First Gemini Enterprise Application',
        category: 'skill',
        dateEarned: '2026-10-20',
        pointsContribution: 0.5,
        isVerified: true,
        season: 'Season 2026',
        description: 'Google Cloud Skill Badge: Enterprise Gemini multimodal AI application development'
      },
      {
        id: 'badge-suraj-3',
        name: 'Build a Website on Google Cloud',
        category: 'skill',
        dateEarned: '2026-10-20',
        pointsContribution: 0.5,
        isVerified: true,
        season: 'Season 2026',
        description: 'Google Cloud Skill Badge: Deploying web apps on Compute Engine and Cloud Storage'
      },
      {
        id: 'badge-suraj-4',
        name: 'Analyze Images with the Cloud Vision API',
        category: 'skill',
        dateEarned: '2026-10-17',
        pointsContribution: 0.5,
        isVerified: true,
        season: 'Season 2026',
        description: 'Google Cloud Skill Badge: Machine learning vision API image labels and OCR'
      },
      {
        id: 'badge-suraj-5',
        name: 'Implement Speech and Language Solutions with Pre-trained APIs',
        category: 'skill',
        dateEarned: '2026-10-17',
        pointsContribution: 0.5,
        isVerified: true,
        season: 'Season 2026',
        description: 'Google Cloud Skill Badge: Natural Language, Speech-to-Text and Translation APIs'
      },
      {
        id: 'badge-suraj-6',
        name: 'The Basics of Google Cloud Compute',
        category: 'skill',
        dateEarned: '2026-10-15',
        pointsContribution: 0.5,
        isVerified: true,
        season: 'Season 2026',
        description: 'Google Cloud Skill Badge: Compute Engine, networking, and load balancer basics'
      }
    ]
  }
];

export const SAMPLE_PROFILES = INITIAL_PROFILES;
