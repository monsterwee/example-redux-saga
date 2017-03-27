import React, { PropTypes } from 'react'

export const Timer = ({ start, stop, reset, time, status, fliptimer }) => (
<div>
  <div className="jumbotron">
    <div className="container">
      <h1 style={{fontSize: '30vw'}}>{ time }</h1>
      <p>({ status })</p>
        <button
          disabled={status === 'Stopped'}
          className="btn  btn-primary btn-lg"
          onClick={fliptimer}>
          Flip timer
        </button>
    </div>
  </div>

  <div className="container">
    <div className="btn-group btn-group-justified" role="group">
      <div className="btn-group" role="group">
        <button
          disabled={status === 'Running'}
          className="btn btn-default"
          onClick={() => reset()}>
          Reset
        </button>
      </div>
      <div className="btn-group" role="group">
        <button
          disabled={status === 'Running'}
          className="btn btn-default"
          onClick={() => start()}>
          Start
        </button>
      </div>
      <div className="btn-group" role="group">
        <button
          disabled={status === 'Stopped'}
          className="btn btn-default"
          onClick={stop}>
          Stop
        </button>
      </div>
    </div>

  </div>
  <footer className="footer">
        <div className="container">
          <p className="text-muted"><a href="https://github.com/monsterwee/example-redux-saga">github repository</a></p>
        </div>
      </footer>
</div>
)

Timer.propTypes = {
  start: React.PropTypes.func.isRequired,
  stop: React.PropTypes.func.isRequired,
  status: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired
}
