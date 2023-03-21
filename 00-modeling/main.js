import '../style.css';

// Create a state machine transition function either using:
// - a switch statement (or nested switch statements)
// - or an object (transition lookup table)

// Also, come up with a simple way to "interpret" it, and
// make it an object that you can `.send(...)` events to.

const machine =  {
  states: {
    loading: {
      on: {
        loaded: {
          state: 'playing'
        }
      }
    },
    playing: {
      on: {
        pause:
        {
          state: 'paused'
        }
      }
    },
    paused: {
      on: {
        play:
        {
          state: 'playing'
        }
      }
    }
  }
}

let currentState = {
  value: 'loading'
}

const machineTransition = (state, event) => {
  const newState = machine.states[state.value]?.on[event].state ?? state.value
  return { value: newState }
}

const send = (event) => {
  console.log('send')
  currentState = machineTransition(currentState, event)
  console.log('current',currentState)
  return currentState
}

send('loaded')
send('pause')
send('play')

const createPerson = (name, age, gender) => {
  return {
    name: name,
    age: age,
    gender: gender
  }
}

console.log(createPerson('john','32','male'))
