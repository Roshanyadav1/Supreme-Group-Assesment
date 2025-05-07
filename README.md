# Supreme Group Website Frontend

This repository contains the frontend implementation of the Supreme Group website, developed as part of a technical assessment. The project focuses on building a performant and maintainable frontend based on a provided design.

Live: https://supreme-group-assesment.vercel.app/

## 📝 Project Overview

This implementation follows modern frontend development practices to create a responsive, accessible, and performant website for Supreme Group. The project closely adheres to the provided Figma design specifications with attention to pixel-perfect implementation across devices.

## 🛠️ Technology Stack

### Framework: React with Vite
React with Vite was chosen for this implementation due to:
- React's component-based architecture promoting reusability
- Vite's extremely fast development server with hot module replacement
- Efficient production builds with optimized asset handling
- Better developer experience with instant server start

### Language: TypeScript
TypeScript was used to ensure type safety, better developer experience, and reduced runtime errors.

### Styling: Tailwind CSS
Tailwind CSS was selected for its:
- Utility-first approach that accelerates development
- Built-in responsive design system
- Lower CSS bundle size through purging unused styles
- Consistency in design implementation

### State Management
React's Context API was used for state management as it provides:
- Sufficient capabilities for the website's complexity level
- No additional dependencies required
- Simpler implementation than Redux for this scale of application

## 🚀 Project Setup

### Prerequisites
- Node.js (v16.x or higher)
- npm or yarn

### Installation
1. Clone the repository
```bash
git clone https://github.com/yourusername/supreme-group-frontend.git
cd supreme-group-frontend
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Run development server
```bash
npm run dev
# or
yarn dev
```

4. Build for production
```bash
npm run build
# or
yarn build
```

5. Preview production build
```bash
npm run preview
# or
yarn preview
```

## 📁 Project Structure

The project follows a modular component architecture:

```
src/
├── assets/            # Static assets like icons, images
├── components/        # Reusable UI components
│   ├── Button/        # Button component
│   │   └── index.tsx
│   ├── Image/         # Image component
│   │   └── index.tsx
│   └── Input/         # Form input components
│       └── index.tsx
├── layout/            # Layout components
│   ├── components/    # Layout-specific components
│   │   ├── Footer.tsx # Footer component
│   │   └── Header.tsx # Header component
│   ├── constants/     # Layout-related constants
│   │   └── index.tsx
│   ├── hooks/         # Layout-specific hooks
│   │   └── useHeader.tsx
│   └── index.tsx      # Main layout wrapper
├── pages/             # Page components
│   └── home/          # Home page components
│       ├── components/  # Home-specific components
│       ├── constants/   # Home page constants
│       ├── hooks/       # Custom hooks for home page
│       └── index.tsx    # Main home page component
├── App.tsx            # Main application component
├── index.css          # Global CSS styles
├── main.tsx           # Application entry point
└── vite-env.d.ts      # Vite environment types
```

This architecture supports:
- Component reusability across the application
- Clear separation of concerns
- Easy maintenance and scalability
- Isolated testing of components

## 📱 Responsive Design Strategy

The implementation follows a mobile-first approach using Tailwind's responsive breakpoints:
- `sm`: 640px and above (small devices)
- `md`: 768px and above (medium devices)
- `lg`: 1024px and above (large devices)
- `xl`: 1280px and above (extra-large devices)
- `2xl`: 1536px and above (2x-large devices)

Key responsive strategies implemented:
- Fluid typography that scales appropriately across devices
- Flexible grid layouts using CSS Grid and Flexbox
- Strategic component stacking on smaller screens
- Conditional rendering for different device sizes when necessary
- Touch-friendly interaction areas on mobile devices

## ⚡ Performance Optimization

Several performance optimization techniques have been implemented:

1. **Code Organization**: Components are structured for optimal reusability and maintainability
2. **Image Optimization**: 
   - Optimized image sizes and formats
   - Proper image loading strategies
3. **CSS Optimization**:
   - Tailwind's PurgeCSS to eliminate unused styles
   - Strategic use of utility classes
4. **JavaScript Optimization**:
   - Clean component architecture
   - Efficient state management with Context API

## ♿ Accessibility Considerations

The implementation prioritizes accessibility through:

1. **Semantic HTML**: Using appropriate HTML5 elements for content structure
2. **ARIA Attributes**: Adding ARIA roles, states, and properties where necessary
3. **Keyboard Navigation**: Ensuring all interactive elements are keyboard accessible
4. **Focus Management**: Visible focus indicators and logical tab order
5. **Color Contrast**: Meeting WCAG AA standards for text visibility

## 🤔 Development Decisions

During implementation, the following decisions were made:

1. **Common Components**: Created reusable Button, Image, and Input components to maintain consistency
2. **Layout Structure**: Separated layout components (Header, Footer) from page content
3. **Custom Hooks**: Implemented custom hooks like useHeader to encapsulate layout-specific logic
4. **Tailwind Styling**: Used Tailwind utility classes directly without additional CSS frameworks
5. **No Animation Libraries**: Implemented necessary animations using CSS transitions and Tailwind

## 🧩 Challenges and Solutions

### Challenge 1: Responsive Layout Implementation
**Solution**: Utilized Tailwind's responsive utility classes to create layouts that adapt seamlessly across device sizes.

### Challenge 2: Component Reusability
**Solution**: Designed common components with appropriate props to make them highly reusable throughout the application.

### Challenge 3: Performance Optimization
**Solution**: Structured the application to minimize re-renders and optimize asset loading.

## 🔮 Potential Improvements

Given more time, the following improvements could be implemented:

1. **Enhanced Testing**: Adding comprehensive unit and integration tests
2. **Internationalization**: Adding multi-language support
3. **Improved Animations**: Enhancing user experience with more sophisticated animations
4. **Performance Monitoring**: Implementing analytics for real-user performance metrics
5. **Accessibility Auditing**: More thorough accessibility testing and improvements

## 🌐 Live Demo

The project is deployed at: [https://supreme-group-assesment.vercel.app/](https://supreme-group-assesment.vercel.app/)

## 📞 Contact

For any questions or clarifications regarding this implementation, please contact:

[Roshan Yadav] - [mrroshan738949@gmail.com]
