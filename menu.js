document.addEventListener('DOMContentLoaded', () => {
    if (!window.MENU_CATEGORIES) {
        console.error("Error: MENU_CATEGORIES no está definido.");
        return;
    }

    const menuNav = document.getElementById('menu-nav');
    const menuContent = document.getElementById('menu-content');

    function generateMenu() {
        menuNav.innerHTML = '';
        menuContent.innerHTML = '';

        Object.keys(window.MENU_CATEGORIES).forEach((category, index) => {
            const button = document.createElement('button');
            button.classList.add('menu-button');
            if (index === 0) button.classList.add('active');
            button.dataset.category = category;
            button.textContent = category;
            button.addEventListener('click', () => {
                document.querySelectorAll('.menu-button').forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                showCategory(category);
            });
            menuNav.appendChild(button);

            const section = document.createElement('div');
            section.id = category;
            section.classList.add('menu-section');
            if (index === 0) section.classList.add('active');
            menuContent.appendChild(section);
        });

        showCategory(Object.keys(window.MENU_CATEGORIES)[0]);
    }

    function showCategory(category) {
        document.querySelectorAll('.menu-section').forEach(sec => sec.classList.remove('active'));
        const section = document.getElementById(category);
        section.innerHTML = '';

        window.MENU_CATEGORIES[category].forEach(item => {
            const menuItem = document.createElement('div');
            menuItem.classList.add('menu-item');
            menuItem.dataset.item = item.id;
            menuItem.innerHTML = `
                <img src="${item.imagenes[0]}" alt="${item.nombre}" class="item-image">
                <div class="item-content">
                    <div class="item-header">
                        <h3 class="item-name">${item.nombre}</h3>
                        <span class="item-price">$${item.precio}</span>
                    </div>
                    <p class="item-description">${item.descripcion}</p>
                </div>
            `;
            menuItem.addEventListener('click', () => openModal(item));
            section.appendChild(menuItem);
        });

        section.classList.add('active');
    }

    function openModal(item) {
        const modal = document.getElementById('modal');
    modal.style.display = 'block';
    // Force reflow
    modal.offsetHeight;
    modal.classList.add('active');
    // ... rest of your modal code
        document.getElementById('modal').style.display = 'block';
        document.getElementById('modal-image').src = item.imagenes[0];
        document.getElementById('modal-title').textContent = item.nombre;
        document.getElementById('modal-price').textContent = `$${item.precio}`;
        document.getElementById('modal-description').textContent = item.descripcion;
        document.getElementById('modal-ingredients').textContent = item.ingredientes.join(', ');

        document.body.style.overflow = 'hidden';
    }

    document.querySelector('.modal-close').addEventListener('click', () => {
        document.getElementById('modal').style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    

    window.addEventListener('click', (event) => {
        if (event.target.classList.contains('modal')) {
            document.getElementById('modal').style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    generateMenu();
});
document.addEventListener("DOMContentLoaded", function () {
    // Simula la carga de los platillos (esto debería ser reemplazado por tu lógica de carga real)
    setTimeout(function () {
        // Oculta el loader
        const loader = document.getElementById("loader");
        loader.classList.add("hidden");

        // Muestra el contenido del menú
        const menuContent = document.getElementById("menu-content");
        menuContent.style.display = "block";
    }, 3000); // Cambia este tiempo por el tiempo real que tarda en cargar los platillos
});

