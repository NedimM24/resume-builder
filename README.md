# 📄 React Resume Builder

A simple React application that allows users to input their personal, educational, and professional experience to generate a formatted résumé.

This project was built as part of a React learning exercise to practice component structure, state management, and props.

---

## Features

- Add personal information (name, email, phone, address, title)
- Add education history
- Add work experience
- Dynamic résumé preview updates in real time
- Accordion-style UI (only one section open at a time)
- Multiple education and experience entries supported

---

## Concepts Practiced

- React functional components
- `useState` hook
- Controlled components (form inputs)
- Lifting state up
- Passing data via props
- Conditional rendering
- Handling form submissions
- Dynamic list rendering with `.map()`

---

## Project Structure

## Project Structure

```text
src/
│
├── components/
│   ├── ResumeBuilder.jsx
│   ├── Display.jsx
│   └── resumebuilder-children/
│       ├── PersonalInfo.jsx
│       ├── Education.jsx
│       └── Experience.jsx
│
├── App.jsx
├── App.css
└── index.css
```

## How It Works

### User Input

Users enter information into form sections:

- Personal Info  
- Education  
- Experience  

---

### State Management

Each section manages its own local state and passes data up to the parent component (`App.jsx`).

---

### Submit Flow

On submit:

- Data is sent to the parent component  
- Stored in a centralized `resume` state object  

---

### Display

The `Display` component renders the résumé dynamically based on the current state.

---

## Notes

- This project uses React Strict Mode, which may cause some functions to run twice during development. This is expected behavior.  
- Styling is kept simple as the focus is on React fundamentals.  
- Responsive design (media queries) is not included.  

---

## Future Improvements

- Add edit functionality for submitted sections  
- Add delete buttons for education and experience entries  
- Save data using localStorage  
- Improve styling and layout  
- Add print-friendly formatting  
- Add animations for accordion transitions  

---

## Getting Started

### Clone the repository

```bash
git clone https://github.com/your-username/react-resume-builder.git


 React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
# resume-builder
