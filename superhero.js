const superheroesContainer = document.getElementById('superheroes-container');
const searchInput = document.getElementById('search-input');


if (!localStorage.getItem('loggedIn')) {
    window.location.href = 'index.html';
}

function renderSuperheroes(superheroes) {
    superheroesContainer.innerHTML = '';
    superheroes.forEach((superhero) => {
        const superheroHTML = `
            <div class="superhero">
                <img src="${superhero.image}" alt="${superhero.name}">
                <h2>${superhero.name}</h2>
                <p>${superhero.description}</p>
                <p>${superhero.tagline}</p>
            </div>
        `;
        superheroesContainer.insertAdjacentHTML('beforeend', superheroHTML);
    });
}

searchInput.addEventListener('input',function(e)){
    if (condition) {
        
    }
}