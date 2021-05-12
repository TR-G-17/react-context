import React from "react"
import TodoItem from "./TodoItem";

const TodoList = ({todo, makeDone}) => {
    return (
        <div>
            <h3>ToDoList</h3>
            <ul>
                { todo.map((item, idx) => (
                    <li
                        key={item.id}
                    >
                        <TodoItem
                            item={item}
                        />
                        <button
                            onClick={ () => {makeDone(idx)} }
                        >Done</button>
                    </li>
                )) }
            </ul>
        </div>
    )
}

export default TodoList