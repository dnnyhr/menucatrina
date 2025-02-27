// Reemplaza el contenido de datos.js con esto
window.MENU_API_URL = 'https://yanosecomoponerle.entitydh.workers.dev'; // Reemplaza con la URL de tu worker

// Función para cargar las categorías y platillos desde la API
window.loadMenuData = async function() {
    try {
        const response = await fetch(`${window.MENU_API_URL}/api/items`);
        const result = await response.json();
        
        if (result.success) {
            // Convertir el formato de la API al formato que espera tu frontend
            window.MENU_CATEGORIES = result.data;
            console.log("MENU_CATEGORIES cargado desde API:", window.MENU_CATEGORIES);
            return window.MENU_CATEGORIES;
        } else {
            console.error("Error al cargar el menú:", result.message);
            return {};
        }
    } catch (error) {
        console.error("Error al conectar con la API:", error);
        // Fallback a un menú vacío si hay error
        window.MENU_CATEGORIES = {};
        return {};
    }
};