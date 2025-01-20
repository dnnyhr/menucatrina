     const MENU_CATEGORIES = {
        "Tacos": [
            {
                id: 1,
                nombre: "Tacos al Pastor",
                descripcion: "Tacos estilo Mexicano de cerdo con piña.",
                precio: 55,
                imagenes: ["./assets/pastor.webp"],
                ingredientes: ["Tortilla de maíz", "Cerdo", "Piña", "Salsa verde y Salsa Roja"]
            },{
                id: 10,
                nombre: "Tacos de Alambre",
                descripcion: "Tacos estilo Mexicano de res con queso mozarella.",
                precio: "55",
                imagenes: [
                    "./assets/Taquitos-de-alambre.webp",
                    "./assets/Alambres 2.webp"
                ],
                ingredientes: ["Tortilla de maíz", "Res", "Queso Mozarella", "Salsa verde y Salsa Roja"]
            },
            
            {
                id: 11,
                nombre: "Tacos de Birria",
                descripcion: "Dos tacos estilo Mexicano de res con queso mozarella y su exquisito caldo de birria.",
                precio: "150",
                imagenes: ["./assets/Birria.webp"],
                ingredientes: ["Tortilla de maíz", "Res", "Queso Mozarella", "Caldo de birria", "Salsa verde y Salsa Roja"]
            }
            
        ],
        "Antojitos": [
            {
                id: 8,
                nombre: "Chilaquiles",
                descripcion: "Exquisitos chilaquiles con tortilla de maiz tostada.",
                precio: "150 a 180",
                imagenes: ["./assets/chilaquiles.webp"],
                ingredientes: ["Tortilla de maíz", "Carne: Pollo, Res, Cerdo o Mixto", "Salsa roja y verde", "Queso", "Crema", "Salsa de chilaquiles"]
            },
            {
                id: 9,
                nombre: "Nachos",
                descripcion: "Se te antojan?",
                precio: "160 a 190",
                imagenes: [
                    "./assets/Nachos1.webp",
                    "./assets/Nachos2.webp"
                ],
                ingredientes: ["Tortilla de Nacho", "Carne: Pollo, Res, Cerdo o Mixto", "Salsa roja y verde", "Queso amarillo", "salsa"]
            },
            {
                id: 15,
                nombre: "Burritos",
                descripcion: "Burritos llenos de sabor 100% Mexicano ",
                precio: "120 a 150",
                imagenes: ["./assets/Burritos.webp"],
                ingredientes: ["Tortilla de harina", "Carne: pollo, Res, Cerdo o Mixto", "Frijoles molidos", "Queso Mozarella", "Lechuga"]
            },
            {
                id: 16,
                nombre: "Quesadillas",
                descripcion: ".",
                precio: "140 a 170",
                imagenes: ["./assets/null.webp"],
                ingredientes: ["Carne: pollo, res, cerdo o mixto","Tortilla de harina" , "Queso mozarella"]
            },
            {
                id: 17,
                nombre: "Chalupas",
                descripcion: ".",
                precio: "50",
                imagenes: ["./assets/null.webp"],
                ingredientes: ["Carne: pollo, res, cerdo o mixto", "Tortilla tostada", "lechuga", "pico de gallo", "frijoles molidos"]
            },
        ],
        "Sopas": [
            {
                id: 14,
                nombre: "Maruloca",
                descripcion: "Una combinación con un sabor de locura.",
                precio: "150",
                imagenes: ["./assets/Maruloca.webp"],
                ingredientes: ["Maruchan", "Nachos", "Queso Amarillo", "mayonesa", "Takis"]
            },
            {
                id: 18,
                nombre: "Ramen-Birria",
                descripcion: ".",
                precio: "200",
                imagenes: ["./assets/null.webp"],
                ingredientes: ["Carne de Res", "Queso mozarella", "Caldo de birria", "Ramen"]
            },
        ],
        "Papas": [
            {
                id: 12,
                nombre: "Papas Locas",
                descripcion: "Riquisimas papas fritas con MUCHO queso.",
                precio: "180",
                imagenes: ["./assets/Papas-locas.webp"],
                ingredientes: ["Papas", "Queso Chedar", "Bacon"]
            },
            {
                id: 13,
                nombre: "Choripapas",
                descripcion: "Riquisimas papas fritas con chorizo parrillero.",
                precio: "150",
                imagenes: ["./assets/Choripapas.webp"],
                ingredientes: ["Papas", "Chorizo parrillero", "salsa", "mayonesa"]
            }
        ]
    };

        let currentImageIndex = 0;
        let autoSlideInterval;

        function updateGallery(images) {
            const galleryImages = document.querySelectorAll(".gallery-image");
            const indicators = document.querySelectorAll(".gallery-indicator");

            galleryImages.forEach((img, index) => {
                img.classList.remove("active", "prev");
                if (index === currentImageIndex) img.classList.add("active");
                img.src = images[index] || "";
                img.style.display = images[index] ? "block" : "none";
            });

            indicators.forEach((indicator, index) => {
                indicator.classList.toggle("active", index === currentImageIndex);
            });
        }

        function handleGalleryNavigation(images) {
            document.getElementById("gallery-indicators").innerHTML = images.map((_, index) =>
                `<div class="gallery-indicator ${index === 0 ? "active" : ""}" data-index="${index}"></div>`
            ).join("");

            document.querySelectorAll(".gallery-indicator").forEach(indicator => {
                indicator.addEventListener("click", () => {
                    currentImageIndex = parseInt(indicator.dataset.index, 10);
                    updateGallery(images);
                });
            });

            clearInterval(autoSlideInterval);
            autoSlideInterval = setInterval(() => {
                currentImageIndex = (currentImageIndex + 1) % images.length;
                updateGallery(images);
            }, 3000); // tiempo de las imagenes
        }

        function openDrawer(plato) {
            const overlay = document.getElementById('drawer-overlay');
            const title = document.getElementById('drawer-title');
            const description = document.getElementById('drawer-description');
            const ingredientsList = document.getElementById('drawer-ingredients');
            const price = document.getElementById('drawer-price');
            const scrollButton = document.querySelector('.scroll-button');
            title.textContent = plato.nombre;
            description.textContent = plato.descripcion;
            price.textContent = `C$${plato.precio}.`;
        
            ingredientsList.innerHTML = '';
            plato.ingredientes.forEach(ingrediente => {
                const li = document.createElement('li');
                li.textContent = ingrediente;
                ingredientsList.appendChild(li);
            });
        
            currentImageIndex = 0;
            updateGallery(plato.imagenes);
            handleGalleryNavigation(plato.imagenes);
            overlay.style.display = 'flex';
            scrollButton.classList.add('hidden');
        }
        
        function closeDrawer() {
            const overlay = document.getElementById('drawer-overlay');
            const scrollButton = document.querySelector('.scroll-button');
            overlay.style.display = 'none';
            scrollButton.classList.remove('hidden');
        
            clearInterval(autoSlideInterval);
        }
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };
        
        function createIntersectionObserver() {
            return new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);
        }
        
        let observer = createIntersectionObserver();
        
        function renderMenu() {
            const menuGrid = document.getElementById('menu-grid');
            menuGrid.innerHTML = '';
            menuGrid.className = 'grid grid-cols-1 gap-8';
            let categories = Object.keys(MENU_CATEGORIES);
            for (const [index, categoria] of Object.entries(categories)) {
                const platos = MENU_CATEGORIES[categoria];
                const categorySection = document.createElement('div');
                categorySection.className = 'category-section';
                categorySection.id = `category-${categoria.toLowerCase().replace(/\s+/g, '-')}`;
                const categoryHeader = document.createElement('h2');
                categoryHeader.className = 'category-header text-3xl font-bold text-white bg-gradient-to-r from-pink-500 to-orange-500 p-4 rounded-lg shadow-lg text-center mb-6';
                categoryHeader.textContent = categoria;
                categorySection.appendChild(categoryHeader);
                observer.observe(categoryHeader);
                const categoryGrid = document.createElement('div');
                categoryGrid.className = 'grid grid-cols-2 gap-4';
                categorySection.appendChild(categoryGrid);
                platos.forEach((plato) => {
                    const card = document.createElement('div');
                    card.className = 'menu-card bg-white rounded-lg shadow-md p-4 cursor-pointer';
                    card.innerHTML = `
                        <div class="relative">
                            <img src="${plato.imagenes[0]}" alt="${plato.nombre}" 
                                 class="w-full h-48 object-cover rounded-lg mb-3 shadow-sm">
                            <div class="absolute top-3 right-3 bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-md">
                                C$${plato.precio}
                            </div>
                        </div>
                        <h2 class="text-lg font-bold text-gray-800">${plato.nombre}</h2>
                        <p class="text-sm text-gray-600 mb-3">${plato.descripcion}</p>
                        <button data-id="${plato.id}" 
                                class="details-btn w-full bg-gradient-to-r from-pink-500 to-orange-500 text-white py-2 px-4 rounded-lg hover:opacity-90 transition-opacity duration-300 shadow-md">
                            Ver más detalles
                        </button>
                    `;
                    card.addEventListener('click', (event) => {
                        if (!event.target.classList.contains('details-btn')) {
                            openDrawer(plato);
                        }
                    });
                    card.querySelector('.details-btn').addEventListener('click', (event) => {
                        event.stopPropagation();
                        openDrawer(plato);
                    });
                    categoryGrid.appendChild(card);
                    observer.observe(card);
                });
                menuGrid.appendChild(categorySection);
            }
            const scrollButton = document.createElement('button');
    scrollButton.className = 'scroll-button';
    scrollButton.innerHTML = `
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 13l5 5 5-5M7 6l5 5 5-5"/>
        </svg>
    `;
    document.body.appendChild(scrollButton);
    let currentCategoryIndex = 0;
    const categorySections = document.querySelectorAll('.category-section');
    function updateScrollButton() {
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        if (scrollPosition + windowHeight >= documentHeight - 100) {
            scrollButton.classList.add('up');
        } else {
            scrollButton.classList.remove('up');
        }
    }
    function handleScroll() {
        const scrollPosition = window.scrollY;
        if (scrollButton.classList.contains('up')) {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        } else {
            let targetSection = null;
            for (const section of categorySections) {
                const sectionTop = section.offsetTop;
                if (sectionTop > scrollPosition + 100) {
                    targetSection = section;
                    break;
                }
            }
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            } else {
                window.scrollTo({
                    top: document.documentElement.scrollHeight,
                    behavior: 'smooth'
                });
            }
        }
    }
    scrollButton.addEventListener('click', handleScroll);
    window.addEventListener('scroll', updateScrollButton);
    const brandingSquare = document.createElement('div');
    brandingSquare.className = 'branding-square bg-gradient-to-r from-white to-gray-200 text-gray-800 text-center rounded-lg shadow-md p-2 mt-4';
    brandingSquare.innerHTML = `
         <a href="https://wa.me/50587248446" target="_blank" class="block w-full h-full no-underline">
            <p class="text-base font-bold">Creado por <strong>XinoCore</strong></p>
            <p class="text-xs">presiona para contactar</p>
        </a>
    `;
    menuGrid.appendChild(brandingSquare);
        }
        document.addEventListener('DOMContentLoaded', () => {
        const images = document.querySelectorAll('img');
        let loadedImages = 0;
        images.forEach((img) => {
            if (img.complete) {
                loadedImages++;
            } else {
                img.addEventListener('load', () => {
                    loadedImages++;
                    checkAllImagesLoaded();
                });
                img.addEventListener('error', () => {
                    loadedImages++;
                    checkAllImagesLoaded();
                });
            }
        });
        function checkAllImagesLoaded() {
            if (loadedImages === images.length) {
                document.body.classList.add('loaded'); // Cambia el fondo al cargar
            }
        }
        checkAllImagesLoaded();
    });
        document.getElementById('drawer-close').addEventListener('click', closeDrawer);
        function filterMenuItems(searchTerm) {
            const menuGrid = document.getElementById('menu-grid');
            menuGrid.innerHTML = '';
            observer = createIntersectionObserver();
            let hasResults = false;
            for (const [categoria, platos] of Object.entries(MENU_CATEGORIES)) {
                const filteredPlatos = platos.filter(plato =>
                    plato.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    plato.descripcion.toLowerCase().includes(searchTerm.toLowerCase())
                );
                if (filteredPlatos.length > 0) {
                    hasResults = true;
                    const categorySection = document.createElement('div');
                    categorySection.className = 'category-section';
                    const categoryHeader = document.createElement('h2');
                    categoryHeader.className = 'category-header text-3xl font-bold text-white bg-gradient-to-r from-pink-500 to-orange-500 p-4 rounded-lg shadow-lg text-center mb-6';
                    categoryHeader.textContent = categoria;
                    categorySection.appendChild(categoryHeader);
                    observer.observe(categoryHeader);
                    const categoryGrid = document.createElement('div');
                    categoryGrid.className = 'grid grid-cols-2 gap-4';
                    categorySection.appendChild(categoryGrid);
                    filteredPlatos.forEach(plato => {
                        const card = document.createElement('div');
                        card.className = 'menu-card bg-white rounded-lg shadow-md p-4 cursor-pointer';
                        card.innerHTML = `
                            <div class="relative">
                                <img src="${plato.imagenes[0]}" alt="${plato.nombre}" class="w-full h-48 object-cover rounded-lg mb-3">
                                <div class="absolute top-3 right-3 bg-orange-500 text-white px-2 py-1 rounded-full text-sm font-bold">C$${plato.precio}</div>
                            </div>
                            <h2 class="text-lg font-bold">${plato.nombre}</h2>
                            <p class="text-sm text-gray-600">${plato.descripcion}</p>
                            <button data-id="${plato.id}" class="details-btn mt-3 bg-gradient-to-r from-pink-500 to-orange-500 text-white py-2 px-4 rounded-lg w-full">
                                Ver más detalles
                            </button>
                        `;
                        card.addEventListener('click', () => openDrawer(plato));
                        categoryGrid.appendChild(card);
                        observer.observe(card);
                    });
                    menuGrid.appendChild(categorySection);
                }
            }
            if (!hasResults) {
                menuGrid.innerHTML = `
                    <div class="text-center text-gray-600">
                        <p class="text-lg font-bold">No se encontraron resultados.</p>
                    </div>
                `;
            }
        }
        function debounce(func, wait) {
            let timeout;
            return function (...args) {
                clearTimeout(timeout);
                timeout = setTimeout(() => func.apply(this, args), wait);
            };
        }
        const debouncedFilterMenuItems = debounce(filterMenuItems, 10);
        document.getElementById('search-bar').addEventListener('input', (e) => {
            const searchTerm = e.target.value;
            debouncedFilterMenuItems(searchTerm);
        });
        document.getElementById('search-bar').addEventListener('input', (e) => {
            const searchTerm = e.target.value;
            filterMenuItems(searchTerm);
        });
        const promoButton = document.getElementById('promo-button');
const promoModal = document.getElementById('promo-modal');
const closePromo = document.getElementById('close-promo');
promoButton.addEventListener('click', () => {
    promoModal.classList.remove('hidden'); 
    setTimeout(() => {
        promoModal.classList.add('active'); 
    }, 10); 
});
closePromo.addEventListener('click', () => {
    promoModal.classList.remove('active'); 
    setTimeout(() => {
        promoModal.classList.add('hidden'); 
    }, 300);
});
promoModal.addEventListener('click', (e) => {
    if (e.target === promoModal) {
        promoModal.classList.remove('active'); 
        setTimeout(() => {
            promoModal.classList.add('hidden');
        }, 300); 
    }
});
function requestFullScreen() {
    const { documentElement } = document;
    if (documentElement.requestFullscreen) {
        documentElement.requestFullscreen();
    } else if (documentElement.mozRequestFullScreen) { 
        documentElement.mozRequestFullScreen();
    } else if (documentElement.webkitRequestFullscreen) {
        documentElement.webkitRequestFullscreen();
    } else if (documentElement.msRequestFullscreen) { 
        documentElement.msRequestFullscreen();
    }
    document.getElementById('fullscreen-btn').style.display = 'none';
}
document.getElementById('fullscreen-btn').addEventListener('click', requestFullScreen);
    let lastScrollY = window.scrollY;
    function handleScroll() {
        if (window.scrollY > lastScrollY) {
            promoButton.classList.add('hidden');
        } else {
            promoButton.classList.remove('hidden');
        }
        lastScrollY = window.scrollY; 
    }
    window.addEventListener('scroll', handleScroll);
        renderMenu(); //Creado por Danilo Herrera con amor para mi hermanita Daniela Herrera.