// Datos de los héroes con sus roles (lista completa con héroes recientes)
const heroes = [
  // Héroes de Apoyo
  { name: "Rafaela", roles: ["support"] },
  { name: "Minotauro", roles: ["support", "tank"] },
  { name: "Lolita", roles: ["support", "tank"] },
  { name: "Johnson", roles: ["support", "tank"] },
  { name: "Estes", roles: ["support"] },
  { name: "Diggie", roles: ["support"] },
  { name: "Angela", roles: ["support"] },
  { name: "Kaja", roles: ["support", "fighter"] },
  { name: "Faramis", roles: ["support", "mage"] },
  { name: "Carmila", roles: ["support", "tank"] },
  { name: "Mathilda", roles: ["support", "assassin"] },
  { name: "Floryn", roles: ["support"] },
  { name: "Chip", roles: ["support"] },
  { name: "Kalea", roles: ["support"] },
  
  // Héroes de Mago
  { name: "Kagura" , roles:["mage"] },
  { name: "Zetian", roles: ["mage"] },
  { name: "Zhuxin", roles: ["mage"] },
  { name: "Eudora", roles: ["mage"] },
  { name: "Gord", roles: ["mage"] },
  { name: "Vexana", roles: ["mage"] },
  { name: "Pharsa", roles: ["mage"] },
  { name: "Cyclops", roles: ["mage"] },
  { name: "Nana", roles: ["support", "mage"] },
  { name: "Lunox", roles: ["mage"] },
  { name: "Harith", roles: ["mage"] },
  { name: "Kadita", roles: ["mage", "assassin"] },
  { name: "Valir", roles: ["mage"] },
  { name: "Chang'e", roles: ["mage"] },
  { name: "Lylia", roles: ["mage"] },
  { name: "Selena", roles: ["mage", "assassin"] },
  { name: "Cecilion", roles: ["mage"] },
  { name: "Alice", roles: ["mage"] },
  { name: "Aurora", roles: ["mage"] },
  { name: "Odette", roles: ["mage"] },
  { name: "Vale", roles: ["mage"] },
  { name: "Luo Yi", roles: ["mage"] },
  { name: "Yve", roles: ["mage"] },
  { name: "Aamon", roles: ["mage", "assassin"] },
  { name: "Valentina", roles: ["mage"] },
  { name: "Novaria", roles: ["mage"] },
  
  // Héroes de Combatiente
  { name: "Lukas", roles: ["fighter"] },
  { name: "Terizla", roles: ["fighter", "tank"] },
  { name: "Masha", roles: ["fighter", "tank"] },
  { name: "Alucard", roles: ["fighter", "assassin"] },
  { name: "Balmond", roles: ["fighter", "tank"] },
  { name: "Chou", roles: ["fighter"] },
  { name: "Freya", roles: ["fighter"] },
  { name: "Gatotkaca", roles: ["tank", "fighter"] },
  { name: "Jawhead", roles: ["fighter"] },
  { name: "Lapu-Lapu", roles: ["fighter"] },
  { name: "Leomord", roles: ["fighter"] },
  { name: "Martis", roles: ["fighter"] },
  { name: "Minsitthar", roles: ["fighter"] },
  { name: "Roger", roles: ["fighter", "marksman"] },
  { name: "Ruby", roles: ["fighter", "tank"] },
  { name: "Sun", roles: ["fighter"] },
  { name: "Thamuz", roles: ["fighter"] },
  { name: "X.Borg", roles: ["fighter"] },
  { name: "Yu Zhong", roles: ["fighter"] },
  { name: "Badang", roles: ["fighter"] },
  { name: "Dyrroth", roles: ["fighter"] },
  { name: "Guinevere", roles: ["fighter", "mage"] },
  { name: "Khaleed", roles: ["fighter"] },
  { name: "Paquito", roles: ["fighter"] },
  { name: "Phoveus", roles: ["fighter"] },
  { name: "Silvanna", roles: ["fighter", "mage"] },
  { name: "Bane", roles: ["fighter", "mage"] },
  { name: "Aldous", roles: ["fighter"] },
  { name: "Argus", roles: ["fighter"] },
  { name: "Aulus", roles: ["fighter"] },
  { name: "Benedetta", roles: ["fighter", "assassin"] },
  { name: "Fredrinn", roles: ["fighter", "tank"] },
  { name: "Joy", roles: ["fighter", "assassin"] },
  { name: "Julian", roles: ["fighter", "mage"] },
  { name: "Arlott", roles: ["fighter"] },
  { name: "Yin", roles: ["fighter"] },
  { name: "Cici", roles: ["fighter"] },
  
  // Héroes de Tanque
  { name: "Tigreal", roles: ["tank"] },
  { name: "Akai", roles: ["tank"] },
  { name: "Franco", roles: ["tank"] },
  { name: "Grock", roles: ["tank"] },
  { name: "Hilda", roles: ["tank", "fighter"] },
  { name: "Hylos", roles: ["tank"] },
  { name: "Uranus", roles: ["tank"] },
  { name: "Belerick", roles: ["tank"] },
  { name: "Barats", roles: ["tank", "fighter"] },
  { name: "Edith", roles: ["tank", "marksman"] },
  { name: "Gloo", roles: ["tank"] },
  { name: "Atlas", roles: ["tank"] },
  { name: "Baxia", roles: ["tank"] },
  
  // Héroes de Asesino
  { name: "Saber", roles: ["assassin"] },
  { name: "Fanny", roles: ["assassin"] },
  { name: "Gusion", roles: ["assassin"] },
  { name: "Hanzo", roles: ["assassin"] },
  { name: "Helcurt", roles: ["assassin"] },
  { name: "Karina", roles: ["assassin", "mage"] },
  { name: "Lancelot", roles: ["assassin"] },
  { name: "Lesley", roles: [ "assassin","marksman"] },
  { name: "Natalia", roles: ["assassin"] },
  { name: "Hayabusa", roles: ["assassin"] },
  { name: "Selena", roles: ["assassin", "mage"] },
  { name: "Ling", roles: ["assassin"] },
  { name: "Yi Sun-shin", roles: ["assassin", "marksman"] },
  { name: "Aamon", roles: ["assassin", "mage"] },
  { name: "Arlott", roles: ["fighter", "assassin"] },
  { name: "Joy", roles: ["assassin", "fighter"] },
  { name: "Nolan", roles: ["assassin"] },
  
  // Héroes de Tirador
  { name: "Layla", roles: ["marksman"] },
  { name: "Clint", roles: ["marksman"] },
  { name: "Bruno", roles: ["marksman"] },
  { name: "Miya", roles: ["marksman"] },
  { name: "Hanabi", roles: ["marksman"] },
  { name: "Irithel", roles: ["marksman"] },
  { name: "Granger", roles: ["marksman"] },
  { name: "Wanwan", roles: ["marksman"] },
  { name: "Karrie", roles: ["marksman"] },
  { name: "Claude", roles: ["marksman"] },
  { name: "Kimmy", roles: ["marksman", "mage"] },
  { name: "Moskov", roles: ["marksman"] },
  { name: "Popol", roles: ["marksman"] },
  { name: "Brody", roles: ["marksman"] },
  { name: "Beatrix", roles: ["marksman"] },
  { name: "Natan", roles: ["marksman"] },
  { name: "Melissa", roles: ["marksman"] },
  { name: "Ixia", roles: ["marksman"] }
];

// Datos de counters (ejemplos)
const countersData = {
  "Rafaela": {
    counters: ["Saber", "Natalia", "Helcurt", "Karina"],
    strongAgainst: ["Eudora", "Aurora", "Gord", "Vexana"]
  },
  "Minotauro": {
    counters: ["Karrie", "Lunox", "Valir", "Diggie"],
    strongAgainst: ["Fanny", "Gusion", "Ling", "Hayabusa"]
  },
  "Lolita": {
    counters: ["Gusion", "Fanny", "Ling", "Clint"],
    strongAgainst: ["Kimmy", "Clint", "Brody", "Wanwan"]
  },
  "Johnson": {
    counters: ["Diggie", "Lolita", "Kaja", "Wanwan"],
    strongAgainst: ["Fanny", "Gusion", "Ling", "Hayabusa"]
  },
  "Estes": {
    counters: ["Saber", "Natalia", "Helcurt", "Karina"],
    strongAgainst: ["Eudora", "Aurora", "Gord", "Vexana"]
  },
  "Zetian": {
    counters: ["Saber", "Fanny", "Gusion", "Ling"],
    strongAgainst: ["Gatotkaca", "Hylos", "Uranus", "Belerick"]
  },
  "Zhuxin": {
    counters: ["Saber", "Fanny", "Gusion", "Ling"],
    strongAgainst: ["Gatotkaca", "Hylos", "Uranus", "Belerick"]
  },
  "Lukas": {
    counters: ["Khufra", "Lolita", "Akai", "Gatotkaca"],
    strongAgainst: ["Layla", "Miya", "Eudora", "Gord"]
  },
  "Terizla": {
    counters: ["Karrie", "Lunox", "Valir", "Diggie"],
    strongAgainst: ["Gatotkaca", "Hylos", "Minotaur", "Tigreal"]
  },
  "Masha": {
    counters: ["Khufra", "Lolita", "Akai", "Gatotkaca"],
    strongAgainst: ["Layla", "Miya", "Eudora", "Gord"]
  },
  "Alucard": {
    counters: ["Fanny", "Khufra", "Aurora", "Akai"],
    strongAgainst: ["Layla", "Miya", "Eudora", "Gord"]
  },
  "Gatotkaca": {
    counters: ["Karrie", "Lunox", "Valir", "Diggie"],
    strongAgainst: ["Fanny", "Gusion", "Ling", "Hayabusa"]
  },
  "Saber": {
    counters: ["Lolita", "Khufra", "Akai", "Gatotkaca"],
    strongAgainst: ["Layla", "Miya", "Eudora", "Gord"]
  },
  "Fanny": {
    counters: ["Khufra", "Lolita", "Akai", "Gatotkaca"],
    strongAgainst: ["Layla", "Miya", "Eudora", "Gord"]
  },
  "Layla": {
    counters: ["Saber", "Fanny", "Gusion", "Ling"],
    strongAgainst: ["Gatotkaca", "Hylos", "Uranus", "Belerick"]
  },
  "Clint": {
    counters: ["Saber", "Fanny", "Gusion", "Ling"],
    strongAgainst: ["Gatotkaca", "Hylos", "Uranus", "Belerick"]
  },
  // Puedes agregar más counters según necesites
};

// Función para obtener datos de counters para un héroe
function getCountersForHero(heroName) {
  return countersData[heroName] || {
    counters: ["No hay datos", "No hay datos", "No hay datos", "No hay datos"],
    strongAgainst: ["No hay datos", "No hay datos", "No hay datos", "No hay datos"]
  };
}

// Función para obtener el rol de un héroe
function getHeroRole(heroName) {
  if (heroName === "No hay datos") return "Sin datos";
  
  const hero = heroes.find(h => h.name === heroName);
  if (!hero) return "Desconocido";
  
  const roleNames = {
    tank: 'Tanque',
    fighter: 'Combatiente',
    assassin: 'Asesino',
    mage: 'Mago',
    marksman: 'Tirador',
    support: 'Apoyo'
  };
  
  return hero.roles.map(role => roleNames[role]).join(', ');
}

// Función para mostrar los detalles del héroe
function showHeroDetails(heroName) {
  const modal = document.getElementById('heroModal');
  const heroDetail = document.getElementById('heroDetail');
  
  // Obtener datos del héroe
  const hero = heroes.find(h => h.name === heroName);
  const counters = getCountersForHero(heroName);
  
  // Crear contenido del modal
  heroDetail.innerHTML = `
    <h2>${heroName}</h2>
    <div class="roles">
      ${hero.roles.map(role => {
        const roleNames = {
          tank: 'Tanque',
          fighter: 'Combatiente',
          assassin: 'Asesino',
          mage: 'Mago',
          marksman: 'Tirador',
          support: 'Apoyo'
        };
        return `<span class="role ${role}">${roleNames[role]}</span>`;
      }).join('')}
    </div>
    
    <div class="counters-section">
      <div class="counters-box">
        <h3>Counters (${heroName} es débil contra)</h3>
        <div class="counter-grid">
          ${counters.counters.map(counter => `
            <div class="counter-card">
              <div class="counter-image">
                <img src="Img/${counter.toLowerCase()}.jpg" alt="${counter}" onerror="this.style.display='none'">
              </div>
              <h4>${counter}</h4>
              <div class="role">${getHeroRole(counter)}</div>
            </div>
          `).join('')}
        </div>
      </div>
      
      <div class="strong-against-box">
        <h3>Fuerte contra</h3>
        <div class="counter-grid">
          ${counters.strongAgainst.map(strong => `
            <div class="counter-card">
              <div class="counter-image">
                <img src="Img/${strong.toLowerCase()}.jpg" alt="${strong}" onerror="this.style.display='none'">
              </div>
              <h4>${strong}</h4>
              <div class="role">${getHeroRole(strong)}</div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
  
  // Mostrar el modal
  modal.style.display = 'block';
}

// Función para renderizar los héroes en la cuadrícula
function renderHeroes(filteredHeroes = heroes) {
  const heroesGrid = document.getElementById('heroesGrid');
  heroesGrid.innerHTML = '';
  
  filteredHeroes.forEach(hero => {
    const card = document.createElement('div');
    card.className = 'card';
    card.dataset.hero = hero.name;
    
    // Crear los elementos de la tarjeta
    const imageBox = document.createElement('div');
    imageBox.className = 'image-box';
    
    // Crear elemento de imagen
    const heroImage = document.createElement('img');
    heroImage.src = `Img/${hero.name.toLowerCase()}.jpg`;
    heroImage.alt = hero.name;
    heroImage.onerror = function() {
      // Si la imagen no existe, mostrar el nombre como texto
      this.style.display = 'none';
      imageBox.textContent = hero.name;
      imageBox.style.display = 'flex';
      imageBox.style.alignItems = 'center';
      imageBox.style.justifyContent = 'center';
    };
    
    imageBox.appendChild(heroImage);
    
    const name = document.createElement('h2');
    name.textContent = hero.name;
    
    const rolesContainer = document.createElement('div');
    rolesContainer.className = 'roles';
    
    // Añadir los roles con sus clases correspondientes
    hero.roles.forEach(role => {
      const roleSpan = document.createElement('span');
      roleSpan.className = `role ${role}`;
      
      // Traducir el nombre del rol al español
      const roleNames = {
        tank: 'Tanque',
        fighter: 'Combatiente',
        assassin: 'Asesino',
        mage: 'Mago',
        marksman: 'Tirador',
        support: 'Apoyo'
      };
      
      roleSpan.textContent = roleNames[role];
      rolesContainer.appendChild(roleSpan);
    });
    
    // Ensamblar la tarjeta
    card.appendChild(imageBox);
    card.appendChild(name);
    card.appendChild(rolesContainer);
    
    // Añadir evento de clic para mostrar detalles
    card.addEventListener('click', () => showHeroDetails(hero.name));
    
    // Añadir la tarjeta a la cuadrícula
    heroesGrid.appendChild(card);
  });
}

// Inicializar la página
document.addEventListener('DOMContentLoaded', function() {
  // Renderizar todos los héroes al cargar
  renderHeroes();
  
  // Configurar la búsqueda
  const searchInput = document.getElementById('searchInput');
  searchInput.addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    const filteredHeroes = heroes.filter(hero => 
      hero.name.toLowerCase().includes(searchTerm)
    );
    renderHeroes(filteredHeroes);
  });
  
  // Configurar los filtros por rol
  const filterButtons = document.querySelectorAll('.filter-btn');
  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Remover clase active de todos los botones
      filterButtons.forEach(btn => btn.classList.remove('active'));
      
      // Agregar clase active al botón clickeado
      this.classList.add('active');
      
      // Obtener el rol a filtrar
      const role = this.getAttribute('data-role');
      
      // Filtrar héroes
      if (role === 'all') {
        renderHeroes(heroes);
      } else {
        const filteredHeroes = heroes.filter(hero => 
          hero.roles.includes(role)
        );
        renderHeroes(filteredHeroes);
      }
    });
  });
  
  // Configurar el menú móvil
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const headerContent = document.getElementById('headerContent');
  
  mobileMenuBtn.addEventListener('click', function() {
    headerContent.classList.toggle('active');
  });
  
  // Cerrar el modal al hacer clic en la X
  document.querySelector('.close-btn').addEventListener('click', function() {
    document.getElementById('heroModal').style.display = 'none';
  });
  
  // Cerrar el modal al hacer clic fuera del contenido
  window.addEventListener('click', function(event) {
    if (event.target === document.getElementById('heroModal')) {
      document.getElementById('heroModal').style.display = 'none';
    }
  });
});