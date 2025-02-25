// Define el objeto global del menú
window.MENU_CATEGORIES = {
    "Entradas": [
        {
            id: "carpaccio",
            nombre: "Carpaccio de Res",
            descripcion: "Finas láminas de res con rúcula, parmesano y aceite de trufa.",
            precio: 18,
            imagenes: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMzrLwwtff3z99eim4CXoarOBlxXYYvkLXVg&s"],
            ingredientes: ["Res premium", "Rúcula", "Parmesano", "Aceite de trufa negra"]
        },
        {
            id: "tartar",
            nombre: "Tartar de Atún",
            descripcion: "Atún fresco cortado a cuchillo con aguacate y aderezo cítrico.",
            precio: 22,
            imagenes: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4a0UKRAwL94La92VKFzAXEHxPZfeVZ8HXPA&s"],
            ingredientes: ["Atún fresco", "Aguacate", "Aderezo cítrico"]
        }
    ],
    "Platos Principales": [
        {
            id: "risotto",
            nombre: "Risotto de Hongos Silvestres",
            descripcion: "Arroz arborio con variedad de hongos y trufa negra.",
            precio: 28,
            imagenes: ["https://www.recetasnestle.com.uy/sites/default/files/srh_recipes/d3ace5fc0177d7d16e22b5b4de5777b3.jpg"],
            ingredientes: ["Arroz arborio", "Hongos silvestres", "Trufa negra"]
        },
        {
            id: "cordero",
            nombre: "Cordero en Costra de Hierbas",
            descripcion: "Rack de cordero con costra de hierbas finas y puré de papas.",
            precio: 42,
            imagenes: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUOWbqIYe-fKxkUKuHQvzuQkP91MWTu5d4rg&s"],
            ingredientes: ["Cordero", "Hierbas finas", "Puré de papas"]
        }
    ],
    "Postres": [
        {
            id: "tiramisu",
            nombre: "Tiramisú Clásico",
            descripcion: "Capas de bizcocho de café con crema de mascarpone y cacao en polvo.",
            precio: 12,
            imagenes: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyZx8HXyK8F9hq8p4vJYQH9j3y7-6n0Q6m9Zw&s"],
            ingredientes: ["Mascarpone", "Café espresso", "Huevos", "Cacao"]
        },
        {
            id: "volcan",
            nombre: "Volcán de Chocolate",
            descripcion: "Torta de chocolate fundente con corazón líquido y helado de vainilla.",
            precio: 14,
            imagenes: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2dPv8XwW8qN4y9Q6tZ3Qk0QjJ7W7m9x0H7dg&s"],
            ingredientes: ["Chocolate negro", "Mantequilla", "Huevos", "Helado de vainilla"]
        }
    ],
    "Ensaladas": [
        {
            id: "caesar",
            nombre: "Ensalada César",
            descripcion: "Clásica ensalada con pollo grillado, croutones y aderezo original.",
            precio: 16,
            imagenes: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4QJ9v9Q3Q0wZQjvZJ3XQjK7X9Z7m9x0H7dg&s"],
            ingredientes: ["Lechuga romana", "Pollo grillado", "Croutons", "Queso parmesano"]
        },
        {
            id: "quinoa",
            nombre: "Ensalada de Quinoa",
            descripcion: "Quinoa con vegetales asados, aguacate y vinagreta de limón.",
            precio: 15,
            imagenes: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk9vWJ7Z7Q3QjvZJ3XQjK7X9Z7m9x0H7dg&s"],
            ingredientes: ["Quinoa", "Aguacate", "Tomates cherry", "Vinagreta de limón"]
        }
    ],
    "Sopas": [
        {
            id: "calabaza",
            nombre: "Crema de Calabaza",
            descripcion: "Crema suave de calabaza con toque de jengibre y croutons crocantes.",
            precio: 14,
            imagenes: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk9vWJ7Z7Q3QjvZJ3XQjK7X9Z7m9x0H7dg&s"],
            ingredientes: ["Calabaza", "Jengibre", "Crema fresca", "Croutons"]
        },
        {
            id: "gazpacho",
            nombre: "Gazpacho Andaluz",
            descripcion: "Sopa fría de tomates maduros con toque de ajo y pepino.",
            precio: 13,
            imagenes: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk9vWJ7Z7Q3QjvZJ3XQjK7X9Z7m9x0H7dg&s"],
            ingredientes: ["Tomates", "Pepino", "Pimiento", "Ajo"]
        }
    ]
};

// Verificar que el objeto se ha cargado correctamente
console.log("MENU_CATEGORIES cargado:", window.MENU_CATEGORIES);