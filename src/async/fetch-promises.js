const spinner = document.getElementById("spinner")
const output = (node => data => node.innerText = data )(document.getElementById('output'))
const sleep = period => new Promise( resolve => setTimeout(resolve,period) )

const getTitles = films =>
  films.map( film => `${film.episode_id}. ${film.title}` )
        .sort()
        .join('\n')

swapi.query('films')
  .then( data => {
    output( getTitles(data.results) )     
  })
  .catch( err => output(err) )
  .finally( () => spinner.remove() )