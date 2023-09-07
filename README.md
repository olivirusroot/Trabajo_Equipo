Guía para Trabajo Colaborativo en GitHub
--------------------------------------------------------------------------------------------------------------------------------
Paso 1: Creación del Repositorio (Richard)

1. Richard crea un nuevo repositorio en GitHub.
2. Richard inicializa el repositorio con un archivo README.md.
3. Richard añade a Arelis, Chris, Maleja y Juanes como colaboradores del repositorio.
--------------------------------------------------------------------------------------------------------------------------------
Paso 2: Clonar el Repositorio (Todos)

1. Todos los miembros del equipo clonan el repositorio en sus máquinas locales usando git clone.

--------------------------------------------------------------------------------------------------------------------------------
Paso 3: Creación de Ramas (Todos)

Arelis: feature/head-section
Chris: feature/navbar
Maleja: feature/main-content
Juanes: feature/articles
Richard: feature/footer

Para crear y cambiar a una nueva rama: git checkout -b nombre_de_la_rama

--------------------------------------------------------------------------------------------------------------------------------
Paso 4: Desarrollo (Todos)

1. Arelis: Trabaja en la sección del <head> del HTML, asegurándose de incluir los metadatos necesarios y enlaces a hojas de estilo.

2. Chris: Diseña la barra de navegación dentro del <main> del HTML.

3. Maleja: Crea el contenido principal del <main>, excluyendo la barra de navegación y los artículos.

4. Juanes: Añade varios <article> dentro del <main>.

5. Richard: Trabaja en el <footer> de la página.
--------------------------------------------------------------------------------------------------------------------------------

Paso 5: Comentarios (Todos)

6. Cada miembro del equipo debe hacer un git push de su rama al repositorio remoto.
7. Todos revisan el código de las ramas de los demás y añaden comentarios en GitHub.
--------------------------------------------------------------------------------------------------------------------------------

Paso 6: Merge (Richard)

1. Richard revisa todos los comentarios y el código.

2. Richard realiza el merge de cada rama en la rama main o master.

--------------------------------------------------------------------------------------------------------------------------------
Buenas Prácticas

1. Asegúrate de que cada sección del HTML utilice las etiquetas semánticas apropiadas (<header>,<nav>, <main>, <article>, <section>, <footer>).

2. Comenta tu código para explicar qué hace cada sección.

3. Antes de hacer el merge, asegúrate de que no haya conflictos y de que el código siga las mejoresprácticas.
--------------------------------------------------------------------------------------------------------------------------------
Creación de Ramas:

Las ramas se pueden crear tanto desde la interfaz de GitHub como desde la línea de comandos en tu máquina local. Aquí te muestro cómo hacerlo en ambos casos:

Desde GitHub:
1. Ve al repositorio en GitHub.
2. Haz clic en el menú desplegable que dice main o master.
3. Escribe el nombre de tu nueva rama y presiona Enter.


Desde la Línea de Comandos:
Utiliza el siguiente comando para crear y cambiar a una nueva rama: git checkout -b nombre_de_la_rama

--------------------------------------------------------------------------------------------------------------------------------
Estrategia para CSS

Una vez que todas las secciones HTML estén completas, el equipo puede colaborar en una nueva rama llamada feature/styling. Todos pueden hacer checkout a esta rama y trabajar en diferentes partes del CSS. Una vez que se complete, Richard puede hacer el merge final