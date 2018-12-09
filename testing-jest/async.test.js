const _ = require('../src/async/async')

describe( 'async operations', () => {

  const expected = 'finished'

  test('pass generic callback', done => {
    const wait = 1000
    let result
    
    _.delay( wait, () => {
      result = expected
    })
  
    setTimeout( () => {
      expect(result).toBe( expected )
      done()
    }, wait +100 )
  })

  test('manually promisify callback', () => {
    return _.delayPromise( 1000, () => expected ).then(
      result => { expect(result).toBe( expected ) }
    )
  })

  test('alternate test syntax for manual promisify', () => {
    const cb = () => expected
    return expect( _.delayPromise(1000,cb) ).resolves.toBe( expected )
  })

  test('async test syntax for manual promisify', async () => {
    try {
      const result = await _.delayPromise( 1000, () => expected )
      expect(result).toBe(expected)
    } catch( err ) {
      console.log('do not go here')
    }
  })

  test('alternate async test syntax for manual promisify', async () => {
    try {
      const prom = _.delayPromise( 1000, () => expected )
      await expect( prom ).resolves.toBe(expected)
    } catch( err ) {
      console.log('do not go here')
    }
  })

  test( 'detect failure in a set of MULTIPLE assertions', async () => {
    try {
      const [data1, data2 ] = await Promise.all([ _.exerciseResolve(), _.exerciseReject() ])
      expect(data1).toBe( _.resolveMessage ) // this will never be evaluated!!!
    } catch( err ) {
      expect(err.message).toBe( _.rejectMessage )
    }
    
    // Q: So how can we handle BOTH successes AND failures in a SET of async operations? 
  })
})