document.addEventListener('DOMContentLoaded', async () => {
    const menuNav = document.getElementById('menu-nav');
    const menuContent = document.getElementById('menu-content');
    const API_URL = "https://yanosecomoponerle.entitydh.workers.dev/menu";

    async function fetchMenu() {
        try {
            const response = await fetch(API_URL);
            if (!response.ok) throw new Error("Error al cargar el menú");
            return await response.json();
        } catch (error) {
            console.error(error);
            return {};
        }
    }

    function generateMenu(menuData) {
        menuNav.innerHTML = '';
        menuContent.innerHTML = '';

        Object.keys(menuData).forEach((category, index) => {
            const button = document.createElement('button');
            button.classList.add('menu-button');
            if (index === 0) button.classList.add('active');
            button.dataset.category = category;
            button.textContent = category;
            button.addEventListener('click', () => {
                document.querySelectorAll('.menu-button').forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                showCategory(category, menuData);
            });
            menuNav.appendChild(button);

            const section = document.createElement('div');
            section.id = category;
            section.classList.add('menu-section');
            if (index === 0) section.classList.add('active');
            menuContent.appendChild(section);
        });

        showCategory(Object.keys(menuData)[0], menuData);
    }

    function showCategory(category, menuData) {
        document.querySelectorAll('.menu-section').forEach(sec => sec.classList.remove('active'));
        const section = document.getElementById(category);
        section.innerHTML = '';

        menuData[category].forEach(item => {
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

    const menuData = await fetchMenu();
    generateMenu(menuData);
});
