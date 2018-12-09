const API = 'https://swapi.co/api/'
const spinner = document.getElementById("spinner")
const output = (node => data => node.innerText = data )(document.getElementById('output'))
const sleep = period => new Promise( resolve => setTimeout(resolve,period) )

const getTitles = films =>
  films.map( film => `${film.episode_id}. ${film.title}` )
        .sort()
        .join('\n')

sleep(3000).then( () => fetch( API + 'films' )
  .then( res => {
    if (!res.ok) return Promise.reject( new Error('invalid path!') )
    return res.json() 
  })
  .then( data => {
    output( getTitles(data.results) )     
  })
  .catch( err => output(err) )
  .finally( () => spinner.remove() ))