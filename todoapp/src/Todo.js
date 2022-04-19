import React from "react"
import "./style.css"

export default function Todo (props) {

  const toDoElement = props.data.map((data) => (
    <div className="todo-block" key={data.id}>
      <div className="todo-content">
        <button className="delete-btn" onClick={(event) => props.deleteTodo(event, data.id)}>v</button>
        <span className="todo-span" onClick={() => props.editTodo(data.id)}>{data.todo}</span>
      </div>
      {data.id === props.editId && (
        <form onSubmit={props.submitEdit}className="todo-edit-form">
          <input className="todo-edit"
            type="text"
            placeholder={data.todo}
            onChange={props.handleChangeEdit}
            name="editInput"
            value={props.currentedit}
          />
          <button>Update</button>
        </form>
      )}
    </div>
  ))

  return(
    <div className="todo">
      <div className="todo-input">
        <form onSubmit={props.addTodo}>
          <input
            className="input-top"
            type="text"
            placeholder="Add to do"
            onChange={props.handleChangeAdd}
            name="currentInput"
            value={props.currentInput}
          />
          <button className="add-btn">Add</button>
        </form>
      </div>
      <div className="todo--post">
        {toDoElement}
      </div>
    </div>
  )
}
