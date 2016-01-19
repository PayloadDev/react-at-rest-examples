React = require 'react'
{DeliveryService, Store} = require 'react-at-rest'
CommentForm = require './comment_form'

module.exports = class Comments extends DeliveryService

  @displayName = 'Comments'

  @propTypes =
    postId: React.PropTypes.number.isRequired


  constructor: (props) ->
    super props
    @commentStore = new Store 'comments'


  bindResources: ->
    @subscribeAll @commentStore, null,
      parentResourcesKey: 'posts'
      parentResourceId:   @props.postId


  render: ->
    return <span>Loading comments...</span> unless @state.loaded

    comments = for comment in @state.comments
      <p key={comment.id}>{comment.message} — <i>{comment.author}</i></p>

    <div className="panel-footer">
      {comments}
      <hr/>
      <CommentForm
        store={@commentStore}
        model={{message: '', author: ''}}
        parentResourceId={@props.postId}
        parentResourcesKey='posts'
        onSuccess={@handleSuccess} />
    </div>
