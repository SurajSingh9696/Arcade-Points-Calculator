# 🕹️ Google Cloud Arcade Points Calculator & Badge Velocity Tracker

[![React](https://img.shields.io/badge/React-18.3.1-blue?logo=react&logoColor=white&color=D97706)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?logo=typescript&logoColor=white&color=B45309)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.1.0-blue?logo=vite&logoColor=white&color=EA580C)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.4-blue?logo=tailwindcss&logoColor=white&color=059669)](https://tailwindcss.com/)
[![Three.js](https://img.shields.io/badge/Three.js-WebGL-blue?logo=three.js&logoColor=white&color=9333EA)](https://threejs.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?color=BF9E79)](LICENSE)

An interactive, high-precision web application built for Google Cloud practitioners to calculate official **Google Cloud Arcade Season 2026** points, monitor badge acquisition velocity, visualize completion cadence, and track progress toward official Google Cloud swag tiers.

Featuring real-time 3D interactive WebGL graphics via **Three.js**, an auto-saving local account engine that eliminates repetitive URL entry, and an editorial mixed-font non-blue aesthetic.

---

## 🌟 Key Features

### 1. 🧮 Verified Points Calculation Engine
Calculates Google Cloud Arcade Points based strictly on official seasonal rules:
* **Arcade Games**: $1\text{ Point}$ per completed game level (Levels 1–4, Diabolical Challenge).
* **Weekly Trivia Badges**: $1\text{ Point}$ per trivia challenge.
* **Skill Badges**: Standard $1\text{ Point}$ per $2\text{ Skill Badges}$ (ratio customizable to $1:1$ or $1:3$ in Settings).
* **Milestone Bonuses**: Automatic milestone bonuses for skill badge thresholds ($+2\text{ pts}$ for 8 badges, $+4\text{ pts}$ for 16 badges, $+6\text{ pts}$ for 24+ badges).
* **Certification Zones & Special Sprints**: $+2\text{ Bonus Points}$ each.
* **Next Swag Tier Progress**: Dynamic progress bar calculating exact points and percentage remaining to unlock the next prize tier.

### 2. 🪙 Interactive Three.js 3D Arcade Token
* **Real-Time 3D Rendering**: Cylinder coin with beveled rims, embossed 3D arcade stars, and ambient/specular lighting.
* **Dynamic Tier Materials**: Material dynamically shifts between **Bronze Token** (Explorer), **Silver** (Standard), **Gold** (Advanced), **Emerald** (Premium), and **Royal Prismatic** (Legend).
* **Physics & Tilt Interaction**: The 3D token smoothly tilts and follows cursor movements.
* **Interactive Coin Flip**: Clicking the coin triggers a full 3D spin cycle and celebratory particle confetti.
* **Robust WebGL Fallback**: Automatically falls back to a graceful 2.5D CSS animated medallion if WebGL is disabled or unsupported.

### 3. 📈 Badge Frequency & Velocity Analytics
* **Cadence Metrics**: Computes badges earned per week, badges per month, and average days between completions.
* **Active Streak Counter**: Tracks consecutive active weeks with verified lab completions.
* **Weekly Cadence Timeline**: Interactive bar chart displaying week-by-week badge acquisition; click any bar to inspect the specific badges earned that week.
* **Day-of-Week Distribution**: Identifies whether you earn badges primarily on weekends or weekdays.
* **Milestone Forecast Engine**: Projects the exact calendar date you will reach your next swag tier based on current velocity.
* **Interactive Pace Simulator**: "What-If" slider allowing you to simulate: *"If I complete $X$ badges/week, when do I unlock the Legend Tier?"*

### 4. 💾 Zero Re-Entry ("Account Creation") Engine
* **Automatic Local Persistence**: All profile data, custom badges, and calculation parameters persist in `localStorage`.
* **Zero URL Re-Entry**: Once your profile is synced, returning to the web app restores your entire score dashboard immediately without typing your profile URL again.
* **Multi-Profile Switcher**: Create, rename, switch, or backup multiple profiles (e.g. personal, enterprise, or team accounts).
* **JSON Backup & Restore**: One-click JSON backup export and import with strict schema validation.

### 5. ⚡ Direct URL Profile Synchronizer (1-Click Automated Fetch)
* **URL-Only Badge Discovery**: Simply paste your public Google Cloud Skills Boost / Google Skills profile link (`https://www.skills.google/public_profiles/...`).
* **Automated Proxy Engine**: Uses Vite's native Node.js proxy server with HTTP 308 redirect resolution to seamlessly fetch public profiles without Cloudflare 403 blocks.
* **Intelligent Multi-Pass Parser**: Automatically parses the live HTML to extract your name, verified badges, categories, and completion dates.
* **Zero Manual Effort**: No manual copying or pasting required. Enter your URL once, and all points and badges are calculated and saved immediately.

### 6. 🎨 Mixed Typography & Non-Blue Warm Palette
* **Strict Non-Blue Palette**: Warm sand background (`#FAF7F2`), warm stone typography (`#292524`), Marigold Amber (`#F59E0B`), Terracotta Sunset (`#EA580C`), Forest Emerald (`#10B981`), and Royal Plum (`#9333EA`).
* **Mixed Typography**:
  * `Press Start 2P`: Retro arcade counters, point tags, and high-score labels.
  * `Space Grotesk`: Bold geometric display headings.
  * `Fraunces`: Editorial serif for swag reward packages.
  * `Plus Jakarta Sans`: Modern clean body typography and UI controls.
  * `JetBrains Mono`: Dates, formulas, rates, and technical metadata.

---

## 🏆 Swag Tiers & Reward Roadmap (Official Prize Counter)

| Tier | Points Threshold | Badge Level | Example Official Rewards |
| :--- | :---: | :---: | :--- |
| **Novice** | $0–49\text{ pts}$ | Starter Bronze | Digital Certificate, Skills Boost Profile Badge, Community Ranking |
| **Arcade Trooper** | $50–74\text{ pts}$ | Silver Trooper | Official 2026 Arcade Cotton T-Shirt, Insulated Water Bottle, Vinyl Stickers, Enamel Pins |
| **Arcade Ranger** | $75–94\text{ pts}$ | Gold Ranger | Heavyweight Embroidered Hoodie, Ergonomic Laptop Backpack, Tech Journal, Cable Organizer |
| **Arcade Champion** | $95–119\text{ pts}$ | Emerald Champion | Dual Qi-Wireless Charger, Waterproof Bluetooth Speaker, Snapback Cap, Desk Mat, \$50 Exam Voucher |
| **Arcade Legend** | $120+\text{ pts}$ | Royal Prismatic Crown | Arcade Varsity Bomber Jacket (Numbered & Embroidered), Mechanical Keycaps, 100% Exam Voucher (\$200), Engraved Plaque |

> 🌊 **Waterfall Redemption System:** Prize counter redemption slots operate on a first-come, first-served basis with capped pools. If a higher tier reaches maximum redemption capacity, claims safely roll down to the next eligible tier pool, ensuring your hard-earned points always earn physical swag!

---

## 🏗️ Tech Stack

* **Frontend Framework**: [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
* **Build Tool**: [Vite 6](https://vitejs.dev/)
* **Styling**: [Tailwind CSS 3](https://tailwindcss.com/)
* **3D Graphics**: [Three.js](https://threejs.org/) (Custom WebGL cylinder geometry, extrude shapes, point lights, and particles)
* **Icons**: [Lucide React](https://lucide.dev/)
* **Celebration Effects**: [Canvas Confetti](https://www.npmjs.com/package/canvas-confetti)

---

## 🚀 Getting Started

### Prerequisites
* [Node.js](https://nodejs.org/) (v18.0.0 or higher)
* [pnpm](https://pnpm.io/) (recommended) or `npm`

### Installation & Run

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/google-arcade-points-calculator.git
   cd google-arcade-points-calculator
   ```

2. **Install dependencies**:
   ```bash
   pnpm install
   # or: npm install
   ```

3. **Start the local server**:
   ```bash
   pnpm run dev
   # or for production standalone server:
   pnpm run build
   node server.js
   ```
   Open your browser at `http://localhost:5173/`.

4. **Deploying to Vercel**:
   This project is pre-configured for 1-click deployment on [Vercel](https://vercel.com/):
   * Push your repository to GitHub / GitLab / Bitbucket.
   * Import the project on Vercel (framework preset: **Vite**).
   * Vercel will automatically build the frontend into `dist/` and deploy the Serverless Function at `/api/fetch-profile` to handle profile fetching seamlessly without CORS limitations.


---

## 📂 Project Architecture

```text
google-arcade-points-calculator/
├── index.html                 # Mixed Google Fonts & metadata setup
├── package.json               # Dependencies & scripts
├── tsconfig.json              # TypeScript configuration
├── vite.config.js             # Vite configuration
├── tailwind.config.js         # Custom warm palette & mixed font families
├── README.md                  # Project documentation
├── src/
│   ├── main.tsx               # Application entry point with ErrorBoundary
│   ├── index.css              # Custom scrollbars, scanlines & animations
│   ├── types/
│   │   └── arcade.ts          # Badges, Swag Tiers, Profiles & Analytics interfaces
│   ├── data/
│   │   ├── defaultBadges.ts   # Official Season 2026 badges catalogue
│   │   ├── sampleProfiles.ts  # Initial clean account profile configuration
│   │   └── swagTiers.ts       # Official swag reward tiers & prize definitions
│   ├── utils/
│   │   ├── calculator.ts      # Points math, streak calculation & frequency engine
│   │   ├── scraper.ts         # Direct profile URL fetcher, multi-pass HTML parser & sanitizer
│   │   └── storage.ts         # LocalStorage persistence, schema validation & JSON export
│   └── components/
│       ├── ErrorBoundary.tsx          # Top-level runtime error recovery
│       ├── Navbar.tsx                 # Header navigation, brand & score indicator
│       ├── ProfileSearchBanner.tsx    # Direct URL profile synchronizer & automatic account saver
│       ├── ScoreOverviewCard.tsx      # Master score counter, formula cards & 3D token
│       ├── ThreeArcadeToken.tsx       # Interactive Three.js WebGL 3D coin & 2.5D fallback
│       ├── BadgeFrequencySection.tsx  # Velocity charts, weekly cadence & streak calendar
│       ├── BadgesExplorer.tsx         # Badges list, search, category filters & quick actions
│       ├── SwagMilestones.tsx         # Official reward packages & milestone tracker
│       ├── PaceSimulator.tsx          # "What-If" interactive weekly speed simulator
│       ├── ProfileSwitcherModal.tsx   # Account switcher, creator & JSON backup manager
│       ├── AddBadgeModal.tsx          # Official catalogue picker & custom badge creator
│       └── SettingsModal.tsx          # Skill badge ratio & calculation rules
```

---

## 🔒 Security & Data Privacy

* **100% Client-Side**: All calculations and data storage occur exclusively inside your local browser (`localStorage`). No credentials or personal tracking data are sent to any remote database.
* **XSS Sanitization**: Input strings are sanitized to neutralize HTML injection, control characters, and unsafe protocol URIs.
* **Error Resilience**: A dedicated React Error Boundary catches uncaught rendering glitches, providing instant reload or safe defaults reset.

---

## 📄 License
This project is open source and available under the [MIT License](LICENSE).

---

> ⚠️ **Disclaimer:** This application is an independent community project developed for Google Cloud practitioners and participants of the Google Cloud Arcade program. It is not officially affiliated with or endorsed by Google LLC. All Google Cloud trademarks and badge marks are property of Google LLC.
