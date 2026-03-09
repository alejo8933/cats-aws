CATS - Galería Felina con React + AWS

Proyecto web desarrollado como parte de la guía GA-CATS-01 del programa ADSO - SENA.
Galería de razas de gatos construida con React + Vite, integrada con servicios de AWS.


- **Repositorio:** https://github.com/alejo8933/cats-aws
---

Arquitectura de la Solución

| Tier | Componente | Tecnología | Responsabilidad |
|------|-----------|------------|-----------------|
| Presentation | Navegador del usuario | React + Vite + Tailwind CSS | Interfaz de galería, modales, detalle de raza |
| Application | GitHub Actions + S3 Static | CI/CD automatizado | Build y despliegue automático |
| Data | AWS RDS MySQL | MySQL 8.4 | Tablas: Raza, FichaTecnica, Multimedia |
| Storage | AWS S3 | Bucket público | Imágenes JPG, video MP4, PDF ficha técnica |

---

Patrón de Arquitectura

Patrón utilizado: MVC (Model-View-Controller) adaptado a React**

- **Model:** `catService.js` — gestiona el acceso a datos desde S3 y RDS
- **View:** Componentes React (`CatCard`, `Gallery`, `CatDetail`) — renderizan la UI
- **Controller:** Hooks de React (`useState`, `useEffect`) — controlan el estado y flujo de datos

---

Patrones de Diseño Aplicados

- **Component Pattern:** La UI se divide en componentes reutilizables e independientes (`CatCard`, `CatDetail`, `Gallery`)
- **Repository Pattern:** `catService.js` abstrae el acceso a datos, desacoplando la UI de las fuentes de datos
- **Observer Pattern:** Los hooks `useState` y `useEffect` implementan reactividad en la UI
- **Singleton Pattern:** La instancia de configuración de AWS S3 es compartida en toda la aplicación
- **Factory Pattern:** Los componentes React actúan como fábricas de elementos del DOM

---

Principios SOLID Aplicados

| Principio | Descripción | Aplicación en CATS |
|-----------|-------------|-------------------|
| **S** - Single Responsibility | Un componente, una responsabilidad | `CatCard` solo renderiza la tarjeta; `catService.js` solo maneja peticiones |
| **O** - Open/Closed | Abierto para extensión, cerrado para modificación | Los componentes reciben props para ser extendidos sin modificar su código |
| **L** - Liskov Substitution | Los subtipos deben ser sustituibles | Los componentes UI pueden reemplazarse por variantes sin romper la app |
| **I** - Interface Segregation | Interfaces específicas mejor que generales | Cada servicio expone solo las funciones que necesita el consumidor |
| **D** - Dependency Inversion | Depender de abstracciones, no de concreciones | `catService.js` abstrae la fuente de datos; la UI no sabe si viene de API o S3 |

---

Tipo de Despliegue y Modelo de Nube

- **Tipo de despliegue:** PaaS (Platform as a Service)
- **Modelo de nube:** Nube pública (AWS)
- **Hosting frontend:** AWS S3 Static Website Hosting
- **Base de datos:** AWS RDS MySQL (IaaS administrado)
- **Almacenamiento multimedia:** AWS S3 Bucket `cats-sena-2026`

---

Estrategia CI/CD con GitHub Actions

El proyecto implementa integración y despliegue continuo mediante GitHub Actions:

1. **Trigger:** Cada `push` a la rama `main` activa el workflow
2. **Build:** Se instalan dependencias con `npm install` y se genera el build con `npm run build`
3. **Deploy:** Los archivos de la carpeta `dist/` se sincronizan automáticamente con el bucket S3

```yaml
on:
  push:
    branches: [main]
jobs:
  deploy:
    steps:
      - checkout
      - setup-node
      - npm install && npm run build
      - aws s3 sync dist/ s3://cats-sena-2026
