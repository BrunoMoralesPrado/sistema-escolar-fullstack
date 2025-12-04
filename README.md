Este proyecto consiste en el desarrollo de una aplicación web Full Stack diseñada para la administración de usuarios universitarios y la gestión de eventos académicos. El sistema implementa una arquitectura cliente-servidor desacoplada, utilizando Angular para la interfaz de usuario y Django para la lógica de negocio y gestión de datos.

El sistema permite el control total (CRUD) de la comunidad universitaria (Administradores, Maestros y Alumnos), así como la planificación y difusión de eventos académicos, garantizando la integridad de los datos mediante validaciones estrictas y un sistema de autenticación basado en tokens y roles.

Tecnologías Utilizadas

    Frontend: Angular, Angular Material, Bootstrap.
    
    Backend: Django, Django REST Framework (DRF).
    
    Base de Datos: MySQL(Gestión local mediante XAMPP/Apache).

    Autenticación: Token Authentication y Guards de seguridad.

Funcionalidades Principales
1. Gestión de Usuarios (CRUD)
El sistema permite el registro y administración de los diferentes actores de la facultad. Dependiendo del rol, se capturan datos específicos como matrícula, número de trabajador, RFC, CURP y área de investigación.

    Administradores: Control total del sistema.
    
    Maestros: Gestión de perfil académico y materias impartidas.
    
    Alumnos: Gestión de perfil estudiantil.

2. Gestión de Eventos Académicos
Módulo especializado para la administración de conferencias, talleres y seminarios. Incluye :

    Registro: Formulario con validación de fechas, horarios, cupo y asignación de responsables.
    
    Listado: Visualización de eventos mediante tablas dinámicas con filtrado y paginación.
    
    Restricciones: Lógica de negocio para asegurar coherencia en fechas y horarios.

3. Seguridad y Roles
Implementación de permisos diferenciados :

    El Administrador posee privilegios de escritura (crear, editar, eliminar) sobre usuarios y eventos.
    
    Maestros y Alumnos cuentan con permisos de lectura restringida según la privacidad del evento y su perfil.

Instalación y Ejecución
Para desplegar el proyecto en un entorno local se requieren Node.js, Python y MySQL.

Configuración de Base de Datos

    Iniciar los servicios de Apache y MySQL desde el panel de control de XAMPP.
    
    Crear una base de datos vacía llamada sistema_escolar (o el nombre configurado en settings.py).

Backend (Django):

    Clonar el repositorio y configurar el entorno virtual.
    
    Instalar dependencias: pip install -r requirements.txt
    
    Configurar las credenciales de base de datos en settings.py.
    
    Ejecutar migraciones y el servidor: python manage.py runserver.

Frontend (Angular):

    Instalar dependencias del proyecto: npm install
    
    Ejecutar el servidor de desarrollo: ng serve
    
    La aplicación estará disponible en el puerto 4200.
Autor
Nombre: Bruno Morales Prado
