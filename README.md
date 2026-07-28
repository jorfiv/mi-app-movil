# Buy Notebook

Aplicación móvil de e-commerce desarrollada con React Native y Expo.

## 🚀 Cómo empezar

### Requisitos previos
- Node.js (v20+ recomendado)
- Android Studio con emulador configurado o dispositivo físico con Expo Go.

### Instalación
1. Clonar el repositorio:
   ```bash
   git clone https://github.com/jorfiv/mi-app-movil
   cd mi-app-movil
   ```

2. Instalar dependencias:
   ```bash
   npm install
   ```

3. Iniciar el servidor de desarrollo:
   ```bash
   npx expo start
   ```

## 🏗 Arquitectura del Proyecto
```text
mi-app-movil/
├── src/
│   ├── app/           ← Rutas (Expo Router)
│   ├── screens/       ← Componentes de pantalla
│   ├── context/       ← Estado global (CartContext)
│   ├── styles/        ← Temas y constantes visuales
│   └── components/    ← Componentes reutilizables
└── AGENTS.md          ← Reglas y contexto específico del proyecto
```

## 🤖 Arquitectura del Agente (OMP)
```text
 ~/.omp/
 └── agent/
     ├── config.yml      ← modelos y roles
     ├── mcp.json        ← servidores MCP
     ├── .env            ← API Keys (CONTEXT7_API_KEY, etc.)
     └── skills/         ← skills instaladas globalmente
         ├── caveman/
         └── frontend-design/
```
