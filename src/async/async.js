const delay = (ms, callback) => setTimeout( callback, ms )

const delayPromise = (ms, callback) => new Promise( resolve => setTimeout( () => {
  resolve( callback() )
},ms) )

const resolveMessage = 'succeeded!'
const rejectMessage = 'always instantiate Error instead of returning string, to enable stack trace'

const exerciseResolve = () => Promise.resolve( resolveMessage )
const exerciseReject = () => Promise.reject( new Error(rejectMessage) )

module.exports = {
  delay,
  delayPromise,
  resolveMessage,
  rejectMessage,
  exerciseResolve,
  exerciseReject
}