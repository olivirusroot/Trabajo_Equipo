Guía Actualizada para Trabajo Colaborativo en GitHub con Daniel

Paso 1: Creación del Repositorio (Richard)
1. Richard crea un nuevo repositorio en GitHub.
2. Richard inicializa el repositorio con un archivo README.md.
3. Richard añade a Arelis, Chris, Maleja, Juanes y Daniel como colaboradores del repositorio.

---------------------------------------------------------------------------------------------
Paso 2: Clonar el Repositorio (Todos)

1. Todos los miembros del equipo clonan el repositorio en sus máquinas locales usando git clone.

---------------------------------------------------------------------------------------------
Paso 3: Creación de Ramas (Todos)

Arelis: feature/head-section
Chris: feature/navbar
Maleja: feature/main-content
Juanes: feature/articles
Richard: feature/footer
Daniel: feature/tables

Para cambiar a una nueva rama:
git checkout nombre_de_la_rama

---------------------------------------------------------------------------------------------
Paso 4: Desarrollo (Todos)

1. **Arelis**: Trabaja en la sección del `<head>` del HTML.
2. **Chris**: Diseña la barra de navegación.
3. **Maleja**: Crea el contenido principal del `<main>`.
4. **Juanes**: Añade varios `<article>`.
5. **Richard**: Trabaja en el `<footer>`.
6. **Daniel**: Trabaja en la inclusión de tablas en el contenido.

---------------------------------------------------------------------------------------------
Paso 5: Comentarios (Todos)

1. Cada miembro del equipo hace un `git push` de su rama al repositorio remoto.
2. Todos revisan el código de las ramas de los demás y añaden comentarios en GitHub.
---------------------------------------------------------------------------------------------
Paso 6: Merge (Richard)

1. Richard revisa todos los comentarios y el código.
2. Richard realiza el merge de cada rama en la rama `main` o `master`.
---------------------------------------------------------------------------------------------

Buenas Prácticas
- Asegúrate de que cada sección del HTML utilice las etiquetas semánticas apropiadas.
- Comenta tu código para explicar qué hace cada sección.
- Antes de hacer el merge, asegúrate de que no haya conflictos y de que el código siga las mejores prácticas.

---------------------------------------------------------------------------------------------

## Creación de Ramas
Las ramas se pueden crear tanto desde la interfaz de GitHub

### Desde GitHub
1. Ve al repositorio en GitHub.
2. Haz clic en el menú desplegable que dice `main` o `master`.
3. Escribe el nombre de tu nueva rama y presiona `Enter`.

---------------------------------------------------------------------------------------------

Estrategia para CSS
Una vez que todas las secciones HTML estén completas, el equipo puede colaborar en una nueva rama llamada feature/styling. Todos pueden hacer
checkout a esta rama y trabajar en diferentes partes del CSS. Una vez que se complete, Richard puede hacer el merge final.