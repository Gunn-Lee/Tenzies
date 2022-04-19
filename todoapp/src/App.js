import React from "react"
import Todo from"./Todo.js"
import {nanoid} from "nanoid"
import './style.css';

function App() {
  const [currentInput, setCurrentInput]=React.useState("")
  const [currentEdit, setCurrentEdit]=React.useState("")
  const [formData, setFormData]=React.useState([])
  const [editId, setEditId] = React.useState(0)

  React.useEffect(() => {
    setCurrentInput(prevInput => "")
    setCurrentEdit(prevEdit=>"")
    setEditId(0)
  },[formData])

  function handleChangeAdd(event) {
    setCurrentInput(prevInput => (event.target.value))
  }
  function handleChangeEdit(event) {
    setCurrentEdit(prevEdit => (event.target.value))
  }

  function addTodo (event) {
	  event.preventDefault()
    const newIn = {
      id: nanoid(),
      todo: currentInput
    }
    if(currentInput) {setFormData(prevData => [newIn, ...prevData])}
    else {console.log("No Entry!")}
  }
  function deleteTodo (event, id) {
    event.stopPropagation()
    setFormData(prevData => {
      return prevData.filter(todo => todo.id !== id)
    })
  }

  function editTodo (id) {
    setEditId(id)
    console.log(editId)
  }

  function submitEdit(event) {
    event.preventDefault()
    setFormData(prevData => prevData.map((data) => (
      data.id === editId?
      {...data, todo: currentEdit}:
      data
    )))
  }

  return (
    <div className="App">
      <Todo
        currentInput={currentInput}
        currentEdit={currentEdit}
        data={formData}
        handleChangeAdd={(event)=>handleChangeAdd(event)}
        handleChangeEdit={(event) =>handleChangeEdit(event)}
        addTodo={(event) => addTodo(event)}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
        editId={editId}
        submitEdit={(event) => submitEdit(event)}
      />
    </div>
  );
}

export default App;
