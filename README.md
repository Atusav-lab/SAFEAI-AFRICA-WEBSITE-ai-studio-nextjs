# SAFE AI Africa Website

Welcome to the official repository for the **SAFE AI Africa** platform—an innovative AI hub tailored for African institutions, providing comprehensive data analytics, drug discovery solutions, educational technology, and advanced AI training.

## 🌍 About The Project

SAFE AI Africa aims to empower Africa through artificial intelligence by showcasing groundbreaking products and research, connecting visionary leadership, and advancing responsible AI implementation.

The website provides interactive demonstrations, embedded animations, and clean layouts to showcase products like **SAFESeq**, **SAFEKemia**, and **Safelytics**.

## 💻 Tech Stack

This project is built using modern web development practices and tools:

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **3D Graphics**: [Spline](https://spline.design/) (via `@splinetool/react-spline`)
- **Icons**: [Lucide React](https://lucide.dev/)
- **UI Architecture**: Component-driven architecture using `class-variance-authority`, `clsx`, and `tailwind-merge` for scalable, reusable UI components.

## ✨ Key Features & Implementations

- **Interactive 3D Robot Animation**: A fully responsive Spline 3D canvas natively embedded in the Hero section to immediately capture user attention and illustrate cutting-edge AI.
- **Dynamic Routing & Pages**:
  - `Hero & What We Do`: Seamless layout utilizing Framer Motion for scroll-based appearances and video integration.
  - `Leadership Team`: A finely-tuned, responsive grid implementing strict aspect ratio constraints to ensure all headshots are uniformly cropped and object-positioned correctly.
  - `Solutions / Products`: Clean grids designed to gracefully scale down to mobile devices.
- **Tailwind v4 Integration**: Custom PostCSS pipeline configured (`postcss.config.mjs`) to perfectly support the newest Tailwind v4 utilities in Next.js 16.

## 🚀 Getting Started

To get the project running locally on your machine, follow these steps:

### 1. Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v18 or higher)
- Git

### 2. Installation

Clone the repository and install the dependencies:
```bash
git clone https://github.com/Atusav-lab/SAFEAI-AFRICA-WEBSITE-ai-studio-nextjs.git
cd SAFEAI-AFRICA-WEBSITE-ai-studio-nextjs/safeai-react
npm install
```

### 3. Development Server

Start the Next.js development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. The development server supports hot-reloading for immediate feedback while coding.

## 🛠️ Project Structure
- `src/app/`: Next.js App Router endpoints (`page.tsx`, `layout.tsx`, etc.)
- `src/components/`: Reusable React components (`Header.tsx`, `Footer.tsx`, and UI primitive components like `SplineScene`).
- `public/SAFEAI_ASSETS/`: Static assets, images, team headshots, and media.

## 📄 License
All rights reserved © SAFE AI Africa.
