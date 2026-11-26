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
const mensajeError = document.getElementById('mensaje-error');

const MENSAJE_TITULO_VACIO = 'Escribe una tarea antes de agregar';

/**
 * Muestra un mensaje de error debajo del formulario.
 */
function mostrarError(mensaje) {
  mensajeError.textContent = mensaje;
  mensajeError.hidden = false;
  inputTarea.classList.add('form-tarea__input--error');
  inputTarea.setAttribute('aria-invalid', 'true');
}

/**
 * Oculta el mensaje de error del formulario.
 */
function limpiarError() {
  mensajeError.textContent = '';
  mensajeError.hidden = true;
  inputTarea.classList.remove('form-tarea__input--error');
  inputTarea.removeAttribute('aria-invalid');
}

/**
 * Valida el título de una tarea: no puede estar vacío ni contener solo espacios.
 * Devuelve el título sin espacios sobrantes, o null si no es válido.
 */
function validarTitulo(titulo) {
  const tituloLimpio = titulo.trim();
  return tituloLimpio === '' ? null : tituloLimpio;
}

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

  const titulo = validarTitulo(inputTarea.value);

  if (titulo === null) {
    mostrarError(MENSAJE_TITULO_VACIO);
    inputTarea.focus();
    return;
  }

  limpiarError();
  agregarTarea(titulo);

  inputTarea.value = '';
  inputTarea.focus();
});

// Al escribir, se oculta el mensaje de error
inputTarea.addEventListener('input', limpiarError);

// Estado inicial: sin tareas se muestra el mensaje de lista vacía
renderizarTareas();
