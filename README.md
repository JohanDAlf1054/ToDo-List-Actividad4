# To-Do List

Aplicación web de lista de tareas hecha con **HTML, CSS y JavaScript** (sin librerías ni frameworks). Proyecto del curso *Mantenimiento de software*, desarrollado en equipo con Git y GitHub.

## Estructura

```
ToDo-List/
├── index.html
├── assets/
│   ├── css/style.css
│   └── js/script.js
├── .gitignore
└── README.md
```

## Cómo ejecutarlo

No requiere instalación ni servidor. Abre `index.html` en el navegador.

## Historias de usuario

| ID     | Historia                                   | Prioridad | Depende de |
|--------|--------------------------------------------|-----------|------------|
| HU-001 | Agregar una tarea                          | Alta      | Ninguna    |
| HU-002 | Marcar una tarea como completada           | Media     | HU-001     |
| HU-003 | Eliminar una tarea                         | Media     | HU-001     |
| HU-004 | Editar una tarea                           | Baja      | HU-001     |
| HU-005 | Conservar las tareas al recargar la página | Media     | HU-001     |

## Convención de commits

Basada en [Conventional Commits 1.0.0](https://www.conventionalcommits.org/en/v1.0.0/). El ámbito es el identificador de la historia de usuario.

```
tipo(HU-00X): descripción breve en infinitivo
```

Ejemplo: `feat(HU-001): agregar formulario para ingresar tareas`

| Tipo    | Uso                                                              |
|---------|------------------------------------------------------------------|
| `feat`  | Agrega una funcionalidad o una parte de ella.                    |
| `fix`   | Corrige un error.                                                |
| `style` | Cambia estilos CSS o formato sin alterar el comportamiento.      |
| `chore` | Tareas de configuración o estructura, como crear archivos base.  |
| `docs`  | Modifica documentación, como el README.                          |

Reglas:

- Cada commit contiene un solo cambio lógico.
- La descripción está en español, empieza con un verbo en infinitivo y no supera los 72 caracteres.
- La descripción no termina en punto.

## Convención de ramas

Una rama por historia de usuario, creada desde `main`:

```
feature/HU-00X-descripcion
```

Ejemplos: `feature/HU-001-agregar-tarea`, `feature/HU-002-completar-tarea`, `feature/HU-003-eliminar-tarea`.

Cada rama se integra en `main` mediante Pull Request.
