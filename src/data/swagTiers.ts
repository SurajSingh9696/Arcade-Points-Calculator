import { SwagTier } from '../types/arcade';

export const SWAG_TIERS: SwagTier[] = [
  {
    id: 'novice',
    name: 'Explorer Tier',
    minPoints: 0,
    maxPoints: 9,
    rewardName: 'Arcade Starter Pack',
    rewardDescription: 'Get started on your cloud journey with official stickers and digital badges.',
    badgeLevel: 'Bronze Token',
    swagItems: [
      'Official Arcade Digital Certificate',
      'Google Cloud Skills Boost Profile Badge',
      'Community Discord Access',
      'Seasonal Leaderboard Ranking'
    ],
    color: '#BF9E79', // Warm bronze/sand
    textColor: 'text-[#835E3B]',
    bgColor: 'bg-[#F4ECE1]',
    borderColor: 'border-[#D6C0A5]',
  },
  {
    id: 'standard',
    name: 'Standard Tier',
    minPoints: 10,
    maxPoints: 24,
    rewardName: 'Arcade Collector Set',
    rewardDescription: 'Physical collectibles celebrating your first milestone across games and skill labs.',
    badgeLevel: 'Silver Token',
    swagItems: [
      'Official Arcade 2026 Cotton T-Shirt',
      'Holographic Vinyl Sticker Pack (8x)',
      'Arcade Metal Enamel Pin Set',
      'Eco-Bamboo Ballpoint Pen'
    ],
    color: '#D97706', // Warm amber
    textColor: 'text-[#B45309]',
    bgColor: 'bg-[#FEF3C7]',
    borderColor: 'border-[#FDE68A]',
  },
  {
    id: 'advanced',
    name: 'Advanced Tier',
    minPoints: 25,
    maxPoints: 44,
    rewardName: 'Cloud Champion Gear',
    rewardDescription: 'Premium lifestyle and everyday tech essentials for dedicated cloud champions.',
    badgeLevel: 'Gold Token',
    swagItems: [
      'Arcade Embroidered Heavyweight Hoodie',
      'Insulated 750ml Matte Steel Water Bottle',
      'Hardcover Debossed Dotted Journal',
      'Cables & Tech Accessory Organizer Pouch'
    ],
    color: '#EA580C', // Sunset coral/orange
    textColor: 'text-[#C2410C]',
    bgColor: 'bg-[#FFEDD5]',
    borderColor: 'border-[#FED7AA]',
  },
  {
    id: 'premium',
    name: 'Premium Tier',
    minPoints: 45,
    maxPoints: 64,
    rewardName: 'Arcade Elite Vanguard',
    rewardDescription: 'High-end swag package designed for top cloud practitioners and multi-domain experts.',
    badgeLevel: 'Emerald Medallion',
    swagItems: [
      'Heavy-Duty Ergonomic Cloud Laptop Backpack (Water-resistant)',
      'Dual Fast Qi-Wireless Charging Station Pad',
      'Custom Embroidered Snapback Cap',
      'Extended Anti-Slip RGB/Stitched Edge Desk Mat',
      '$50 Google Cloud Certification Exam Discount Voucher'
    ],
    color: '#059669', // Forest emerald
    textColor: 'text-[#047857]',
    bgColor: 'bg-[#D1FAE5]',
    borderColor: 'border-[#A7F3D0]',
  },
  {
    id: 'legend',
    name: 'Legend Tier',
    minPoints: 65,
    maxPoints: 999,
    rewardName: 'Arcade Grandmaster Hall of Fame',
    rewardDescription: 'The pinnacle of Google Cloud Arcade. Top 1% swag collection and grandmaster prestige.',
    badgeLevel: 'Royal Prismatic Crown',
    swagItems: [
      'Arcade Varsity Bomber Jacket (Custom embroidered & numbered)',
      'Waterproof Portable Wireless Bluetooth Speaker',
      'Custom Keycap Set & Mechanical Keyboard Wrist-Rest',
      'Exclusive Physical Grandmaster Plaque with Engraved Name',
      '100% Google Cloud Associate/Professional Exam Voucher ($200 value)'
    ],
    color: '#9333EA', // Royal warm plum / amethyst
    textColor: 'text-[#7E22CE]',
    bgColor: 'bg-[#F3E8FF]',
    borderColor: 'border-[#E9D5FF]',
  }
];
