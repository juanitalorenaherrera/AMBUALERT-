const emergencyBtn = document.getElementById('emergencyBtn');
const emergencyMessage = document.getElementById('emergencyMessage');

emergencyBtn.addEventListener('click', () => {
    emergencyMessage.style.display = 'block';
    emergencyMessage.textContent = 'Llamando al 911...';
});
function mostrarHora() {
    const reloj = document.getElementById('reloj');
    const ahora = new Date();
    reloj.textContent = ahora.toLocaleTimeString();
}

setInterval(mostrarHora, 1000);
const form = document.getElementById('emergencyForm');

form.addEventListener('submit', (event) => {
    event.preventDefault(); // Evita que recargue la página
    const type = document.getElementById('type').value;
    const description = document.getElementById('description').value;

    if (description.trim() === '') {
        alert('Por favor, describe la emergencia.');
    } else {
        alert(`Emergencia reportada: ${type}\nDescripción: ${description}`);
        form.reset(); // Limpia el formulario
    }
});
const simulateBtn = document.getElementById('simulateBtn');
const loading = document.getElementById('loading');

simulateBtn.addEventListener('click', () => {
    loading.style.display = 'block';
    setTimeout(() => {
        loading.style.display = 'none';
        alert('Servicio completado con éxito.');
    }, 3000); // Simula 3 segundos de carga
});
