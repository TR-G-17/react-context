import React, {useState} from 'react'
import Header from "./Header";
import TodoList from "./TodoList";


const getTodos = () => {
    return []
}

const App = () => {
    const [todo, setTodo] = useState( getTodos() )
    const addTodo = todoRecord => {
        // const arr = [...todo]
        // arr.push(todoRecord)
        setTodo([...todo, {id: Date.now(), title:todoRecord, isDone: false}])
    }
    const makeDone = idx => {
        const arr = [...todo]
        arr[idx].isDone = true
        setTodo( arr )
    }
    return (
        <section>
            <Header
                addTodo={addTodo}
            />
            <hr/>
            <TodoList
                todo={todo}
                makeDone={makeDone}
            />
        </section>
    )
}

export default App