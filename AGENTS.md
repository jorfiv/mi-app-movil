# Project Agent Directives

## 1. Expo Context
Read the exact versioned docs at https://docs.expo.dev/versions/v57.0.0/ before writing any code. Expo SDK 57 is the source of truth.

## 2. Tech Stack & Standards
- **Language:** TypeScript strictly.
- **Component Style:** Functional components only, using hooks.
- **Styling:** Use `StyleSheet` from `react-native` and `theme.ts`.
- **Architecture:** 
```text
src/
├── app/           ← Rutas (Expo Router)
├── screens/       ← Componentes de pantalla
├── context/       ← Estado global
├── styles/        ← Temas
└── components/    ← Componentes reutilizables
```

## 3. Agent Interaction Rules
- **Conciseness:** Be terse. Prioritize code over explanation.
- **Commands:** Use `npx expo ...`.

## 4. Development Harness
- Always check `package.json` for existing scripts.
- Ensure any new dependency is correctly installed via `npx expo install`.

## 5. Testing & Emulation
- **Target:** Android Studio Emulator.
- **Verification:** Before launching, ensure `adb` identifies the emulator via `adb devices`.
- **Workflow:** Always verify functionality on the emulator before committing changes to Git.

---
*Last updated: 2026-07-26*
