let botonAPI = document.getElementById('obtainapi');

botonAPI.addEventListener('click', () => {
fetch('http://www.omdbapi.com/?apikey=e405a491&s=batman')
.then(response => response.json())
.then(data => {
    console.log(data);
    console.log(data.Search);
    
    data.Search.forEach(element => {
        console.log(element.Title);
        let contenedorPeliculas = document.getElementById('contenedor-peliculas');
        contenedorPeliculas.innerHTML += `
        <div class="img-fluid" style="width: 18rem;" >
            <img src="${element.Poster}" class="img-fluid" alt="...">
            <div class="card-body">
                <h5 class="card-title">${element.Title}</h5>
                <p class="card-text">${element.Year}</p>
            </div>
        </div>
        `;
    });
  });
})
