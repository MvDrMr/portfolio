# Portfolio — Marvin Gustavo Rodas Monzón

Portfolio personal desarrollado para presentar mi experiencia profesional, proyectos, tecnologías y perfil como **Full Stack Developer**.

El proyecto cuenta con soporte para diferentes perfiles profesionales, idiomas y versiones de CV, permitiendo adaptar el contenido del portfolio según el tipo de desarrollo que se quiera destacar.

**Portfolio:** [marvin-portfolio.com/en](https://marvin-portfolio.com/en/)

---

## Tecnologías

Este proyecto está desarrollado utilizando:

* **Astro**
* **JavaScript**
* **Tailwind CSS**
* **HTML5**
* **CSS3**

También utiliza componentes propios desarrollados con **Astro**, una estructura basada en componentes reutilizables y una arquitectura orientada a mantener el proyecto simple, responsive y fácil de mantener.

---

## Características

El portfolio incluye las siguientes funcionalidades:

### Soporte multidioma

El contenido está disponible en:

* 🇪🇸 Español
* 🇬🇧 Inglés

Las traducciones se centralizan en:

```text
src/config/translations.ts
```

Esto permite mantener el contenido de ambos idiomas organizado y facilitar futuras modificaciones.

---

### Perfiles profesionales

El portfolio permite acceder a diferentes perfiles según el enfoque profesional:

* **Web Developer**
* **.NET Developer**
* **Full Stack Developer**

Cada perfil cuenta con su propia URL y permite presentar los proyectos relacionados con el área seleccionada.

#### Rutas

```text
/web
/dotnet
/fullstack

/es/web
/es/dotnet
/es/fullstack

/en/web
/en/dotnet
/en/fullstack
```

Las rutas dinámicas se generan mediante Astro utilizando `getStaticPaths()`.

---

### Descarga de CV

El portfolio permite descargar el CV correspondiente al idioma y perfil seleccionado.

Actualmente existen seis versiones:

```text
public/
└── cv/
    ├── es/
    │   ├── cv-web.pdf
    │   ├── cv-dotnet.pdf
    │   └── cv-fullstack.pdf
    │
    └── en/
        ├── cv-web.pdf
        ├── cv-dotnet.pdf
        └── cv-fullstack.pdf
```

La ruta del CV se genera dinámicamente utilizando:

```text
idioma + perfil
```

Por ejemplo:

```text
/cv/es/cv-web.pdf
/cv/es/cv-dotnet.pdf
/cv/es/cv-fullstack.pdf

/cv/en/cv-web.pdf
/cv/en/cv-dotnet.pdf
/cv/en/cv-fullstack.pdf
```

De esta manera, el usuario recibe automáticamente el CV correspondiente al perfil e idioma que está visualizando.

---

### Información de contacto

El portfolio incluye diferentes métodos de contacto:

* Correo electrónico
* Botón para enviar un correo directamente
* Copiar el correo electrónico al portapapeles
* LinkedIn

La función de copiar correo proporciona una confirmación visual traducida según el idioma seleccionado:

```text
Español → ¡Copiado!
Inglés   → Copied!
```

---

### Proyectos

Los proyectos pueden filtrarse utilizando diferentes criterios.

#### Perfiles

* Desarrollo Web
* .NET
* Full Stack

#### Tecnologías

Entre las tecnologías disponibles para filtrar se encuentran:

* HTML
* CSS
* JavaScript
* React
* Next.js
* Tailwind CSS
* Node.js
* C#
* ASP.NET
* Windows Forms
* MVC
* SQL Server
* MySQL
* PostgreSQL

Los filtros utilizan una estructura de categorías que permite asociar tecnologías con los diferentes perfiles profesionales.

---

### Tema

El portfolio soporta:

* Tema claro
* Tema oscuro
* Tema del sistema

La selección del tema se mantiene independiente del idioma y del perfil seleccionado.

---

### Diseño responsive

El diseño está adaptado para diferentes tamaños de pantalla:

* Escritorio
* Laptop
* Dispositivos móviles
* Tablets

El diseño responsive se implementa principalmente mediante **Tailwind CSS**.

---

## Estructura del proyecto

```text
src/
├── components/
│   ├── icons/
│   │   ├── Download.astro
│   │   ├── LinkedIn.astro
│   │   ├── Mail.astro
│   │   └── ...
│   │
│   ├── AboutMe.astro
│   ├── Experience.astro
│   ├── ExperienceItem.astro
│   ├── Footer.astro
│   ├── Header.astro
│   ├── Hero.astro
│   ├── ProjectFilter.astro
│   ├── Projects.astro
│   ├── SectionContainer.astro
│   ├── SocialPill.astro
│   ├── ThemeToggle.astro
│   └── ...
│
├── components/
│   └── config/
│       └── projectFilters.ts
│
├── config/
│   └── translations.ts
│
├── layouts/
│   └── Layout.astro
│
└── pages/
    ├── [profile].astro
    ├── [lang]/
    │   ├── index.astro
    │   └── [profile].astro
    │
    └── index.astro

public/
├── cv/
│   ├── es/
│   │   ├── cv-web.pdf
│   │   ├── cv-dotnet.pdf
│   │   └── cv-fullstack.pdf
│   │
│   └── en/
│       ├── cv-web.pdf
│       ├── cv-dotnet.pdf
│       └── cv-fullstack.pdf
│
├── projects/
├── marvinDev.webp
└── portfolio.webp
```

---

## Instalación

Clonar el repositorio:

```bash
git clone https://github.com/MvDrMr/portfolio.git
```

Entrar al proyecto:

```bash
cd portfolio
```

Instalar las dependencias:

```bash
npm install
```

---

## Desarrollo

Para iniciar el servidor de desarrollo:

```bash
npm run dev
```

El proyecto estará disponible normalmente en:

```text
http://localhost:4321/
```

---

## Build

Para comprobar el proyecto y generar la versión de producción:

```bash
npm run build
```

Este comando ejecuta:

```text
astro check
astro build
```

La salida de producción se genera dentro de:

```text
dist/
```

---

## Vista previa de producción

Después de ejecutar el build se puede utilizar:

```bash
npm run preview
```

para comprobar localmente la versión generada para producción.

---

## Autor

**Marvin Gustavo Rodas Monzón**

Full Stack Developer interesado en el desarrollo de aplicaciones web, arquitectura de software, bases de datos y tecnologías del ecosistema JavaScript y .NET.

### Redes

* GitHub: https://github.com/MvDrMr
* LinkedIn: https://www.linkedin.com/in/marvin-gustavo-rodas-monzón-737583254/
* Portfolio: [marvin-portfolio.com/en](https://marvin-portfolio.com/en/)

---

## Créditos

La estructura inicial de este portfolio está basada en el proyecto de portfolio desarrollado por **Midudev**.

A partir de esa base, el proyecto fue **adaptado, modificado y personalizado** para mi perfil profesional, incluyendo contenido, diseño, tecnologías, proyectos, filtros, soporte multidioma, perfiles profesionales, descarga de CV y diferentes ajustes de responsive.

Gracias a [Midudev](https://github.com/midudev) por compartir el proyecto y el contenido que sirvió como punto de partida para este portfolio.

---

## Licencia

Este proyecto conserva la licencia incluida en el repositorio original.
