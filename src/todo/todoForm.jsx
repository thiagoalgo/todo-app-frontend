import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import Grid from '../template/grid'
import IconButton from '../template/iconButton'
import {changeDescription, search} from '../todo/todoActions'

class TodoForm extends Component {
  constructor(props) {
    super(props)

    this.keyHandler = this.keyHandler.bind(this)
  }

  componentWillMount() {
    this.props.search()
  }

  keyHandler(e) {
    if (e.key === 'Enter') {
      e.shiftKey ? this.props.handleSearch() : this.props.handleAdd()
    } else if(e.key === 'Escape') {
      this.props.handleClear()
    }
  }

  render() {
    return (
      <div>
        <div role="form" className="todoForm">
          <Grid cols="12 9 9 9">
            <input type="text" id="description" className="form-control" 
              placeholder="Adicione uma tarefa"
              onChange={this.props.changeDescription} 
              onKeyUp={this.keyHandler}
              value={this.props.description} />
          </Grid>
          <Grid cols="12 3 3 3">
            <IconButton style="primary" icon="plus" onClick={this.props.handleAdd} />
            <IconButton style="info" icon="search" onClick={this.props.handleSearch} />
            <IconButton style="default" icon="close" onClick={this.props.handleClear} />
          </Grid>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({description: state.todo.description})
const mapDispatchToProps = dispatch => (bindActionCreators({changeDescription, search}, dispatch))

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)