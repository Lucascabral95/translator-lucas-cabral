<p align="center">
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="React Logo" width="180"/>
</p>

# 🌍 Traductor Multilenguaje

## Descripción general

**Traductor Multilenguaje** es una aplicación web desarrollada con [React](https://reactjs.org/) y [TypeScript](https://www.typescriptlang.org/), diseñada para ofrecer traducciones rápidas y precisas entre múltiples idiomas. La aplicación cuenta con una interfaz intuitiva, diseño responsivo y funcion avanzadas como reproducción de audio y copiado al portapapeles.

---

## ⚙️ Características principales

- **Traducción en Tiempo Real:** Obtén traducciones instantáneas mientras escribes
- **Soporte Multilenguaje:** Traduce entre una amplia variedad de idiomas
- **Interfaz Intuitiva:** diseño limpio y fácil de usar
- **Funciones Avanzadas:**
  - Reproducción de audio del texto traducido
  - Copiado al portapapeles con un solo clic
  - Intercambio rápido entre idiomas
  - diseño responsivo para todos los dispositivos
- **Tema Oscuro:** Modo oscuro para una experiencia visual cómoda
- **Optimización de Rendimiento:** Carga rápida y uso eficiente de recursos

---

## 🚀 Tecnologías Utilizadas

- **Frontend:** React 18, TypeScript, Vite
- **Estilización:** CSS Modules, Sass
- **Gestión de Estado:** React Hooks, Context API
- **UI Components:** React Icons, React Hot Toast
- **API de Traducción:** Google Cloud Translation API
- **Herramientas de Desarrollo:** ESLint, Prettier, Git
- **Contenedores:** Docker (opcional para despliegue)

---

## 🛠️ Instalación

1. **Clona el repositorio:**

   ```bash
   git clone https://github.com/tu-usuario/traductor-multilenguaje.git
   cd traductor-multilenguaje
   ```

2. **Instala las dependencias:**

   ```bash
   npm install
   ```

3. **Configura las variables de entorno:**
   Crea un archivo `.env` en la raíz del proyecto con:

   ```
   VITE_GOOGLE_TRANSLATE_API_KEY=tu_api_key_aquí
   ```

4. **Inicia el servidor de desarrollo:**

   ```bash
   npm run dev
   ```

5. **Abre tu navegador en:**
   ```
   http://localhost:5173
   ```

---

## 📁 Estructura del Proyecto

```
src/
├── components/           # Componentes de React
│   ├── ActionButtons/    # Botones de acción (copiar, audio, etc.)
│   ├── Footer/           # Pie de página
│   ├── LanguageSelector/ # Selector de idiomas
│   ├── Main/             # Componente principal
│   ├── TranslateSection/ # Sección de traducción
│   └── TranslationCard/  # Tarjeta de traducción
├── constants/           # Constantes de la aplicación
├── hooks/               # Custom Hooks
├── types/               # Tipos de TypeScript
└── utils/               # Utilidades
```

---

## 🌐 Idiomas Soportados

- Español
- Inglés
- Francés
- Alemán
- Italiano
- Portugués
- Y muchos más...

---

## 🛠️ Despliegue

### Construir para producción:

```bash
npm run build
```

### Vista previa de producción:

```bash
npm run preview
```

### Desplegar en Vercel/Netlify:

1. Conecta tu repositorio a la plataforma de despliegue
2. Configura las variables de entorno
3. El despliegue se realizará automáticamente con cada push

---

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Sigue estos pasos:

1. Haz un fork del repositorio
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Haz commit de tus cambios (`git commit -am 'Añade nueva funcionalidad'`)
4. Haz push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

---

## 📄 Licencia

Este proyecto está bajo la licencia [MIT](LICENSE).

---

## 📬 Contacto

- **Autor:** Lucas Cabral
- **LinkedIn:** [Lucas Cabral](https://www.linkedin.com/in/lucas-gastón-cabral/)
- **Portfolio:** [Ver Portfolio](https://portfolio-web-dev-git-main-lucascabral95s-projects.vercel.app/)
- **GitHub:** [@Lucascabral95](https://github.com/Lucascabral95)

---

<p align="center">
  Hecho con ❤️ por Lucas Cabral
</p>
