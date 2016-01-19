React     = require 'react'
{DeliveryService, Store}  = require 'react-at-rest'
Comments  = require './comments'

module.exports = class BlogPosts extends DeliveryService

  @displayName = 'BlogPosts'


  constructor: (props) ->
    super props
    @postStore = new Store 'posts'


  bindResources: (props) ->
    @subscribeAll @postStore


  render: ->
    return <span>Loading...</span> unless @state.loaded

    posts = for post in @state.posts
      <div className="panel panel-default" key={post.id}>
        <div className="panel-heading">
          <h3 className="panel-title">{post.title}</h3>
        </div>
        <div className="panel-body">
          {post.body}
        </div>
        <Comments postId={post.id} />
      </div>

    <div>
      {posts}
    </div>
