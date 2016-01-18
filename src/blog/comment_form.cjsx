React             = require 'react'
{RestForm, Forms} = require 'react-at-rest'

module.exports = class CommentForm extends RestForm

  @displayName = 'CommentForm'

  handleSubmit: (e) =>
    # reset the form
    @setState patch: {}
    super e


  render: ->
    <form onSubmit={@handleSubmit} className="form-horizontal">
      <Forms.TextAreaInput {...@getFieldProps('message')}
        labelClassName='col-sm-4'
        inputWrapperClassName='col-sm-8'/>
      <Forms.TextInput {...@getFieldProps('author')}
        labelClassName='col-sm-4'
        inputWrapperClassName='col-sm-8'/>
      <div className='text-right'>
        <button className='btn btn-primary' disabled={_.isEmpty @state.patch}>Submit Comment</button>
      </div>
    </form>
