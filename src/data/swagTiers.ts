import { SwagTier } from '../types/arcade';

/**
 * Official Google Cloud Arcade Prize Counter Tiers (Modern 2025/2026 Season Structure)
 * 
 * Rules & Waterfall System:
 * - Points accumulate from Skill Badges (0.5 pt each), Arcade Games (1 pt each),
 *   Trivia Badges (1 pt each), Milestones (up to +6 pts), and Certification/Special Sprints.
 * - During the Prize Counter redemption window, physical prizes are claimed on a first-come,
 *   first-served basis. If a higher tier reaches capacity, claims waterfall down to the next tier.
 */
export const SWAG_TIERS: SwagTier[] = [
  {
    id: 'novice',
    name: 'Novice Tier',
    minPoints: 0,
    maxPoints: 49,
    rewardName: 'Arcade Digital Starter Pack',
    rewardDescription: 'The starting milestone on Google Cloud Arcade. Complete skill badges and games to enter physical prize pools.',
    badgeLevel: 'Starter Bronze',
    swagItems: [
      'Official Arcade Digital Completion Certificate',
      'Google Cloud Skills Boost Profile Badges',
      'Community Arcade Leaderboard Ranking',
      'Prize Counter Eligibility'
    ],
    color: '#BF9E79', // Warm bronze/sand
    textColor: 'text-[#835E3B]',
    bgColor: 'bg-[#F4ECE1]',
    borderColor: 'border-[#D6C0A5]',
  },
  {
    id: 'trooper',
    name: 'Arcade Trooper',
    minPoints: 50,
    maxPoints: 74,
    rewardName: 'Trooper Collectibles Set',
    rewardDescription: 'The primary physical reward tier at the Prize Counter (50–74 points), unlocking official wearable and desk swag.',
    badgeLevel: 'Silver Trooper',
    swagItems: [
      'Official Google Cloud Arcade 2026 Cotton T-Shirt',
      'Insulated 750ml Stainless Steel Water Bottle',
      'Holographic Vinyl Sticker Pack (8x)',
      'Metal Enamel Arcade Pin Set & Google Cloud Pen'
    ],
    color: '#D97706', // Warm amber
    textColor: 'text-[#B45309]',
    bgColor: 'bg-[#FEF3C7]',
    borderColor: 'border-[#FDE68A]',
  },
  {
    id: 'ranger',
    name: 'Arcade Ranger',
    minPoints: 75,
    maxPoints: 94,
    rewardName: 'Ranger Vanguard Gear',
    rewardDescription: 'Intermediate physical reward tier (75–94 points) featuring premium lifestyle apparel and everyday carry tech.',
    badgeLevel: 'Gold Ranger',
    swagItems: [
      'Arcade Heavyweight Embroidered Hoodie',
      'Ergonomic Google Cloud Laptop Backpack (Water-resistant)',
      'Hardcover Debossed Dotted Tech Journal',
      'Travel Cables & Tech Accessories Organizer Pouch'
    ],
    color: '#EA580C', // Sunset coral/orange
    textColor: 'text-[#C2410C]',
    bgColor: 'bg-[#FFEDD5]',
    borderColor: 'border-[#FED7AA]',
  },
  {
    id: 'champion',
    name: 'Arcade Champion',
    minPoints: 95,
    maxPoints: 119,
    rewardName: 'Champion Elite Essentials',
    rewardDescription: 'Advanced reward tier (95–119 points) for dedicated cloud practitioners, featuring high-end tech lifestyle accessories.',
    badgeLevel: 'Emerald Champion',
    swagItems: [
      'Dual Fast Qi-Wireless Charging Station Pad',
      'Waterproof Portable Wireless Bluetooth Speaker',
      'Custom Embroidered Arcade Snapback Cap',
      'Extended Anti-Slip Stitched-Edge Desk Mat',
      '$50 Google Cloud Certification Exam Discount Voucher'
    ],
    color: '#059669', // Forest emerald
    textColor: 'text-[#047857]',
    bgColor: 'bg-[#D1FAE5]',
    borderColor: 'border-[#A7F3D0]',
  },
  {
    id: 'legend',
    name: 'Arcade Legend',
    minPoints: 120,
    maxPoints: 999,
    rewardName: 'Grandmaster Legend Vault',
    rewardDescription: 'The pinnacle elite tier (120+ points). Ultimate collection with first-come waterfall redemption and full exam certification vouchers.',
    badgeLevel: 'Royal Prismatic Crown',
    swagItems: [
      'Arcade Varsity Bomber Jacket (Custom Embroidered & Numbered)',
      'Custom Mechanical Keycap Set & Ergonomic Keyboard Wrist-Rest',
      '100% Google Cloud Associate/Professional Exam Voucher ($200 value)',
      'Physical Engraved Grandmaster Recognition Plaque',
      'Google Cloud Cloud Hero Special Edition Merchandise'
    ],
    color: '#9333EA', // Royal warm plum / amethyst
    textColor: 'text-[#7E22CE]',
    bgColor: 'bg-[#F3E8FF]',
    borderColor: 'border-[#E9D5FF]',
  }
];
