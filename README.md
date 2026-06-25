# 🏎️ F1 Central

**F1 Central** es una plataforma web de alto rendimiento diseñada para fanáticos de la máxima categoría del automovilismo. El proyecto ofrece una experiencia inmersiva para explorar la grilla actual de pilotos, conocer las escuderías más potentes y administrar un equipo personalizado de favoritos en tiempo real.

---

## 📋 Descripción del Proyecto y API Integrada

Este sitio ha sido desarrollado utilizando **Next.js** (App Router) y **Tailwind CSS**, enfocándose en la velocidad de navegación y una arquitectura modular de componentes modernos. 

Para esta versión (TP N°2), la aplicación implementa una **estrategia híbrida de renderizado**: consume datos en tiempo real desde el servidor y gestiona la persistencia de acciones del usuario en el navegador.

### 🛠️ Integración de API Externa
El proyecto consume de forma directa la API REST pública de **[OpenF1](https://openf1.org/)**, específicamente los *endpoints* de telemetría de conductores (`/drivers?session_key=latest`). A partir de estos datos vivos, el sistema:
* Filtra y limpia los datos crudos para evitar duplicados en la grilla principal.
* Vincula la información de la API (nombres oficiales y headshots) con estadísticas y descripciones históricas almacenadas de forma local.

### Características Principales:
* **Navegación Dinámica y Anidada:** Fichas técnicas personalizadas para cada piloto generadas mediante rutas dinámicas y secciones especiales como el "Hall of Fame" (Leyendas).
* **Estado Global (Context):** Un contexto unificado (`FavoritesContext`) que permite reaccionar a las interacciones del usuario en múltiples componentes independientes (botones de acción, grilla y contadores).
* **Persistencia Local (Local Storage):** Sincronización del estado con el navegador para asegurar que los pilotos elegidos en tu *Dream Team* permanezcan guardados incluso tras recargar la página (`F5`).
* **Optimización de Carga (UX):** Uso de componentes de carga nativos de Next.js (`loading.js`) sincronizados con animaciones de boxes para evitar pantallas congeladas mientras se esperan las respuestas de la API.

---

## 👥 Información del Equipo

| Dato | Detalle |
| :--- | :--- |
| **Nombre del Equipo** | Alt + f4 |
| **Proyecto** | TP N°2 - Programación 3 - Next.js |
| **Institución** | ITec Instituto Tecnológico Río Cuarto |

### 🏎️ Integrantes
* **Ulises Cabrera**
* **Pablo Abataneo**
* **Franco Bressan**
* **Leandro Odetto**

---

## 🚀 Tecnologías y Arquitectura

* **[Next.js](https://nextjs.org/)** - Framework de React (Ambos paradigmas: Server y Client Components).
* **[Tailwind CSS](https://tailwindcss.com/)** - Motor de estilos adaptable de alta velocidad.
* **[React Context API]** - Manejo de estado global persistido.
* **[OpenF1 API]** - Consumo de datos JSON asincrónicos en tiempo real.

---

## ▶️ Instrucciones para correr el proyecto en local

Para poner en marcha el monoplaza en tu computadora de desarrollo, seguí estos pasos:

1. **Cloná el repositorio:**

```bash
   git clone git@github.com:leandroitec/F1Central.git

```bash
npm install
npm run dev
