# Steel Stallion

A vintage big bikes company website built with modern web technologies and Scandinavian-inspired design aesthetics.

## About

Steel Stallion is a premium vintage motorcycle company specializing in classic bike restorations, sales, and services. This website showcases the company's heritage, fleet collection, craftsmanship, and provides contact information for enthusiasts and collectors.

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first styling
- **shadcn/ui** - UI component library
- **Lucide React** - Icon library

## Design

The website features a Nordic-inspired design with:

- **Typography**: Oswald (display) + Work Sans (body)
- **Color Palette**: Dark backgrounds with warm amber accents
- **Decorative Elements**: Nordic-inspired motifs and line decorations
- **Animations**: Smooth scroll reveal effects using Intersection Observer

## Project Structure

```
src/
├── components/         # React components
│   ├── ui/            # shadcn/ui components
│   ├── Navbar.tsx
│   ├── HeroSection.tsx
│   ├── HeritageSection.tsx
│   ├── FleetSection.tsx
│   ├── CraftsmanshipSection.tsx
│   ├── TestimonialsSection.tsx
│   ├── ContactSection.tsx
│   └── Footer.tsx
├── hooks/             # Custom React hooks
│   └── useScrollReveal.ts
├── pages/             # Page components
├── lib/               # Utility functions
└── style.md           # Design style guide
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd steel-stallion

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build

```bash
# Production build
npm run build

# Preview production build
npm run preview
```

## Features

- Responsive design for all screen sizes
- Smooth scroll navigation
- Scroll reveal animations
- Interactive fleet gallery with category filtering
- Testimonials carousel
- Contact form with Google Maps integration
- Transparent navbar with scroll detection

## License

All rights reserved.
