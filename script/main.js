// Contador de años de experiencia
let contadorExperiencia = document.getElementById('contador__experiencia');
let experienciaValue = 0;
let experienciaTarget = 10; // Cambia este valor si deseas otro número objetivo

let experienciaInterval = setInterval(function() {
  if (experienciaValue < experienciaTarget) {
    experienciaValue++;
    contadorExperiencia.textContent = experienciaValue;
  } else {
    clearInterval(experienciaInterval);
  }
}, 180); // Cambia el valor de tiempo si deseas una velocidad de conteo diferente

// Contador de clientes
let contadorClientes = document.getElementById('contador__clientes');
let clientesValue = 0;
let clientesTarget = 20; // Cambia este valor si deseas otro número objetivo

let clientesInterval = setInterval(function() {
  if (clientesValue < clientesTarget) {
    clientesValue++;
    contadorClientes.textContent = clientesValue;
  } else {
    clearInterval(clientesInterval);
  }
}, 90); // Cambia el valor de tiempo si deseas una velocidad de conteo diferente

// Contador de auditorias
let contadorAuditorias = document.getElementById('contador__auditorias');
let auditoriasValue = 0;
let auditoriasTarget = 30; // Cambia este valor si deseas otro número objetivo

let auditoriasInterval = setInterval(function() {
  if (auditoriasValue < auditoriasTarget) {
    auditoriasValue++;
    contadorAuditorias.textContent = auditoriasValue;
  } else {
    clearInterval(auditoriasInterval);
  }
}, 45); // Cambia el valor de tiempo si deseas una velocidad de conteo diferente