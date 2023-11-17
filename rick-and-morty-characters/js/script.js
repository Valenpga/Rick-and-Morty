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
const characterList = document.getElementById('characterList')
const prevPageButton = document.getElementById('prev-page');
const nexPageButton = document.getElementById('next-page');

let currentPage = 1

const getCharactersRickAndMorty = (page) => {
    fetch('https://rickandmortyapi.com/api/character/?page=${page}')
    .then(response => {
        if (!response.ok) {
            throw new Error('La solicitud no se puede procesar')
        }    return response.json()
        
    })
    .then(data =>{
        const characters = data.results
        characterList.innerHTML = ''
        characters.forEach(element => {
            characterList.innerHTML += `
                <li>
                    <figure>
                        <img src="${element.image}" alt="${element.name}"/>
                        <figcaption>
                            <p><span>Name:</span>${element.name}</p>
                            <p><span>Species:</span>${element.species}</p>
                        </figcaption>
                    </figure>
               </li>`

        })
    })
    
}

nextPageButton.addEventListener('click',function(){
    if(currentPage < 42)
        getCharactersRickAndMorty(currentPage ++);
})
prevPageButton.addEventListener('click', function(){
    if(currentPage > 1)
        getCharactersRickAndMorty(currentPage --);
})

getCharactersRickAndMorty(currentPage)


    
   



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
