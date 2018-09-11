import React from 'react'
import IconButton from '../template/iconButton'

export default props => {
  
  const renderRows = () => {
    const list = props.list || []
    return list.map( todo => (
      <tr key={todo._id}>
        <td className={todo.done ? 'markedAsDone' : ''}>{todo.description}</td>
        <td>
          <IconButton style="success" icon="check" onClick={() => props.handleMarkAsDone(todo)} hide={todo.done} />
          <IconButton style="warning" icon="undo" onClick={() => props.handleMarkAsPending(todo)} hide={!todo.done} />
          <IconButton style="danger" icon="trash-o" onClick={() => props.handleDelete(todo)} hide={!todo.done} />
        </td>
      </tr>
    ))
  }

  return(
    <table className="table">
      <thead>
        <tr>
          <th className="col-xs-6 col-sm-9 col-md-10 col-lg-10">Descrição</th>
          <th className="col-xs-6 col-sm-3 col-md-2 col-lg-2">Ações</th>
        </tr>
      </thead>
      <tbody>
          {renderRows()}
      </tbody>
    </table>
  )
}