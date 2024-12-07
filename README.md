AmbuAlert 🚑
Plataforma de emergencias: Página web y app móvil

Descripción del Proyecto
AmbuAlert es una plataforma diseñada para atender y gestionar emergencias de manera eficiente. El objetivo es ofrecer una herramienta que permita a los usuarios reportar emergencias, acceder a recursos útiles y conectarse rápidamente con los servicios de emergencia desde cualquier dispositivo.

Descripción del Proyecto
Facilitar la gestión de emergencias a través de una interfaz intuitiva.
Ofrecer funcionalidades tanto en la versión web como en la aplicación móvil.
Proveer herramientas en tiempo real para reportar incidentes y acceder a información crítica.
Requisitos y Funcionalidades.

1. Funcionalidades Principales
Versión Web
Botón de emergencia: Un botón destacado que conecta directamente con los números de emergencia locales (ej. 911).
Formulario de reporte: Permite a los usuarios describir el tipo de emergencia y su ubicación.
Mapa interactivo: Mostrar en tiempo real la ubicación del usuario (si otorga permiso) y hospitales, estaciones de policía y bomberos cercanos.
Información de primeros auxilios: Sección con guías rápidas para actuar en emergencias comunes como RCP, heridas o quemaduras.
Panel de estadísticas: Información sobre emergencias recientes en la zona (opcional).
Reloj en tiempo real: Mostrar la hora actual para sincronizar operaciones de emergencia.
Versión Móvil (App)
Geolocalización avanzada: Acceso automático a la ubicación del usuario para facilitar el envío de ambulancias.
Notificaciones push: Alertas sobre emergencias locales o condiciones climáticas extremas.
Llamadas rápidas: Botones preconfigurados para contactar a familiares, 911 o servicios locales.
Modo offline: Acceso limitado a recursos sin conexión (guías de primeros auxilios).

2. Diseño e Interfaz
HTML y CSS: Diseño limpio, adaptativo (responsive) y accesible.
Colores y temas: Paleta enfocada en tonos rojos, blancos y grises, evocando confianza y urgencia.
Versiones multiplataforma: Diseño adaptable para navegadores y dispositivos móviles (iOS y Android).

3. Funcionalidades de JavaScript
Formulario dinámico: Validación en tiempo real de los datos ingresados por el usuario.
Alertas interactivas: Mensajes para confirmar el envío de reportes.
Reloj en tiempo real: Mostrar la hora actual en todas las páginas.
Carga simulada: Indicador visual al enviar formularios o activar funcionalidades.

4. Extensiones Futuras
Autenticación de usuario: Registro y login para guardar reportes y acceder a un historial de emergencias.
Seguimiento de emergencias: Sistema para rastrear la llegada de servicios como ambulancias.
IA de soporte: Chatbot para guiar al usuario según el tipo de emergencia reportada.
Multilenguaje: Disponibilidad en varios idiomas (español, inglés, etc.).

5. Tecnologías Utilizadas
Frontend: HTML, CSS, JavaScript.
Backend (futuro): Node.js, Express.js.
Base de datos (futuro): MongoDB o Firebase.
Herramientas móviles: Framework como React Native o Flutter para la app.






Beneficios de colaborar en el proyecto AmbuAlert -
Impacto positivo:
Contribuirás a una plataforma que podría salvar vidas al facilitar el acceso a servicios de emergencia. Es una oportunidad de trabajar en algo significativo y con propósito.

Portafolio profesional:
Podrás agregar tu trabajo a tu portafolio, destacando tu experiencia en el diseño de una aplicación web y móvil con un enfoque en UX/UI. Perfecto para mostrar habilidades en diseño orientado a la salud y la tecnología.

Colaboración en equipo:
Trabajarás en un equipo multidisciplinario, aprendiendo y compartiendo ideas con programadores y otros profesionales. ¡Una gran oportunidad para networking y experiencia colaborativa!

Reconocimiento:
Tu nombre aparecerá en los créditos del proyecto, dándote visibilidad si el proyecto se publica. Esto puede ser un gran punto a tu favor para futuros empleadores o clientes.

Flexibilidad:
Podrás trabajar de forma remota, adaptando tus horarios según tu disponibilidad. Nos enfocamos en resultados, no en tiempos rígidos.

Oportunidad de aprendizaje:
Si estás interesado/a, también puedes aprender más sobre el desarrollo web y cómo se integra el diseño en las funcionalidades técnicas.

Posibilidad de crecimiento:
Si el proyecto crece y se convierte en algo más grande, podrías formar parte del equipo de manera más permanente o incluso recibir compensaciones futuras.

# Estructura del proyecto
```
public/                     # Archivos públicos y estáticos
src/                        # Código fuente principal
│
├── assets/                 # Archivos estáticos como imágenes, íconos, etc.
│
├── components/             # Componentes reutilizables de la aplicación
│
├── hooks/                  # Hooks personalizados
│
├── layout/                 # Componentes de Layout (Header, Footer, Sidebar)
│
├── pages/                  # Páginas principales de la aplicación
│
├── routes/                 # Configuración de rutas
│
├── types/                  # Definiciones de tipos y modelos (TypeScript)
│
├── App.tsx                 # Componente principal de la aplicación
├── index.css               # Estilos globales de la aplicación
├── main.tsx                # Punto de entrada principal
└── vite-env.d.ts           # Archivo de configuración para Vite y TypeScript

```
## 📁 Descripción de Carpetas y Archivos

### `public/`

- Contiene archivos estáticos públicos como íconos, imágenes y otros recursos que no pasan por el proceso de bundling.

### `src/`

- `assets/`: Recursos estáticos como imágenes, íconos, y otros elementos gráficos.

- `components/`: Componentes reutilizables y pequeños bloques de la interfaz de usuario (UI).

- `hooks/`: Hooks personalizados de React para lógica reutilizable.

- `layout/`: Componentes de layout que estructuran la aplicación, como `Header`, `Footer` y `Sidebar`.

- `pages/`: Páginas completas de la aplicación (ejemplo: Login, Register, Home).

- `routes/`: Configuración centralizada de rutas de navegación.

- `types/`: Definiciones de tipos y modelos para facilitar el uso de TypeScript.

### Archivos principales:

- `App.tsx`: Componente raíz donde se configuran las rutas y se integran todos los componentes.

- `index.css`: Archivo de estilos globales de la aplicación.

- `main.tsx`: Punto de entrada donde se renderiza la aplicación principal.

- `vite-env.d.ts`: Archivo de configuración necesario para Vite y TypeScript.

## 🚀 Cómo usar esta estructura
1. Reutilización de componentes:
    - Guarda componentes pequeños y reutilizables en `components/`.
    - Ejemplo: Botones, Cards, Modales.
2. Páginas principales:
  - Crea nuevas páginas completas dentro de `pages/`.
  - Ejemplo: `Login.jsx`, `Register.jsx`, `Dashboard.jsx`.
3. Rutas:
  - Define y exporta todas las rutas en la carpeta `routes/` y conéctalas desde `App.tsx`.
4. Hooks personalizados:
  - Guarda hooks reutilizables (como lógica de autenticación o fetch) en `hooks/`.
5. Layout de la aplicación:
  - Usa componentes en `layout/` (como `Header` y `Footer`) para mantener una estructura consistente.
6. Tipado con TypeScript:
  - Centraliza interfaces y tipos en `types/` para mantener un código más limpio y fácil de mantener.


# Tecnologias para ejecutar el proyecto
## Node.js
Se debe tener instalado node.js para poder ejecutar el proyecto, se ejecuta el siguiente comando en el terminal para ver si se tiene node en el PC
```
node --version
```
la version de node utilizada actualmente es: 
```
v20.10.0
``` 

## npm
generalmente este gestor de paquetes viene instalado con node por defecto, se ejecuta el siguiente comando en el terminal para ver si se tiene npm en el PC
```
npm --version
```
la version de npm utilizada actualmente es:
```
10.8.2
```

# Comandos para inicializar el proyecto

## instalacion de dependencias
en la raiz del proyecto se ejecuta en la terminal el siguiente comando para instalar dependencias
```
npm install
```

## correr el servidor de desarrollo
en la raiz del proyecto se ejecuta el siguiente comando en la terminar para correr el servidor de desarrollo
```
npm run dev
```
se ingeesa a la ruta desde el navegador localhost:5173
