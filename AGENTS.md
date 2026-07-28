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

## 3. Agentic Development Setup
Este proyecto se desarrolla mediante el arnés **Oh My Pi (OMP)**.

### Modelos AI (config.yml)
- **Default:** `github-copilot/claude-sonnet-4.6`
- **Smol (rápido):** `github-copilot/claude-haiku-4.5`
- **Slow (análisis):** `github-copilot/gpt-5.5`

### Skills & MCP Servers
- **Skills (Globales en `~/.agents/skills/`):**
    - `caveman`: Compresión de respuestas (ahorro de tokens).
    - `frontend-design`: Guías de diseño UI.
- **MCP Servers (`mcp.json`):**
    - `context7`: Gestión de contexto (requiere `CONTEXT7_API_KEY`).
    - `codegraph`: Indexado semántico del código (preparado).

### Variables de Entorno (`.env`)
Configura las siguientes variables en `~/.omp/agent/.env`:
- `CONTEXT7_API_KEY`: Tu clave de Upstash.
- `TAVILY_API_KEY`: Para capacidades de búsqueda web.

## 4. Agent Interaction Rules
- **Conciseness:** Be terse. Prioritize code over explanation.
- **Commands:** Use `npx expo ...`.

## 5. Testing & Emulation
- **Target:** Android Studio Emulator.
- **Verification:** Before launching, ensure `adb` identifies the emulator via `adb devices`.
- **Workflow:** Always verify functionality on the emulator before committing changes to Git.

---
*Last updated: 2026-07-26*
