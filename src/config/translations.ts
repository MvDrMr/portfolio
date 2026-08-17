export type Language = "es" | "en";

export const translations = {
    es: {

        navigation: {
            experience: "Experiencia",
            projects: "Proyectos",
            about: "Sobre mí",
            contact: "Contacto",
        },

        hero: {
            available: "Disponible para trabajar",
            greeting: "Hey, soy Marvin Rodas",
            description:
                "Desarrollador Full Stack con 2 años de experiencia en el desarrollo de aplicaciones web. He trabajado con",
            descriptionHighlight:
                "C#, ASP.NET, React, Node.js y bases de datos relacionales,",
            descriptionMiddle:
                "desarrollando APIs REST, interfaces web y soluciones basadas en",
            poo: "Programación Orientada a Objetos (POO)",
            architecture:
                "y arquitecturas de 3 y N capas. Utilizo Git/GitHub para la gestión del código y aplico buenas prácticas de desarrollo.",
            contact: "Contáctame",
            linkedin: "LinkedIn",
            downloadCV: "Descargar CV",
        },

        sections: {
            experience: "Experiencia laboral",
            projects: "Proyectos",
            about: "Sobre mí",
        },

        projects: {
            filter: "Filtrar proyectos",
            profiles: "Perfiles",
            web: "Desarrollo Web",
            dotnet: ".NET",
            fullstack: "Full Stack",
            technologies: "Tecnologías",
            code: "Código",
            viewProject: "Ver proyecto",

            items: {
                cafeNebaro: {
                    description: `
            Sitio web desarrollado para un café local utilizando
            <strong>JavaScript y Tailwind CSS</strong>, con una interfaz responsive
            para presentar su menú y facilitar el acceso a sus redes sociales.
            `,
                },

                energym: {
                    description: `
            Sistema de escritorio desarrollado con
            <strong>C# y Windows Forms</strong> para la gestión de usuarios y
            control de acceso de un gimnasio.
            `,
                },

                spirit: {
                    description: `
            Sistema empresarial desarrollado con
            <strong>React, Node.js, Express y MySQL</strong> para la gestión de
            inventario, traslados entre sucursales, vehículos y recursos humanos.
            Participé en el desarrollo de módulos funcionales y en la implementación
            de actualizaciones en tiempo real mediante <strong>Socket.IO</strong>.
            `,
                },
            },
        },

        about: {
            description:
                "Me llamo Marvin Rodas, aunque mis amigos me llaman Marv. Comencé a programar a los 16 años y desde entonces he desarrollado proyectos tanto académicos como profesionales. Actualmente me desempeño como Desarrollador Full Stack, trabajando principalmente con tecnologías del ecosistema JavaScript y .NET. Me interesa especialmente el desarrollo de aplicaciones, el diseño de bases de datos y la construcción de soluciones estructuradas y mantenibles.",
        },

        experience: {
            more: "Saber más",

            items: {
                spirit: {
                    date: "Diciembre 2023 – Junio 2026",
                    title: "Desarrollo Web Full Stack",
                    description: `Sistema empresarial desarrollado con <strong>React, Node.js, Express y MySQL</strong> para la gestión de operaciones, inventario, traslados entre sucursales, vehículos y recursos humanos. Participé en el desarrollo y mantenimiento de los módulos de <strong>Traslados, Vehículos, Recursos Humanos, Inventario y Kardex</strong>, incluyendo actualizaciones en tiempo real mediante <strong>Socket.IO</strong>.`,
                },

                nebaro: {
                    date: "Julio 2026 - Julio 2026",
                    title: "Proyecto Freelance",
                    description: `Desarrollé y desplegué un sitio web para un café local utilizando <strong>React, JavaScript y Tailwind CSS</strong>. Implementé una interfaz responsive adaptada a distintos dispositivos y configuré el <strong>despliegue del sitio y la administración del dominio</strong>. Gestioné el código fuente y el desarrollo del proyecto mediante <strong>Git/GitHub</strong>.`,
                },

                energym: {
                    date: "Diciembre 2024 - Abril 2025",
                    title: "Sistema de Gestión",
                    description: `Proyecto desarrollado durante la <strong>Ingeniería en Sistemas</strong> para la gestión de usuarios de un gimnasio. Construí una aplicación de escritorio utilizando <strong>C#, Windows Forms y SQL Server</strong>, aplicando principios de <strong>Programación Orientada a Objetos (POO)</strong> y una arquitectura en <strong>N capas</strong>. Diseñé la base de datos y elaboré la documentación técnica mediante <strong>Case Studio y UML</strong>. Integré un <strong>dispositivo biométrico basado en Arduino</strong> para el control de acceso de los usuarios.`,
                },

                mundoConectado: {
                    date: "Julio 2023 – Noviembre 2023",
                    title: "Sistema Mundo Conectado",
                    description: `Proyecto desarrollado durante la Ingeniería en Sistemas, en colaboración con un cliente real. Participé en el levantamiento y análisis de requerimientos y desarrollé una aplicación de escritorio utilizando <strong>C#, Windows Forms y SQL Server</strong>. Apliqué principios de <strong>Programación Orientada a Objetos (POO)</strong> y una arquitectura en <strong>N capas</strong>. Diseñé la base de datos y elaboré la documentación técnica utilizando <strong>Case Studio y StarUML</strong>.`,
                },
            },
        },

        footer: {
            about: "Sobre mí",
            experience: "Experiencia",
            projects: "Proyectos",
            contact: "Contacto",
            navigation: "Navegación del footer",
        },

        theme: {
            ariaLabel: "Elige el tema",
            light: "Claro",
            dark: "Oscuro",
            system: "Sistema",
        },

        seo: {
            title: "Portafolio de Marvin Rodas - Desarrollador Full Stack",
            description:
                "Portafolio profesional de Marvin Rodas, Full Stack Developer especializado en desarrollo web y aplicaciones.",

            profiles: {
                web: {
                    title: "Marvin Rodas - Desarrollador Web",
                    description:
                        "Perfil de Marvin Rodas como Desarrollador Web, especializado en el desarrollo de aplicaciones e interfaces web.",
                },

                dotnet: {
                    title: "Marvin Rodas - Desarrollador .NET",
                    description:
                        "Perfil de Marvin Rodas como Desarrollador .NET, con experiencia en C#, ASP.NET, APIs REST y bases de datos.",
                },

                fullstack: {
                    title: "Marvin Rodas - Desarrollador Full Stack",
                    description:
                        "Perfil de Marvin Rodas como Desarrollador Full Stack, especializado en desarrollo web, APIs, bases de datos y soluciones completas.",
                },
            },
        },

        email: {
            label: "Correo electrónico",
            copy: "Copiar",
            copied: "¡Copiado!",
        }
    },

    en: {
        navigation: {
            experience: "Experience",
            projects: "Projects",
            about: "About me",
            contact: "Contact",
        },

        hero: {
            available: "Available for work",
            greeting: "Hey, I'm Marvin Rodas",
            description:
                "Full Stack Developer with 2 years of experience in web application development. I have worked with",
            descriptionHighlight:
                "C#, ASP.NET, React, Node.js, and relational databases,",
            descriptionMiddle:
                "developing REST APIs, web interfaces, and solutions based on",
            poo: "Object-Oriented Programming (OOP)",
            architecture:
                "and 3-tier and N-tier architectures. I use Git/GitHub for code management and apply software development best practices.",
            contact: "Contact me",
            linkedin: "LinkedIn",
            downloadCV: "Download CV",
        },

        sections: {
            experience: "Work experience",
            projects: "Projects",
            about: "About me",
        },

        projects: {
            filter: "Filter projects",
            profiles: "Profiles",
            web: "Web Development",
            dotnet: ".NET",
            fullstack: "Full Stack",
            technologies: "Technologies",
            code: "Code",
            viewProject: "View project",

            items: {
                cafeNebaro: {
                    description: `
                        Website developed for a local café using
                        <strong>JavaScript and Tailwind CSS</strong>, featuring a responsive
                        interface to showcase its menu and provide access to its social media.
                    `,
                },

                energym: {
                    description: `
                        Desktop system developed with
                        <strong>C# and Windows Forms</strong> for gym user management and
                        access control.
                    `,
                },

                spirit: {
                    description: `
                        Business system developed with
                        <strong>React, Node.js, Express, and MySQL</strong> for managing
                        inventory, branch transfers, vehicles, and human resources.
                        I participated in the development of functional modules and the
                        implementation of real-time updates using <strong>Socket.IO</strong>.
                    `,
                },
            },
        },

        about: {
            description:
                "My name is Marvin Rodas, although my friends call me Marv. I started programming at 16 and have been developing both academic and professional projects ever since. I currently work as a Full Stack Developer, mainly working with technologies from the JavaScript and .NET ecosystems. I am particularly interested in application development, database design, and building structured and maintainable solutions.",
        },

        experience: {
            more: "Learn more",

            items: {
                spirit: {
                    date: "December 2023 – June 2026",
                    title: "Full Stack Web Development",
                    description: `Business management system developed with <strong>React, Node.js, Express, and MySQL</strong> for operations, inventory, branch transfers, vehicles, and human resources management. I participated in the development and maintenance of the <strong>Transfers, Vehicles, Human Resources, Inventory, and Kardex</strong> modules, including real-time updates using <strong>Socket.IO</strong>.`,
                },

                nebaro: {
                    date: "July 2026 - July 2026",
                    title: "Freelance Project",
                    description: `I developed and deployed a website for a local café using <strong>React, JavaScript, and Tailwind CSS</strong>. I implemented a responsive interface adapted to different devices and configured the <strong>website deployment and domain management</strong>. I managed the source code and project development using <strong>Git/GitHub</strong>.`,
                },

                energym: {
                    date: "December 2024 - April 2025",
                    title: "Management System",
                    description: `Project developed during my <strong>Systems Engineering</strong> studies for gym user management. I built a desktop application using <strong>C#, Windows Forms, and SQL Server</strong>, applying <strong>Object-Oriented Programming (OOP)</strong> principles and an <strong>N-tier architecture</strong>. I designed the database and prepared the technical documentation using <strong>Case Studio and UML</strong>. I integrated an <strong>Arduino-based biometric device</strong> for user access control.`,
                },

                mundoConectado: {
                    date: "July 2023 – November 2023",
                    title: "Mundo Conectado System",
                    description: `Project developed during my Systems Engineering studies in collaboration with a real client. I participated in requirements gathering and analysis and developed a desktop application using <strong>C#, Windows Forms, and SQL Server</strong>. I applied <strong>Object-Oriented Programming (OOP)</strong> principles and an <strong>N-tier architecture</strong>. I designed the database and prepared the technical documentation using <strong>Case Studio and StarUML</strong>.`,
                },
            },
        },

        footer: {
            about: "About me",
            experience: "Experience",
            projects: "Projects",
            contact: "Contact",
            navigation: "Footer navigation",
        },

        theme: {
            ariaLabel: "Choose theme",
            light: "Light",
            dark: "Dark",
            system: "System",
        },

        seo: {
            title: "Marvin Rodas Portfolio - Full Stack Developer",
            description:
                "Professional portfolio of Marvin Rodas, a Full Stack Developer specialized in web development and applications.",

            profiles: {
                web: {
                    title: "Marvin Rodas - Web Developer",
                    description:
                        "Marvin Rodas' profile as a Web Developer, specialized in web application and interface development.",
                },

                dotnet: {
                    title: "Marvin Rodas - .NET Developer",
                    description:
                        "Marvin Rodas' profile as a .NET Developer, with experience in C#, ASP.NET, REST APIs, and databases.",
                },

                fullstack: {
                    title: "Marvin Rodas - Full Stack Developer",
                    description:
                        "Marvin Rodas' profile as a Full Stack Developer, specialized in web development, APIs, databases, and complete solutions.",
                },
            },
        },

        email: {
            label: "Email",
            copy: "Copy",
            copied: "Copied!",
        }
    },
} as const;

export function getTranslations(language: Language) {
    return translations[language];
}