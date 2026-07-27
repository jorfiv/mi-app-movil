# Project Agent Directives

## 1. Expo Context
Read the exact versioned docs at https://docs.expo.dev/versions/v57.0.0/ before writing any code. Expo SDK 57 is the source of truth.

## 2. Tech Stack & Standards
- **Language:** TypeScript strictly. Use path aliases (`@/components/`) defined in `tsconfig.json`.
- **Component Style:** Functional components only, using hooks. NEVER use class components.
- **Styling:** Use `StyleSheet` from `react-native`. Keep styles colocated within the component file unless they are shared.
- **Architecture:** Feature-based directory structure inside `src/`. Components → `src/components/`, Screens → `src/screens/`.

## 3. Agent Interaction Rules
- **Conciseness:** Be terse. Prioritize code over explanation.
- **Context:** Always assume you are inside an Expo project environment.
- **Commands:** When suggesting commands, use `npx expo ...`.
- **Caveman Mode:** If active, respect the brevity constraints.

## 4. Development Harness
- Always check `package.json` for existing scripts before suggesting new ones.
- Ensure any new dependency is correctly installed via `npx expo install`.

---
*Last updated: 2026-07-26*
