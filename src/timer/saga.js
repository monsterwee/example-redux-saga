import { actionChannel, call, take, put, race, select } from 'redux-saga/effects'
import * as actions from './actions'
import {getIsOver} from './reducer'

// wait :: Number -> Promise
const wait = ms => (
  new Promise(resolve => {
    setTimeout(() => resolve(), ms)
  })
)

function* runTimer() {
  const channel = yield actionChannel('START')

  while(yield take(channel)) {
    while(true) {
      const winner = yield race({
        stopped: take('STOP'),
        switched: take('FLIPTIMER'),
        tick: call(wait, 1000)
      })

      if (winner.switched) {
      }
      else if (!winner.stopped) {
        const isOver = yield(select(getIsOver))
        if (isOver) {
          yield put(actions.stop())
          break
        }
        else {
          yield put(actions.tick())
        }
      } else {
        break
      }
    }
  }
}

export default runTimer
