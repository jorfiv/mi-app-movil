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

## 🧠 Prompt Engineering
Esta aplicación ha sido desarrollada mediante una colaboración agéntica. Se realizaron más de 25 interacciones clave para definir la arquitectura, diseño y funcionalidad. Los prompts más importantes que definieron el curso del proyecto son:

1. **Setup Inicial**: "Verifica que el entorno esté listo, crea la estructura de carpetas (src/screens, etc) e inicializa el proyecto React Native con Expo."
2. **Identidad Visual**: "Crea una pantalla de bienvenida personalizada con identidad propia: nombre 'Buy Notebook', logo propio, colores definidos y estilo."
3. **Login Interactivo**: "Crea una pantalla de login interactiva con campos de usuario y contraseña. No necesita backend real, pero sí feedback visual al presionar el botón."
4. **Navegación**: "Configura Expo Router para navegar de WelcomeScreen a LoginScreen y luego a un Dashboard. Asegura que la arquitectura de navegación sea sólida."
5. **Estado del Carrito**: "Implementa el Dashboard con un catálogo de productos y un carrito global usando React Context, permitiendo agregar y quitar productos."
6. **Estilo Profesional**: "Aplica un tema pastel profesional (background #E0F2F1) a toda la app. Asegura que los componentes usen los colores del tema."

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
     ├── .env            ← API Keys
     └── skills/         
         ├── caveman/
         └── frontend-design/
```
