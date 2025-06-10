# ViralScope MVP

ViralScope es una aplicación web que utiliza IA para analizar videos y generar shorts con potencial viral.

## 🚀 Características

- **Análisis de contenido**: Utiliza IA para analizar videos y detectar momentos con potencial viral
- **Generación de shorts**: Crea automáticamente clips cortos optimizados para redes sociales
- **Interfaz intuitiva**: Proceso paso a paso fácil de usar
- **Análisis de emociones**: Detecta emociones y palabras clave en el contenido
- **Score viral**: Calcula el potencial viral de cada momento

## 🛠️ Tecnologías utilizadas

- **React 18**: Framework principal
- **Tailwind CSS**: Estilos y diseño responsivo
- **Lucide React**: Iconos modernos
- **Create React App**: Configuración base

## 📦 Instalación

1. Clona o descarga este proyecto
2. Abre la terminal en la carpeta del proyecto
3. Instala las dependencias:

```bash
npm install
```

4. Inicia el servidor de desarrollo:

```bash
npm start
```

5. Abre [http://localhost:3000](http://localhost:3000) en tu navegador

## 📁 Estructura del proyecto

```
viralscope-mvp/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── ViralScopeMVP.js      # Componente principal
│   │   └── ViralScoreDisplay.js   # Componente para mostrar score viral
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## 🎯 Cómo usar

1. **Subir video**: Arrastra un archivo de video o pega un enlace de YouTube/Twitch
2. **Análisis**: La IA analizará el contenido automáticamente
3. **Ver clips**: Revisa los momentos detectados con potencial viral
4. **Generar short**: Selecciona un clip para generar un short optimizado

## 🔧 Scripts disponibles

- `npm start`: Inicia el servidor de desarrollo
- `npm build`: Construye la aplicación para producción
- `npm test`: Ejecuta los tests
- `npm eject`: Expone la configuración de Create React App

## 📝 Estado actual (MVP)

Esta es una versión de demostración que simula el funcionamiento de la aplicación. Las funcionalidades de análisis de IA están simuladas para propósitos de prototipo.

## 🚧 Próximas características

- Integración con APIs de IA reales
- Procesamiento de video real
- Exportación de clips
- Integración con plataformas sociales
- Dashboard de analytics

## 🤝 Contribuir

Este es un proyecto MVP. Si quieres contribuir o tienes sugerencias, no dudes en crear un issue o pull request.

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.