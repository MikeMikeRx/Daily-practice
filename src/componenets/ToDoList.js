import OneTask from "./OneTask"

const ToDoList = () => {
  return <div className="container">
    <div className="add-form">
        <form>
            <input type="text" />
            <input type="submit" />
        </form>        
    </div> 
    <div className="toDo-list">
        <OneTask/></div>
  </div>
  
}

export default ToDoList