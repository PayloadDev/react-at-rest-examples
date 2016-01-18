_ = require 'lodash'
React = require 'react'
ReactDOM = require 'react-dom'
AtRest = require 'react-at-rest'

App = require './app'

# our test API doesn't envelope the response
AtRest.Store.API_ENVELOPE = false

ReactDOM.render <App />, document.getElementById('app')
