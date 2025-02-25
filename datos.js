// Este archivo reemplazará a datos.js en tu aplicación
document.addEventListener('DOMContentLoaded', async () => {
    // URL base del worker de Cloudflare (cámbiala por tu dominio de worker)
    const API_BASE_URL = 'https://tu-worker.tu-cuenta.workers.dev';
    
    // Cargar los datos del menú desde el worker
    try {
      const response = await fetch(`${API_BASE_URL}/api/menu`);
      if (!response.ok) {
        throw new Error('Error al cargar los datos del menú');
      }
      
      const menuData = await response.json();
      
      // Guardar en window.MENU_CATEGORIES como lo espera tu aplicación actual
      window.MENU_CATEGORIES = menuData;
      
      // Verificar que el objeto se ha cargado correctamente
      console.log("MENU_CATEGORIES cargado:", window.MENU_CATEGORIES);
      
      // Disparar un evento para notificar que los datos están listos
      document.dispatchEvent(new Event('menuDataLoaded'));
    } catch (error) {
      console.error("Error cargando datos del menú:", error);
      
      // Mostrar un mensaje de error al usuario
      const errorMessage = document.createElement('div');
      errorMessage.style.padding = '20px';
      errorMessage.style.backgroundColor = '#ffebee';
      errorMessage.style.color = '#c62828';
      errorMessage.style.borderRadius = '5px';
      errorMessage.style.margin = '20px auto';
      errorMessage.style.maxWidth = '800px';
      errorMessage.style.textAlign = 'center';
      errorMessage.innerHTML = `
        <h2>Error al cargar el menú</h2>
        <p>No pudimos cargar los datos del menú. Por favor, intenta de nuevo más tarde.</p>
      `;
      
      document.querySelector('.menu-container').appendChild(errorMessage);
    }
  });