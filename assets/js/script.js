/* ==========================================================================
   To-Do List - Lógica de la aplicación
   ========================================================================== */

'use strict';

// Las tareas se representan como objetos { id, titulo, completada }
// y se almacenan en un arreglo en memoria.
let tareas = [];

// Referencias al DOM
const formTarea = document.getElementById('form-tarea');
const inputTarea = document.getElementById('input-tarea');
const listaTareas = document.getElementById('lista-tareas');
const mensajeVacio = document.getElementById('mensaje-vacio');

/**
 * Crea el elemento <li> que representa una tarea.
 * El título se inserta con textContent para evitar inyección de HTML.
 */
function crearElementoTarea(tarea) {
  const item = document.createElement('li');
  item.className = 'tarea';
  item.dataset.id = tarea.id;

  const titulo = document.createElement('span');
  titulo.className = 'tarea__titulo';
  titulo.textContent = tarea.titulo;

  item.appendChild(titulo);
  return item;
}

/**
 * Dibuja la lista de tareas. Si no hay tareas, muestra el mensaje de lista vacía.
 */
function renderizarTareas() {
  listaTareas.replaceChildren(...tareas.map(crearElementoTarea));

  const hayTareas = tareas.length > 0;
  listaTareas.hidden = !hayTareas;
  mensajeVacio.hidden = hayTareas;
}

/**
 * Agrega una tarea al final de la lista y vuelve a dibujarla.
 */
function agregarTarea(titulo) {
  tareas.push({
    id: Date.now(),
    titulo: titulo,
    completada: false
  });
  renderizarTareas();
}

formTarea.addEventListener('submit', (evento) => {
  evento.preventDefault();

  agregarTarea(inputTarea.value);

  inputTarea.value = '';
  inputTarea.focus();
});

// Estado inicial: sin tareas se muestra el mensaje de lista vacía
renderizarTareas();
