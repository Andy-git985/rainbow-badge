document.addEventListener('submit', getFetch)

function getFetch(evt) {
  evt.preventDefault() 
  const url1 = 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0'

  fetch(url1)
    .then(res => res.json())
    .then(data => {
      const random = Math.floor(Math.random() * data.results.length)

      fetch(data.results[random].url)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        console.log(data.name);
        // console.log(data.sprites.front_default);
        // console.log(data.sprites.front_shiny);
        if (data.sprites.other.home) {
          document.body.style.background =  
            `url('${data.sprites.other.home.front_default}') no-repeat center,
            url('${data.sprites.other.home.front_shiny}') no-repeat top right,
            url('${data.sprites.other['official-artwork'].front_default}') no-repeat bottom left,
            url('${data.sprites.front_default}') repeat`
        } else {
          document.body.style.background =  
          `url('${data.sprites.other['official-artwork'].front_default}') no-repeat center,
          url('${data.sprites.front_default}') repeat`
        }
        document.querySelector('#pokemon').textContent = data.name
      })
      .catch(err => {
        console.log(`error ${err}`);
      })

    })
    .catch(err => {
      console.log(`error ${err}`);
    })
}

