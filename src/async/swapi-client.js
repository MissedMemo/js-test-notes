const API = 'https://swapi.co/api/'

const query = querystring =>
  fetch( API + querystring )
    .then( res => // handle invalid sub-path (API + 'dogs') which DOES NOT reject, but returns empty object! 
      res.ok ? res.json() : Promise.reject( new Error('invalid path!') )
    )
    .catch( err => Promise.reject(err) )