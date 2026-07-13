# Prompt para añadir Sparks a jcap.tech

Copia el bloque siguiente en el agente que esté trabajando sobre el repositorio de `jcap.tech`.

## Prompt

Quiero añadir **Sparks** al selector de proyectos de mi portfolio `jcap.tech`. Implementa el cambio completo en el repositorio del portfolio, respetando su arquitectura, su diseño actual y sus versiones en español e inglés.

### Contexto verificado

- El portfolio mantiene sus proyectos en `src/data/profile.ts`.
- La interfaz `Project` requiere: `title`, `eyebrow`, `href`, `linkLabel?`, `status`, `text`, `technologies`, `points`, `image` y `kind`.
- Los datos compartidos se definen en `sharedProjectAssets` y después se reutilizan en `portfolioContent.es.projects` y `portfolioContent.en.projects`.
- No crees un componente o una sección paralela: Sparks debe integrarse en el selector de proyectos existente y aparecer también en cualquier buscador o command palette que derive sus resultados de ese array.
- Repositorio principal del producto: https://github.com/JuanCarlosAcostaPeraba/sparks-cli
- Repositorio de la landing: https://github.com/JuanCarlosAcostaPeraba/sparks-web
- Sparks es una CLI local-first escrita en Go para capturar ideas, tareas y pensamientos anidados sin abandonar la terminal. Usa SQLite local, ofrece salida JSON, comandos cortos y una interfaz interactiva de terminal.

### Implementación solicitada

1. Lee primero el `AGENTS.md` y las convenciones del repositorio. Inspecciona cómo se renderizan, ordenan y buscan los proyectos antes de editar.
2. Añade `sharedProjectAssets.sparks` con esta base:

   ```ts
   sparks: {
     title: 'sparks',
     href: 'https://github.com/JuanCarlosAcostaPeraba/sparks-cli',
     image: '/projects/sparks-mockup.webp',
     technologies: ['Go', 'SQLite', 'Cobra', 'Bubble Tea', 'Lip Gloss', 'Astro'],
   },
   ```

   Ajusta únicamente tecnologías que no estén respaldadas por los repositorios; no inventes capacidades.

3. Añade el proyecto a `portfolioContent.es.projects` con un contenido equivalente a:

   ```ts
   {
     ...sharedProjectAssets.sparks,
     eyebrow: 'CLI · Local-first · Productividad',
     linkLabel: 'Ver repositorio',
     status: 'Open Source',
     text: 'CLI local-first para capturar ideas, tareas y pensamientos anidados sin salir de la terminal.',
     points: [
       'Binario nativo con almacenamiento SQLite local',
       'Flujo rápido, jerarquías y salida JSON para automatización',
     ],
     kind: 'CLI',
   },
   ```

4. Añade la versión equivalente a `portfolioContent.en.projects`:

   ```ts
   {
     ...sharedProjectAssets.sparks,
     eyebrow: 'CLI · Local-first · Productivity',
     linkLabel: 'View repository',
     status: 'Open Source',
     text: 'A local-first CLI for capturing ideas, tasks, and nested thoughts without leaving the terminal.',
     points: [
       'Native binary backed by local SQLite storage',
       'Fast workflows, hierarchies, and JSON output for automation',
     ],
     kind: 'CLI',
   },
   ```

5. Crea `public/projects/sparks-mockup.webp` siguiendo exactamente las dimensiones, encuadre, compresión y lenguaje visual de los mockups existentes. Usa una captura real de la landing o del terminal de Sparks; no generes una interfaz ficticia ni incrustes texto ilegible. Optimiza el peso del archivo.
6. Coloca Sparks en una posición visible del selector, priorizando los proyectos recientes o técnicamente más relevantes sin romper el orden narrativo actual.
7. Comprueba que:
   - aparece correctamente en español e inglés;
   - cambia de proyecto sin saltos de layout;
   - el enlace abre el repositorio correcto;
   - la imagen tiene un texto alternativo coherente mediante el sistema existente;
   - las tecnologías y los puntos no desbordan la tarjeta en móvil;
   - el proyecto aparece en la command palette si esta se alimenta del array de proyectos.
8. Ejecuta los checks existentes del repositorio y realiza una comprobación visual en escritorio y móvil. Corrige cualquier regresión antes de entregar.

### Restricciones

- Reutiliza los componentes y tokens actuales; no añadas otra librería de UI.
- Mantén el estilo visual del portfolio, no el de la landing de Sparks.
- Conserva la paridad completa ES/EN.
- No modifiques otros proyectos salvo lo estrictamente necesario para insertar Sparks.
- No hagas commit ni push a menos que te lo pida expresamente.

### Entrega esperada

Resume los archivos modificados, la posición elegida para Sparks, los checks ejecutados y cualquier decisión tomada sobre la imagen o las tecnologías.
