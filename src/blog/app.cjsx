React = require 'react'
{EventableComponent, AppEvents} = require 'react-at-rest'
BlogPosts = require './blog_posts'

# EventableComponent provides event handling methods such as @listenTo and @stopListening
class App extends EventableComponent

  componentDidMount: ->
    # set up some global error handling
    @listenTo AppEvents, 'api.exception', (error) ->
      console.error(error)

  render: ->
    <div className='container'>
      <h1>Blog</h1>
      <BlogPosts />
    </div>


module.exports = App
