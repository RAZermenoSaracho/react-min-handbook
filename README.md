# React Minimal Handbook

A practical, hands-on React application built as a **living handbook** for learning and understanding core React concepts.

This project focuses on **how React actually works**, emphasizing mental models, data flow, side effects, and real-world behavior instead of abstract theory.

Each topic is presented in its own page with:
- clear explanations
- visual diagrams
- readable code snippets
- interactive live examples

---

## ✨ What this project is

- A **single React application**
- Structured as a **learning guide**, not a demo app
- Covers React from fundamentals to intermediate concepts
- Designed to be **read, explored, and extended**

---

## 🧠 Topics Covered

### Core Fundamentals
- JSX & Rendering
- Components
- Props
- Children
- Local state with `useState`

### React Hooks
- `useState`
- `useEffect`
- Dependency arrays
- Cleanup logic

### Architecture & Data Flow
- Prop Drilling (problem)
- Context API (solution)
- Custom hooks (`useTheme`)

### Side Effects & External Data
- Fetching data (HTTP / pull model)
- Real-time updates with WebSockets (push model)
- Network behavior & cleanup
- Development vs Production differences

---

## 🏗️ Tech Stack

- **React**
- **TypeScript**
- **Vite**
- **Tailwind CSS**
- **React Router**
- Native **fetch API**
- Native **WebSocket API**

No UI frameworks. No hidden abstractions.

---

## 📁 Project Structure

```txt
src/
├── app/
│   ├── layout/
│   │   └── MainLayout.tsx
│   └── router.tsx
│
├── components/
│   ├── PageContainer.tsx
│   ├── Sidebar.tsx
│   └── ui/
│       ├── Card.tsx
│       ├── ExampleBox.tsx
│       └── Input.tsx
│
├── context/
│   ├── ThemeContext.tsx
│   └── useTheme.ts
│
├── pages/
│   ├── Home.tsx
│   ├── jsx/
│   │   └── JSXRendering.tsx
│   ├── state/
│   │   └── UseState.tsx
│   ├── props/
│   │   └── PropsAndChildren.tsx
│   ├── context/
│   │   ├── PropDrillingExample.tsx
│   │   └── ContextExample.tsx
│   └── effects/
│       ├── UseEffect.tsx
│       └── DataFetching.tsx
│
├── App.tsx
├── main.tsx
└── index.css
```

---

## 🚀 Getting Started

### Install dependencies
```bash
npm install
```

### Run the app in development
```bash
npm run dev
```

This runs the app in **React development mode**, including Strict Mode.

---

## 🏁 Production Build

### Build the app
```bash
npm run build
```

This generates a production-ready build inside:

```txt
dist/
```

### Preview the production build locally
```bash
npm run preview
```

This serves the actual production output (no development-only behavior).

---

## ⚠️ About Console Warnings

Some sections (especially WebSockets) may show warnings in development mode.

This is expected and intentional.

Reasons include:
- React Strict Mode double-invoking effects
- WebSocket handshake behavior
- Network restrictions (firewalls, DNS, VPNs)

If the UI updates correctly, **the data flow is working**.

> Console warnings are signals, not always bugs.

---

## 🎯 Learning Philosophy

This project is built around these principles:

- UI is a function of state
- State changes trigger re-renders
- Effects synchronize React with the outside world
- Cleanup logic is mandatory
- Architecture matters as applications scale

---

## 🌍 Deployment

This project is ready to be deployed to:
- Vercel
- Netlify
- Any static hosting provider

Typical deployment flow:
```bash
npm run build
```

Deploy the generated `dist/` folder.

---

## 👥 Who this project is for

- Developers learning React fundamentals
- Developers transitioning to React from other frameworks
- Anyone who wants to **understand React deeply**, not just use it

---

## 🧠 Final Note

If you understand the concepts demonstrated in this project, you are already operating at an **intermediate React level**.

This handbook is meant to grow as new concepts are learned.

---

Happy learning 🚀
