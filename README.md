# 🌟 My Portfolio Website

A modern, interactive portfolio website built with React and Vite, featuring stunning animations and a responsive design.

## ✨ Features

- **Modern Design**: Clean, professional interface with dark/light theme support
- **Interactive Animations**: Smooth animations and transitions using Framer Motion
- **Responsive Layout**: Optimized for all devices and screen sizes
- **Performance Optimized**: Built with Vite for lightning-fast load times
- **Component Library**: Custom UI components with shadcn/ui integration
- **Animation Blocks**: Reusable animation components including:
  - Click Spark effects
  - Magnetic hover interactions
  - Pixel transitions
  - Particle backgrounds
  - Text animations (Fuzzy, Falling, Split, etc.)

## 🚀 Tech Stack

- **Frontend**: React 18, Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion, Custom CSS animations
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Deployment**: Vercel

## 🛠️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio-website.git
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 📁 Project Structure

```
src/
├── blocks/                 # Reusable animation blocks
│   ├── Animations/         # Interactive animations
│   ├── Backgrounds/        # Background effects
│   ├── Components/         # Complex components
│   └── TextAnimations/     # Text effect components
├── components/             # UI components
│   └── ui/                # shadcn/ui components
├── App.jsx                # Main application component
└── main.jsx               # Application entry point
```

## 🎨 Animation Blocks

### Animations
- **ClickSpark**: Interactive click effects
- **Magnet**: Magnetic hover interactions
- **PixelTransition**: Pixel-based transitions

### Text Animations
- **FuzzyText**: Glitch-style text effects
- **FallingText**: Gravity-based text animations
- **ScrollVelocity**: Speed-based scroll animations
- **SplitText**: Character-by-character animations
- **TrueFocus**: Focus-based text effects

### Backgrounds
- **Particles**: Interactive particle systems

## 🎯 Usage

Each animation block is designed to be modular and reusable:

```jsx
import { FuzzyText } from './blocks/TextAnimations/FuzzyText/FuzzyText';
import { ClickSpark } from './blocks/Animations/ClickSpark/ClickSpark';

function App() {
  return (
    <div>
      <FuzzyText text="Welcome to my portfolio" />
      <ClickSpark>
        <button>Click me!</button>
      </ClickSpark>
    </div>
  );
}
```

## 🌐 Live Demo

Visit the live website: [Your Portfolio URL](https://your-portfolio.vercel.app)



---

⭐ **If you found this project helpful, please give it a star!** ⭐