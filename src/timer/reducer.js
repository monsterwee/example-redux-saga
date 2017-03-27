import { duration } from 'moment'
import { compose, multiply, not, prop } from 'ramda'

/* Reducer */
const timerduration = 180
export default (
  state = {
    status: 'Stopped',
    seconds: timerduration,
    direction: -1,
  }, action) => {
  switch (action.type) {
    case 'START':
      return { ...state, status: 'Running' }
    case 'STOP':
      return { ...state, status: 'Stopped' }
    case 'TICK':
      return { ...state, seconds: state.seconds + state.direction }
    case 'FLIPTIMER' :
      return { ...state, direction: -1*state.direction}
    case 'RESET':
      return { ...state, seconds: timerduration, direction: -1 }
    default:
      return state
  }
}

/* Selectors */

// getFormattedTime :: State -> String
export const getFormattedTime = (state) => {
  return state.direction===-1 ? formatTime(state.seconds * 1000) : formatTime((timerduration-state.seconds) * 1000)
}

export const getStatus = (state) => state.status
export const getIsOver = (state) => (state.seconds + state.direction < 0) || (state.seconds + state.direction > timerduration)

/* Private helpers */

// pad :: Number -> String
const pad = (t) => t < 10 ? `0${t}` : `${t}`

// formatMoment :: Moment -> String
const formatMoment = (m) => `${pad(m.minutes())}:${pad(m.seconds())}`

// formatTime :: Number -> String
const formatTime = compose(formatMoment, duration)
