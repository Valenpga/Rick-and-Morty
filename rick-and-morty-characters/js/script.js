/*const DivPagina = document.getElementById('pagination');
const ButtonPrev = document.getElementById('prev-page');
const ButtonNex = document.getElementById('next-page');
*/
const DivPagina = document.getElementById('pagination');

pagination.addEventListener('click',(pagination) => {
    fetch('https://rickandmortyapi.com/api/character/?page=1')
    .then(response => response.json())
    .then (response => {
        console.log(response)
    })
})
const ButtonPrev = document.getElementById('prev-page');
const ButtonNex = document.getElementById('next-page');
let pagina = 1;
ButtonPrev.addEventListener('click', function() { pagina = pagina + 1; fetchPersonajes(pagina); });

ButtonNex .addEventListener('click', function() { pagina = pagina - 1; fetchPersonaje(pagina); });
    
   



/*const listaDePersonajes = (paginationId,() => {
    const pagination = document.getElementById(paginationId);
    listaDePersonajes.forEach,() => {
        let  templateList = ``
        <div class = 'personajes'>
            
        </div>
        buttonId.innerHTML += templateList;    

    }
});
*/
/*fetch('https://rickandmortyapi.com/api/character/?page=1')
    .then(response => response.json())
    .then(response => {
        for(personage of response.results){
            console.log(personage.name)
        }
    })
*/

/*fetch('https://rickandmortyapi.com/api/character/?page=1')
    .then(response => response.json())
    .then (response => {
        console.log(response)
    })
*/