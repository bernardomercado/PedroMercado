// Función para iniciar el contador cuando sea visible en pantalla
function iniciarContador(elemento, valorInicial, valorObjetivo, intervalo) {
  let valor = valorInicial;
  let observer = new IntersectionObserver(function(entries) {
    if (entries[0].isIntersecting) {
      let interval = setInterval(function() {
        if (valor < valorObjetivo) {
          valor++;
          elemento.textContent = valor;
        } else {
          clearInterval(interval);
        }
      }, intervalo);
      observer.disconnect();
    }
  });
  observer.observe(elemento);
}

// Contador de años de experiencia
let contadorExperiencia = document.getElementById('contador__experiencia');
iniciarContador(contadorExperiencia, 0, 10, 180);

// Contador de clientes
let contadorClientes = document.getElementById('contador__clientes');
iniciarContador(contadorClientes, 0, 20, 90);

// Contador de auditorias
let contadorAuditorias = document.getElementById('contador__auditorias');
iniciarContador(contadorAuditorias, 0, 30, 45);