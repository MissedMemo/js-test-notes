const { API, query } = require('../src/async/swapi-client.js')

describe( 'Star Wars API access routines', () => {
  test('query for swapi data', async () => {
    const data = await query('films')
    expect( data.results.length ).toBe(7)
  })
})